import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Col, Row, Typography } from "antd";

const Title = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
	const coinPrice = [];
	const coinTimestamp = [];

	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinPrice.push(coinHistory?.data?.history[i].price);
		coinTimestamp.push(
			new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
		);
	}

	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: "Price in USD",
				data: coinPrice,
				fill: false,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};

	const options = {
		scales: {
			y: {
				ticks: {
					beginAtZero: true,
				},
			},
		},
	};

	return (
		<div>
			<Row className="chart-header">
				<Title aria-level={2} className="chart-title">
					{coinName} Price Chart
				</Title>
				<Col className="price-container">
					<Title aria-level={5} className="price-change">
						{coinHistory?.data?.change}%
					</Title>
					<Title className="current-price" aria-level={5}>
						Current {coinName} Price: $ {currentPrice}
					</Title>
				</Col>
			</Row>
			<Line data={data} options={options} />
		</div>
	);
};

export default LineChart;
