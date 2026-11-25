import uber from "../assets/uber.png";
import { Link } from 'react-router-dom'

const Start = () => {
	return (
		<div>
			<div
				className="h-screen pt-6 flex justify-between flex-col w-full bg-[#f5f5f5] bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url(${uber})`,
				}}
			>
				<img
					className="w-24 ml-5"
					src="https://imgs.search.brave.com/dP-nhv2AI8MlNX8CuO06kb0KSPsdjlC53Jog_wuEBSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9VYmVyL1Vi/ZXItV2hpdGUtRGFy/ay1CYWNrZ3JvdW5k/LUxvZ28ud2luZS5z/dmc"
					alt="Uber Logo"
				/>

				<div className="bg-white py-8 px-7 rounded-t-3xl shadow-[0_-5px_30px_rgba(0,0,0,0.06)]">
					<h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
						Get Started With Uber
					</h2>

					<p className="text-gray-500 text-sm mb-7">
						Your ride is just one tap away.
					</p>

					<Link to="/user-login" className="flex w-full items-center justify-center bg-black text-white py-4 px-5 rounded-xl font-semibold text-base hover:bg-gray-800 active:scale-[0.98] transition-all">
						Continue
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Start;
