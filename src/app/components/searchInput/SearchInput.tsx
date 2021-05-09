import React from 'react';
import searchIcon from '../../../assets/images/icono_buscar.svg';

interface SearchInputProps {
	onChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	return (
		<>
			<img alt="" src={searchIcon} className="mr-2.5" />
			<input
				type="text"
				placeholder="Buscar cliente"
				className="w-28"
				style={{ fontFamily: 'Raleway-SemiBold' }}
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
