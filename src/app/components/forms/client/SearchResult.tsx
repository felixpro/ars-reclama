import React, { useContext, useEffect, useState } from 'react';
import { ClientsContext } from '../../../context/client-context';

function SearchResult({ idInputValue }) {
	const { clients } = useContext(ClientsContext);
	const [clientsResult, SetClientsResult] = useState([]);

	const handleChange = () => {
		const lettersNumber = idInputValue.length;
		const clientMach = clients
			? clients
					.filter((client) => client.insurance.slice(0, lettersNumber) === idInputValue)
					.slice(0, 4)
			: 0;
		SetClientsResult(clientMach);
	};

	useEffect(() => {
		handleChange();
	}, [idInputValue]);

	return (
		<div className="absolute">
			{idInputValue.length > 0 && clientsResult.length > 0 ? (
				<div className="w-56 rounded-lg border-2 border-harp-default bg-white-section pl-4 pr-4 pb-4 mt-1.5">
					{clientsResult.map((client) => (
						<div key={client.id} className="pt-3.5">
							<a
								href="https://www.w3schools.com/"
								className="flex items-center w-full justify-between "
							>
								{client.name}
								<svg
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.86062 1.90332L4.95898 5.40332L1.86062 8.90332"
										stroke="#3F48AD"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}

export default SearchResult;
