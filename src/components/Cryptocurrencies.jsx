import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../Services/CryptoApi";

const Cryptocurrencies = ({ limit }) => {
	const { data: cryptosList, isFetchig } = useGetCryptosQuery();
	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
	const [searchTerm, setSearchTerm] = useState("");

	console.log(cryptos)

	if (isFetchig) return "Loading...";

	return (
		<div>
			<div className="search-crypto">
				<input
					placeholder="Search Cryptocurrency"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.slice(0, limit).map((currency) => (
					<Col
						xs={24}
						sm={12}
						lg={6}
						className="crypto-card"
						key={currency.id}>
						<Link to={`/currency/${crypto.id}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={
									<img
										className="crypto-image"
										src={currency.iconUrl}
										hoverable
									/>
								}>
								<p>Price: {millify(currency.price)}</p>
								<p>Market Cap: {millify(currency.marketCap)}</p>
								<p>Daily Change: {millify(currency.change)}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Cryptocurrencies;
