import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee, selectEmployees } from './employeeSlice';

export default function UpdateEmployeeForm() {
	const [id, setId] = useState();
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const dispatch = useDispatch();
	const employees = useSelector(selectEmployees);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!id || !first || !last) {
			console.log('Invalid id');
			return;
		}

		dispatch(
			updateEmployee({
				id: id,
				first: first,
				last: last,
				schedule: employees[id].schedule,
			})
		);
	};

	return (
		<div className="forms">
			<h2>Edit Employee</h2>
			<form onSubmit={handleSubmit}>
				<select
					id="update-select"
					onChange={(e) => setId(e.currentTarget.value)}
					placeholder="Employee">
					<option value="">Choose Employee...</option>
					{Object.values(employees).map((employee) => {
						return (
							<option id={employee.id} value={employee.id}>
								{`${employee.name.first} ${employee.name.last}`}
							</option>
						);
					})}
				</select>
				<input
					id="update-first-name"
					type="text"
					value={first}
					onChange={(e) => setFirst(e.currentTarget.value)}
					placeholder="First Name"
				/>
				<input
					id="update-last-name"
					type="text"
					value={last}
					onChange={(e) => setLast(e.currentTarget.value)}
					placeholder="Last Name"
				/>
				<button>Save Employee</button>
			</form>
		</div>
	);
}
