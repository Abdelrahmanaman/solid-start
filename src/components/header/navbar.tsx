import { Link } from "@tanstack/solid-router";

export default function Navbar() {
	return (
		<header class="w-full">
			<Link to="/">Chatkast</Link>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
