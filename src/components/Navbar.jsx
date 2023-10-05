import React from "react";
import icon from "../images/cryptocurrency.png";
import { Button, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
	const menuItems = [
		{
			key: "home",
			icon: <HomeOutlined />,
			text: "Home",
			link: "/",
		},
		{
			key: "cryptocurrencies",
			icon: <FundOutlined />,
			text: "Cryptocurrencies",
			link: "/Cryptocurrencies",
		},
		{
			key: "exchanges",
			icon: <MoneyCollectOutlined />,
			text: "Exchanges",
			link: "/exchanges",
		},
		{
			key: "news",
			icon: <BulbOutlined />,
			text: "News",
			link: "/news",
		},
	];

	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">Cryptoverse</Link>
				</Typography.Title>
			</div>

			<Menu theme="dark">
				{menuItems.map((item) => (
					<Menu.Item key={item.key} icon={item.icon}>
						<Link to={item.link}>{item.text}</Link>
					</Menu.Item>
				))}
			</Menu>
		</div>
	);
};

export default Navbar;
