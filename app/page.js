import HomePage from "./(main)/HomePage/HomePage";
import Navbar from "./components/Navbar";
import AuthTestComponent from "./components/AuthTestComponent"; // فقط برای تست

export default function Home() {
	return (
		<div>
			<div>
				<HomePage />
			</div>
		</div>
	);
}