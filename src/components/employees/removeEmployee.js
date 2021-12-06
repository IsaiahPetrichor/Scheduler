import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeEmployee, selectEmployees } from './employeeSlice';

export default function RemoveEmployeeForm() {
	const [id, setId] = useState();
	const dispatch = useDispatch();
	const employees = useSelector(selectEmployees);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id === undefined) {
			console.log('Invalid id');
			return;
		}

		dispatch(
			removeEmployee({
				id: id,
			})
		);
	};

	return (
		<div className="forms">
			<h2>Remove Employee</h2>
			<p className="warning">WARNING: This is irreversible!</p>
			<form onSubmit={handleSubmit}>
				<select
					id="remove-select"
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
				<button>Remove Employee</button>
			</form>
		</div>
	);
}
