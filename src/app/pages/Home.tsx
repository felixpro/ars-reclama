import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import NavBar from '../components/navbar/NavBar';

function Home() {
	return (
		<div className="grid grid-cols-12 gap-4">
			<div className="col-span-2">
				<SideBar />
			</div>

			<div className=" col-span-10">
				<NavBar />
				HOME SECTION
			</div>
		</div>
	);
}

export default Home;
