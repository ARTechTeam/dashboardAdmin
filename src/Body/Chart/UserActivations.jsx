import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import RateBtn from "../../Components/RateBtn";

export default function UserActivations() {
	const data = [
		{ name: "Page A", uv: 400, amt: 2400 },
		{ name: "Page B", uv: 420, amt: 2400 },
		{ name: "Page C", uv: 400, amt: 2400 },
		{ name: "Page E", uv: 460, amt: 2400 },
		{ name: "Page D", uv: 340, amt: 2400 },
		{ name: "Page F", uv: 410, amt: 2400 },
	];
	return (
		<div>
			<div className="w-full h-full min-h-72 shadow py-7 pr-7 bg-white">
                <div className="flx flex-col justify-end items-end">

				<p className="capitalize text-3xl font-bold">
					User Activations
				</p>
				<RateBtn>86% More than last year</RateBtn>
                </div>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={data}>
						<CartesianGrid
							strokeDasharray="1 1"
							strokeWidth={0.3}
						/>
						<XAxis dataKey="name" />
						<YAxis tickMargin={35} />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="uv"
							barSize="12"
							fill="#ff6500"
							radius={[1, 200, 1, 400]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
