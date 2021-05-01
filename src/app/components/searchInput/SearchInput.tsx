import React from 'react';
import searchIcon from '../../../assets/images/icono_buscar.svg';

interface SearchInputProps {
	onChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	return (
		<>
			<img alt="" src={searchIcon} className="mr-2" />
			<input
				type="text"
				placeholder="Buscar cliente"
				className="w-28"
				onChange={(event) => {
					if (props.onChange) {
						props.onChange(event.target.value);
					}
				}}
			/>
		</>
	);
};

export default SearchInput;
