const Shimmer = () => {
	return (
		<>
			<div className="resturant-list flex flex-wrap shadow-lg  max-w-screen-2xl justify-center my-32 rounded-lg">
				{Array(20)
					.fill("")
					.map((e, index) => (
						<div
							key={index}
							className="w-64 h-fit m-3 p-4 shadow-lg shadow-zinc-500 flex-wrap ">
							<div className="w-56 basis- h-36 shadow-lg justify-center   animate-pulse	 rounded-md  bg-gray-300   ">
								{" "}
							</div>
							<div className="w-44 h- mt-4 shadow-md  bg-stone-300 p-3  animate-pulse	 justify-start rounded-md"></div>
							<div className="w-48 h-3 mt-4  shadow-md  bg-stone-300 p-2 animate-pulse	  justify-start rounded-md"></div>
							<div className="w-full h-3 mt-4  shadow-md  bg-stone-300 p-2  animate-pulse	 justify-start rounded-md"></div>
						</div>
					))}
					<h1> Sorry.. for the delay We are loading the data</h1>
			</div>
		</>
	);
};

export default Shimmer;