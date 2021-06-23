import React from 'react';

function Home({ handlePath }) {
	return (
		<div>
			<button onClick={() => handlePath(null, 'Lucas Jhon')}>add client path</button>
			<h1>Home</h1>
		</div>
	);
}

export default Home;
