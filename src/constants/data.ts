import clock from '../assets/icons/clock.svg';
import cubefaces from '../assets/icons/cubefaces.svg';
import cases from '../assets/icons/case.svg';
import cube from '../assets/icons/cube.svg';
import shop from '../assets/icons/shop.svg';
import profile from '../assets/icons/profile.svg';
import info from '../assets/icons/info.svg';
import invoice from '../assets/icons/invoice.svg';
import contactless from '../assets/icons/contactless.svg';

export const needs = {
	manage: [
		{
			title: 'Take inventory',
			details:
				'Take a detailed stock of all your products across multiple stores. Get real-time updates on stock levels and sales. And never run out of stock again or run at a loss.',
		},
		{
			title: 'Manage Products',
			details:
				'You can easily add, edit and remove products in your store(s). Swiftly upload product images, descriptions and price.',
		},
		{
			title: 'Loyalty Rewards',
			details:
				'Grow your business with our loyalty reward program. Reward your customers with points and coupons for their purchases.',
		},
	],
	sell: [
		{
			title: 'Hardware Support',
			details:
				'We provide you with a Mobile Printer, Barcode Scanner, Cash Drawer and to help you effectively sell your products',
		},
		{
			title: 'Barcode & Receipts',
			details:
				'Generate a barcode for your products for easy identifications and generate receipts for your customers.',
		},
		{
			title: 'Payment & Reward',
			details:
				'Accept multiple payment options, including cash, bank transfer, credit and loyalty reward cards.',
		},
	],
	report: [
		{
			title: 'Report & Analytics',
			details:
				'Receive real-time and daily updates on your sales, purchases, expenses, inventory and staff performance.',
		},
		{
			title: 'Create Targets',
			details:
				'Create goals for your team, track their progress and get a daily, monthly and yearly report of the top performers .',
		},
		{
			title: 'Daily Detailed Rewards',
			details:
				'Receive and easily take a snapshot of your daily sales report to help you track your progress and grow your business.',
		},
	],
	grow: [
		{
			title: 'Create Multiple Stores',
			details:
				'Make more sales by creating an online store for your business in 5 seconds and start selling your products online and offline.',
		},
		{
			title: 'Business Expansion',
			details:
				'Significantly expand your online and offline business with our wide range of tools. With MPOS, the sky is your limit.',
		},
		{
			title: 'Go Global',
			details:
				'Our platform supports business operations all over the world. We have a centralized data structure that allows you to manage your business from anywhere.',
		},
	],
};

export const features = [
	{
		img: invoice,
		title: 'Multiple Payment Options',
		color: '#FFFAE7',
		details:
			'MPOS integrates multiple payment gateways for your business. Your customers can use NFC technology, an ATM card, direct bank transfers or other options to pay, either online or offline.',
	},
	{
		img: contactless,
		title: 'Invoices and Receipts',
		color: '#F1F5F9',
		details:
			'You can print invoices and receipts  from your POS or send directly to your customers’ inboxes. We have a flexible payment plan and variety of choices for mobile printers and barcode printers. ',
	},
	{
		img: info,
		color: '#F1F6F5',
		title: 'Customer Information',
		details:
			'Easily store your customers information/sales history and retrieve them easily when needed. Send automated holiday celebration wishes and discount deal announcements with ease.',
	},
];

export const works = [
	{
		icon: shop,
		work: 'Manage multiple online and offline stores, anywhere, anytime',
	},
	{
		icon: cube,
		work: 'Generate and print bar-codes and receipts.',
	},
	{
		icon: profile,
		work: 'Create accounts for your employees & give them access.',
	},
	{
		icon: clock,
		work: 'Keep an up-to-date inventory of your products.',
	},
	{
		icon: cubefaces,
		work: 'Maintain a list of your orders and suppliers.',
	},
	{
		icon: cases,
		work: 'Control your business finances and accept payments.',
	},
];
