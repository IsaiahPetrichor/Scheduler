import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
	name: 'employees',
	initialState: {
		0: {
			id: 0,
			name: {
				first: 'Jane',
				last: 'Doe',
			},
			schedule: {},
		},
	},
	reducers: {
		addEmployee(state, action) {
			const obj = {
				[action.payload.id]: {
					id: action.payload.id,
					name: {
						first: action.payload.first,
						last: action.payload.last,
					},
					schedule: {},
				},
			};
			Object.assign(state.employees, obj);
		},
	},
});
