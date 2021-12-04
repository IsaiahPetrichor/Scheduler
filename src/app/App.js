import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	useRouteMatch,
} from 'react-router-dom';
import './App.css';
import routes from './routes';
import Schedule from '../components/schedule/schedule';
import AddEmployeeForm from '../components/employees/addEmployee';
import ScheduleForm from '../components/scheduleEmployee/scheduleEmployee';

export default function App() {
	return (
		<>
			<header>
				<h1>Employee Schedule</h1>
				<nav>
					<ul>
						<li>
							<button>View Schedule</button>
						</li>
						<li>
							<button>Schedule Employees</button>
						</li>
						<li>
							<button>Edit Employees</button>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Schedule />
				<ScheduleForm />
				<AddEmployeeForm />
			</main>
		</>
	);
}
