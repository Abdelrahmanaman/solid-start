import { Link } from "@tanstack/solid-router";

export default function Navbar() {
	return (
		<header class="w-full">
			<Link to="/">Chatkast</Link>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
