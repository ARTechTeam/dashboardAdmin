import InfoAdmin from "./InfoAdmin/InfoAdmin";
import Routing from "./Routing/Routing";

export default function DashboardBody() {
	return (
		<div className="bg-white min-h-svh sm:max-w-64 max-w-72 min-w-72 z-10 border-x dark:bg-Primary-dark border-light-border dark:border-dark-border">
			<div className="w-full">
				<InfoAdmin />
				<Routing />
			</div>
		</div>
	);
}
