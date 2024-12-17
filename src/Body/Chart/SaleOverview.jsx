import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import RateBtn from "../../Components/RateBtn";

export default function SaleOverview() {
	const data = [
		{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },
		{ name: "Page B", uv: 420, pv: 2400, amt: 2400 },
		{ name: "Page C", uv: 480, pv: 2400, amt: 2400 },
		{ name: "Page D", uv: 340, pv: 2400, amt: 2400 },
		{ name: "Page E", uv: 410, pv: 2400, amt: 2400 },
	];
	return (
		<div className="w-full h-[472px] bg-white shadow py-7 pr-7">
			<RateBtn>
			86% More than last year
			</RateBtn>
			<ResponsiveContainer width="100%" height="100%" >
				<LineChart data={data}>
					<XAxis dataKey="name" />
					<YAxis tickMargin={35} />
					<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
