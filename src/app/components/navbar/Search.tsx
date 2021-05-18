import React from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
	{
		name: 'Felix Pujols',
		id: 1,
	},
	{
		name: 'Elm',
		id: 2,
	},
	{
		name: 'Elmawesrtf',
		id: 3,
	},
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: languages.filter((lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: Record<string, any>) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: Record<string, any>) => <div>{suggestion.name}</div>;

class Search extends React.Component {
	constructor() {
		super();

		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
			value: '',
			suggestions: [],
		};
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue,
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};

	render() {
		const { value, suggestions } = this.state;

		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: 'Buscar',
			value,
			onChange: this.onChange,
		};

		// Finally, render it!
		return (
			<div className=" sidebar-search-form flex justify-start items-center w-44 bg-gallery-default pl-4 pr-2 rounded-xl h-12">
				<div className="mr-3">
					<svg width="21" height="22" className="fill-current">
						<path
							d="M8.79883 17.5139C10.4609 17.5139 12.0107 17.031 13.3247 16.2L17.8169 20.6921C18.1426 21.0291 18.5806 21.1863 19.041 21.1863C20.0181 21.1863 20.7368 20.4338 20.7368 19.468C20.7368 19.03 20.5796 18.592 20.2539 18.2551L15.7954 13.7966C16.7163 12.449 17.2441 10.8206 17.2441 9.0686C17.2441 4.43042 13.4482 0.623291 8.79883 0.623291C4.17188 0.623291 0.364746 4.41919 0.364746 9.0686C0.364746 13.718 4.16064 17.5139 8.79883 17.5139ZM8.79883 15.0769C5.5083 15.0769 2.80176 12.3704 2.80176 9.0686C2.80176 5.76685 5.5083 3.0603 8.79883 3.0603C12.1006 3.0603 14.8071 5.76685 14.8071 9.0686C14.8071 12.3704 12.1006 15.0769 8.79883 15.0769Z"
							fill="#676A6E"
						/>
					</svg>
				</div>
				<div className="searchInput raleway-font">
					<Autosuggest
						suggestions={suggestions}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
						inputProps={inputProps}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
