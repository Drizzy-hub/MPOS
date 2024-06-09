import { Footer, HomeHeader } from '../../components';
import payment from '../../assets/images/payment.svg';
import { imageContainersData } from './data';
import { features, needs } from '../../constants/data';

import check from '../../assets/icons/check.svg';
import map from '../../assets/images/map.svg';
import DashboardImage from '../../assets/icons/imageOne.svg';

const Landing = () => {
	return (
		<>
			<HomeHeader />
			<div className="p-10"></div>
			<div className="h-screen lg:w-2/3 p-5 flex items-center justify-center flex-col m-auto">
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-secondary">
					Online & Offline Point of Sale System for all Businesses.
				</h1>
				<p className="text-secondary text-center mt-8 text-base md:text-lg">
					Manage your online or offline business seamlessly from any device of
					your choice.
				</p>
				<div className="mt-10">
					<button className="rounded-full py-3 cursor-pointer mb-5 border border-primary text-md bg-primary text-white w-full">
						Try for free
					</button>
					<button className="rounded-full py-3 cursor-pointer mb-5 border border-primary text-md bg-transparent text-primary w-full">
						Download the app
					</button>
				</div>
			</div>
			<div className="flex md:flex-row flex-col justify-center items-center mx-auto px-5 md:px-10 lg:px-20">
				<img src={DashboardImage} alt="" className="w-auto" />
			</div>
			<div className="px-5 md:px-10 lg:px-20 py-20 flex flex-col md:flex-row items-stretch justify-between gap-10">
				{imageContainersData.map(
					({ backgroundColor, title, subtitle, image }, index) => (
						<div
							key={title}
							className={`w-full rounded-xl p-5 text-center`}
							style={{ backgroundColor: backgroundColor }}
						>
							<img className="w-3/4 mx-auto" src={image} alt={title} />
							<p className="font-bold text-lg mt-5 mb-3">{title}</p>
							<p className="text-sm">{subtitle}</p>
						</div>
					)
				)}
			</div>
			<div className="px-5 md:px-10 lg:px-20 py-20 grid gap-10 items-center grid-cols-1 md:grid-cols-2">
				<div className="">
					<h1 className="mb-8 text-left text-3xl lg:text-5xl lg:leading-[60px] font-bold">
						A Complete Multiple Payment Options
					</h1>
					<p className="mb-14 text-lg">
						Regardless of how your customer chooses to pay, your business can
						accept it. We offer a wide range of payment options including cash,
						card, mobile money, bank transfer and more. And generate a receipt
						immediately
					</p>
					<button className="rounded-full py-2 cursor-pointer w-auto px-10 border border-primary text-md bg-primary text-white">
						Try for free
					</button>
				</div>
				<img src={payment} alt="im" className=" mx-auto" />
			</div>
			<div className="px-5 md:px-10 lg:px-20">
				<div className="lg:w-3/5">
					<h1 className="text-3xl lg:text-5xl lg:leading-[60px] font-bold mb-3">
						One Platform for all Your Business Needs.
					</h1>
					<p className="text-base md:text-lg text-secondary/50 mb-16">
						Get all the resources you need to grow your business MPOS is
						efficient, effective and the best tool to grow your businesses.
					</p>
				</div>

				<div className="shadow-xl grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div className="w-full">
						<h2 className="font-semibold text-xl text-center py-3 bg-[#F8EDE3]">
							Manage
						</h2>
						{needs.manage.map(({ title, details }) => (
							<div className="mb-2 bg-[#f9f9f9] p-5">
								<p className="font-semibold mb-3 text-lg">{title}</p>
								<p className="text-secondary/50 text-sm">{details}</p>
							</div>
						))}
					</div>
					<div className="w-full">
						<h2 className="font-semibold text-xl text-center py-3 bg-[#F1F6F5]">
							Sell
						</h2>
						{needs.sell.map(({ title, details }) => (
							<div className="mb-2 bg-[#f9f9f9] p-5">
								<p className="font-semibold mb-3 text-lg">{title}</p>
								<p className="text-secondary/50 text-sm">{details}</p>
							</div>
						))}
					</div>
					<div className="w-full">
						<h2 className="font-semibold text-xl text-center py-3 bg-[#FFFAE7]">
							Report
						</h2>
						{needs.report.map(({ title, details }) => (
							<div className="mb-2 bg-[#f9f9f9] p-5">
								<p className="font-semibold mb-3 text-lg">{title}</p>
								<p className="text-secondary/50 text-sm">{details}</p>
							</div>
						))}
					</div>
					<div className="w-full">
						<h2 className="font-semibold text-xl text-center py-3 bg-[#F0FFF9]">
							Grow
						</h2>
						{needs.grow.map(({ title, details }) => (
							<div className="mb-2 bg-[#f9f9f9] p-5">
								<p className="font-semibold mb-3 text-lg">{title}</p>
								<p className="text-secondary/50 text-sm">{details}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center items-center mt-5">
					<button className="mt-10 rounded-full py-3 cursor-pointer mb-5 border border-primary text-md bg-primary text-white px-20">
						Try for free
					</button>
				</div>
			</div>
			<div className="bg-[#151515] px-5 md:px-10 lg:px-20 py-20">
				<div className="flex flex-col md:flex-row items-center mb-10 text-white">
					<h2 className="w-1/2 text-3xl md:w-4/5 font-bold">
						Need to take your business from 0-100? MPOS is the key.{' '}
					</h2>
					<p className="w-1/2 text-lg">
						With MPOS you can easily stay ahead of your competitors and run your
						business smoothly. Anywhere, Anytime
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
					{features.map(({ img, title, details }, index) => (
						<div
							className={`p-5 rounded-2xl pt-8 pb-20 bg-white ${
								index === 1 && 'bg-[#F1F5F9]/90'
							}`}
						>
							<img className="w-16" src={img} alt={title} />
							<hr className="border-b my-3 border-secondary/50" />
							<p className="font-semibold text-lg mb-3">{title}</p>
							<p className="text-sm">{details}</p>
						</div>
					))}
				</div>
			</div>
			<div className="px-5 md:px-10 lg:px-20 py-20">
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-5">
						Need to take your business from 0-100? MPOS is the key.{' '}
					</h2>
					<p className="text-lg lg:w-2/3 mx-auto">
						With MPOS, you create an automated sales system for your business
						and a beautiful experience for your customers. Our software helps
						you keep an up-to-date database, structured financial record and
						powerful analytics. Which leads to an all-round business growth.
					</p>
				</div>
			</div>
			<img src={map} alt="map" />
			<div className="flex items-center justify-center">
				<button className="rounded-full py-3 cursor-pointer mb-5 border border-primary text-md bg-primary text-white w-full">
					More features
				</button>
			</div>
			<div className="bg-[#054A49] px-5 md:px-10 lg:px-20 py-20">
				<div className="text-white text-center">
					<h2 className="font-bold text-3xl">
						Let’s get you started with MPOS
					</h2>
					<p className="text-sm mt-3 text-white/60 lg:w-1/4 mx-auto">
						Create your free account in minutes and start selling with Mobile
						Point of Sale (MPOS)
					</p>
					<div className="flex items-center justify-center gap-3 text-sm mt-10">
						<img className="w-4" src={check} alt="check" />
						<p>Free 30-day trial</p>
						<img className="w-4" src={check} alt="check" />
						<p>No credit card required</p>
					</div>
					<button className="mt-10 rounded-full py-2 px-20 cursor-pointer mb-5 border border-white text-md bg-white text-primary w-auto">
						Try for free
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Landing;
