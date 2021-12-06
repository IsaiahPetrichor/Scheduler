import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addEmployee } from './employeeSlice';

export default function AddEmployeeForm() {
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (first.length === 0 || last.length === 0) return;

		dispatch(
			addEmployee({
				id: uuidv4(),
				first: first,
				last: last,
			})
		);

		setFirst('');
		setLast('');
	};

	return (
		<div className="forms">
			<form onSubmit={handleSubmit}>
				<h2>Add new employee</h2>
				<input
					id="first-name"
					type="text"
					value={first}
					onChange={(e) => setFirst(e.currentTarget.value)}
					placeholder="First Name"
				/>
				<input
					id="last-name"
					type="text"
					value={last}
					onChange={(e) => setLast(e.currentTarget.value)}
					placeholder="Last Name"
				/>
				<button>Add Employee</button>
			</form>
		</div>
	);
}
