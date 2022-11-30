const Contact = () => {
	const inpSty =
		' rounded-md py-1 w-full px-2 outline-none font-light text-sm';
	return (
		<div className="w-full flex flex-col">
			<div className="w-1/2 mx-auto flex flex-col space-y-2">
				<div className="w-full flex md:flex-row flex-col md:space-x-4">
					<input className={inpSty} placeholder="First Name"></input>
					<input className={inpSty} placeholder="Last Name"></input>
				</div>
				<input className={inpSty} placeholder="E-mail"></input>
				<textarea
					type="text"
					className={inpSty}
					placeholder="Message"></textarea>
				<button className="bg-yellow-300 rounded-md text-sm mt-4 p-2 text-gray-800  w-1/2 md:w-1/4 mx-auto">
					Submit
				</button>
			</div>
		</div>
	);
};
export default Contact;
