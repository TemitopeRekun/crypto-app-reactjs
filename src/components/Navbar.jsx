import React from "react";
import { useState, useEffect } from "react";
import icon from "../images/cryptocurrency.png";
import { Button, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	CloseOutlined,
} from "@ant-design/icons";

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	const handleMenuClicked = () => {
		if (screenSize < 768) {
			setActiveMenu(false);
		}
	};

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

				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(!activeMenu)}>
					{activeMenu ? <CloseOutlined /> : <MenuOutlined />}
				</Button>
			</div>

			{activeMenu && (
				<Menu theme="dark">
					{menuItems.map((item) => (
						<Menu.Item
							key={item.key}
							icon={item.icon}
							onClick={handleMenuClicked}>
							<Link to={item.link}>{item.text}</Link>
						</Menu.Item>
					))}
				</Menu>
			)}
		</div>
	);
};

export default Navbar;
