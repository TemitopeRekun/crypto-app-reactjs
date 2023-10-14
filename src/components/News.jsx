import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";

import { useGetCryptoNewsQuery } from "../Services/CryptoNewsApi";

const { Text, Title } = Typography;
const { Options } = Select;

const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newscategory: "Cryptocurrency",
		count: simplified ? 6 : 100,
	});

	if (!cryptoNews?.value) return "Loading...";
	return (
		<Row gutter={[24, 24]}>
			{cryptoNews?.value.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card hoverable="true" className="news-card">
						<a href={news.url} target="_blank" rel="noreferrer">
							<div className="news-image-container">
								<Title className="news-title" level={4}>
									{news.name}
								</Title>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default News;
