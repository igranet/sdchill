import React from 'react';
import Header from '../components/header';
import chillLogo from '../assets/chill.png';
const HomePage = () => {
	return (
		<div className="w-full h-screen bg-chill-bg flex flex-col px-4 overflow-y-scroll pb-12">
			<Header></Header>
			<div className="w-full flex flex-col text-center">
				<div className="mx-auto text-6xl text-sky-800 mt-20 font-semibold">
					The San Diego Chill.
				</div>
				<div className="mt-12">
					<iframe
						className="mx-auto md:w-1/2 w-3/4 h-72 rounded-md"
						src="https://www.youtube.com/embed/B3VxXBVoBIU"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen></iframe>
				</div>
				<div className="flex flex-col mt-12">
					<div className=" font-bold text-blue-800">About Us</div>
					<div className="mt-2 w-full md:w-1/2 mx-auto">
						We are a registered 501c (3) non-profit organization
						dedicated to helping children of all ages with
						developmental disabilities learn to skate and play
						amateur level ice hockey. Our Mission is to ensure that
						any child, regardless of age or ability, can experience
						the magic of gliding across the ice, the thrill of
						shooting a goal, the bond of being part of a team, and
						the mentorship of our experienced teenage ice hockey
						coaches. Lives of all kids - skater and coach - are
						forever bonded and changed.
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
