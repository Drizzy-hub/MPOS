// data.ts
import React from 'react';
import { ReactComponent as DashboardImage } from '../../../assets/images/imageOne.svg';
import { ReactComponent as ImageTwo } from '../../../assets/images/imageTwo.svg';
import { ReactComponent as ImageThree } from '../../../assets/images/imageThree.svg';

interface ImageContainerData {
	backgroundColor: string;
	title: string;
	subtitle: string;
	children: React.ComponentType;
}

const imageContainersData: ImageContainerData[] = [
	{
		backgroundColor: '#EAE7FF',
		title: 'Create an online store for your business',
		subtitle:
			'You can create an online store for your business in 5 seconds and start selling your products online.',
		children: DashboardImage,
	},
	{
		backgroundColor: '#F1F5F9',
		title: 'Manage your business seamlessly from anywhere, anytime.',
		subtitle:
			'Access and download a report of your sales, purchases, expenses, inventory and your staff’s performance wherever and whenever you need it.',
		children: ImageTwo,
	},
	{
		backgroundColor: '#F8EDE3',
		title: 'Take stock of all your products across multiple stores',
		subtitle:
			'Manage your inventory across multiple stores and warehouses. Get real-time updates on stock levels and sales. And never run out of stock again.',
		children: ImageThree,
	},
];

export default imageContainersData;
