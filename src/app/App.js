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
import AddEmployeeForm from '../components/addEmployee/addEmployee';
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
							<button>Schedule Employee</button>
						</li>
						<li>
							<button>Add Employee</button>
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
