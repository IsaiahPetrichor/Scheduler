import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../employees/employeeSlice';

export default function ScheduleForm() {
	let employees = useSelector(selectEmployees);

	return (
		<div className="scheduleForm">
			<form>
				<h2>Schedule Employee</h2>
				<label for="employees">Choose employee:</label>
				<select id="employees" name="employees">
					{Object.values(employees).map((employee) => (
						<option
							value={`${employee.name.first} ${employee.name.last[0]}.`}>{`${employee.name.first} ${employee.name.last[0]}.`}</option>
					))}
				</select>
				<label for="day">Choose day:</label>
				<select id="day" name="day">
					<option value="monday">Monday</option>
					<option value="tuesday">Tuesday</option>
					<option value="wednesday">Wednesday</option>
					<option value="thursday">Thursday</option>
					<option value="friday">Friday</option>
					<option value="saturday">Saturday</option>
					<option value="sunday">Sunday</option>
				</select>

				<input />
			</form>
		</div>
	);
}
