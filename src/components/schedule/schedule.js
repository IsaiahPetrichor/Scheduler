import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../employees/employeeSlice';
import ScheduleForm from '../scheduleEmployee/scheduleEmployee';

export default function Schedule() {
	let employees = useSelector(selectEmployees);

	return (
		<>
			<div className="schedule">
				<table>
					<thead>
						<tr>
							<th>Employee Name</th>
							<th>Monday</th>
							<th>Tuesday</th>
							<th>Wednesday</th>
							<th>Thursday</th>
							<th>Friday</th>
							<th>Saturday</th>
							<th>Sunday</th>
						</tr>
					</thead>
					<tbody>
						{Object.values(employees).map((employee) => (
							<tr>
								<td>{`${employee.name.first} ${employee.name.last[0]}.`}</td>
								<td>{employee.schedule.monday}</td>
								<td>{employee.schedule.tuesday}</td>
								<td>{employee.schedule.wednesday}</td>
								<td>{employee.schedule.thursday}</td>
								<td>{employee.schedule.friday}</td>
								<td>{employee.schedule.saturday}</td>
								<td>{employee.schedule.sunday}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ScheduleForm />
		</>
	);
}
