import chillLogo from '../assets/chill.png';
const Header = () => {
	const headerLinks = [];

	return (
		<div className="md:w-full flex w-full fixed md:grid md:grid-cols-2 px-2 pt-4 bg-chill-bg z-50">
			<div className="w-full flex">
				<span className="font-medium italic text-sky-600 my-auto">
					<img src={chillLogo} className="h-6 md:ml-24 ml-4" />
				</span>
			</div>
			<div className="w-full flex flex-row justify-end px-24 space-x-4 text-sm md:block hidden">
				<button className="my-auto text-gray-700 hover:bg-sky-500 p-2 rounded-md duration-200 cursor-pointer">
					About
				</button>
				<button className="my-auto text-gray-700 hover:bg-sky-500 p-2 rounded-md duration-200 cursor-pointer">
					Get In Touch
				</button>
				<button
					onClick={() => {
						window.location.href = '/donate';
					}}
					className="bg-yellow-300 py-2 px-4 rounded-md text-gray-500 my-auto cursor-pointer">
					Donate
				</button>
			</div>
		</div>
	);
};
export default Header;
