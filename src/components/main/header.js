import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<h1>Employee Schedule</h1>
			<ul>
				<li>
					<NavLink to="/" className="nav">
						Schedule
					</NavLink>
				</li>
				<li>
					<NavLink to="/employees" className="nav">
						Edit Employees
					</NavLink>
				</li>
			</ul>
		</header>
	);
}
