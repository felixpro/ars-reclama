import React from 'react';

function Home({ handlePath }) {
	return (
		<div>
			<button onClick={() => handlePath(null, 'Lucas Jhon')}>add client path</button>
			<div className=" col-span-10">Inicio</div>
		</div>
	);
}

export default Home;
