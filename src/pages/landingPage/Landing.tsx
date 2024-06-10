import { Footer, HomeHeader } from '../../components';
import payment from '../../assets/images/payment.svg';
import { imageContainersData } from './data';
import { features, needs, works } from '../../constants/data';

import check from '../../assets/icons/check.svg';
import question from '../../assets/icons/question.svg';
import corner from '../../assets/icons/corner.svg';
import map from '../../assets/images/map.svg';
import manage from '../../assets/images/manage.svg';
import DashboardImage from '../../assets/icons/imageOne.svg';

const Landing = () => {
	return (
		<>
			<HomeHeader />
			<div className="p-10"></div>
			<div className="h-screen lg:w-2/3 p-5 flex items-center justify-center flex-col m-auto">
				<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-secondary">
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
					<p className="mb-7 md:mb-14 md:text-lg">
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
								<p className="font-bold mb-3 text-lg">{title}</p>
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
								<p className="font-bold mb-3 text-lg">{title}</p>
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
								<p className="font-bold mb-3 text-lg">{title}</p>
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
								<p className="font-bold mb-3 text-lg">{title}</p>
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
			<div
				className="bg-[#054A49] px-5 md:px-10 lg:px-20 py-20"
				style={{ marginTop: '110px', marginLeft: '80px', marginRight: '80px' }}
			>
				<div className="flex flex-col md:flex-row items-center gap-5 mb-10 text-white">
					<h2 className="lg:w-1/2 text-3xl font-bold">
						Need to take your business from 0-100? MPOS is the key.{' '}
					</h2>
					<p className="lg:w-1/2 text-lg">
						With MPOS you can easily stay ahead of your competitors and run your
						business smoothly. Anywhere, Anytime
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
					{features.map(({ img, title, details, color }, index) => (
						<div
							className={`p-5 rounded-2xl pt-8 pb-20 bg-[${color}] ${
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
				<button className="rounded-full py-3 cursor-pointer mb-5 border border-primary text-md bg-primary text-white w-auto px-20">
					More features
				</button>
			</div>
			<div className="py-20 md:grid grid-cols-2 items-center gap-5 md:gap-10 lg:gap-20 px-5 md:px-10 lg:px-20">
				<div className="">
					<div className="bg-[#F8EDE3] p-10 text-center rounded-xl">
						<img src={manage} alt="" className="mx-auto" />
						<p className="text-lg font-bold my-3">
							Access Advanced Management And Financial Tools
						</p>
						<p className="text-sm">
							With MPOS you can be assured to make smarter and more profitable
							business decisions.
						</p>
					</div>
				</div>
				<div className="mt-10 md:mt-0">
					<p className="font-bold text-2xl">
						Stay ahead of the game with our advanced management & financial
						tools.
					</p>
					<p className="font-semibold text-lg mt-5 mb-3">Features</p>
					<div className="">
						{works.map(({ work, icon }) => (
							<div
								key={work}
								className="pb-2 mb-3 border-b border-secondary/50"
							>
								<img src={icon} alt="icon" />
								<p className="text-secondary/50 mt-3">{work}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="relative mb-20 md:grid md:grid-cols-2 items-center gap-20 py-20 pb-10 px-5 md:px-10 lg:px-20 bg-[#054A49]">
				<div className="text-white lg:w-4/5">
					<p className="font-bold text-3xl">Have a question?</p>
					<p className="font-bold text-4xl mt-2">
						Our team of experts is happy to assist you.
					</p>
					<p className="text-sm my-10 text-white/60">
						Our team is available 24/7 to help you with any issues you may have.
						Check out our detailed FAQs and help articles that can help you fix
						minor issues all by yourself.
					</p>
					<hr className="border-b border-white/40" />
					<div className="flex flex-col-reverse lg:flex-row md:items-start items-center mt-10 lg:mt-20 gap-5">
						<button className="rounded-full py-2 px-10 cursor-pointer border border-white text-md bg-white text-secondary font-bold w-auto">
							Contact Us
						</button>
						<p>
							Or call <span className="underline">+234 902 423 2473</span>
						</p>
					</div>
				</div>
				<img src={question} alt="question-mark" />
				<img
					className="absolute w-20 lg:w-60 bottom-0 right-0"
					src={corner}
					alt="corner-mark"
				/>
			</div>
			<div className="bg-[#054A49] px-5 md:px-10 lg:px-20 py-20">
				<div className="text-white text-center">
					<h2 className="font-bold text-4xl">
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
