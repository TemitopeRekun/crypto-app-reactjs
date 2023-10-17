import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const Title = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
	return (
		<div>
			<Row className="chart-header">
				<Title aria-level={2} className="chart-title">
					{coinName} Price Chart
				</Title>
			</Row>
		</div>
	);
};

export default LineChart;
