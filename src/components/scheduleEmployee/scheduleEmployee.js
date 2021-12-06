import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmployees, setNewSchedule } from '../employees/employeeSlice';

export default function ScheduleForm() {
	const [id, setId] = useState('');
	const [day, setDay] = useState('');
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [schedule, setSchedule] = useState();
	const dispatch = useDispatch();
	const employees = useSelector(selectEmployees);

	const scheduleFunc = () => {
		if (!day || !start || !end) return;
		setSchedule({ [day]: `${start} - ${end}` });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!id || !schedule) return;

		dispatch(
			setNewSchedule({
				id: id,
				schedule: schedule,
			})
		);
	};

	return (
		<div className="forms">
			<h2>Schedule Employee</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="employees">Choose employee:</label>
				<select
					id="schedule-select-employees"
					onChange={(e) => setId(e.currentTarget.value)}
					placeholder="Employee">
					<option value="">Choose Employee...</option>
					{Object.values(employees).map((employee) => (
						<option id={employee.id} value={employee.id}>
							{`${employee.name.first} ${employee.name.last[0]}.`}
						</option>
					))}
				</select>
				<label htmlFor="day">Choose day:</label>
				<select
					id="schedule-day"
					onChange={(e) => setDay(e.currentTarget.value)}
					placeholder="Day">
					<option value="">Choose Day...</option>
					<option value="monday">Monday</option>
					<option value="tuesday">Tuesday</option>
					<option value="wednesday">Wednesday</option>
					<option value="thursday">Thursday</option>
					<option value="friday">Friday</option>
					<option value="saturday">Saturday</option>
					<option value="sunday">Sunday</option>
				</select>
				<label htmlFor="start">Pick start time:</label>
				<input
					id="schedule-start"
					type="text"
					value={start}
					onChange={(e) => setStart(e.currentTarget.value)}
					placeholder="ex. 9:00am"
				/>
				<label htmlFor="end">Pick end time:</label>
				<input
					id="schedule-end"
					type="text"
					value={end}
					onChange={(e) => setEnd(e.currentTarget.value)}
					placeholder="ex. 5:00pm"
				/>
				<button onClick={scheduleFunc}>Save</button>
			</form>
		</div>
	);
}
