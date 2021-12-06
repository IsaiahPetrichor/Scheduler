import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
	name: 'employees',
	initialState: {
		0: {
			id: '0',
			name: {
				first: 'Jane',
				last: 'Doe',
			},
			schedule: {
				monday: '9:00am - 5:00pm',
				tuesday: '',
				wednesday: '',
				thursday: '12:00pm - 4:00pm',
				friday: '',
				saturday: '',
				sunday: '',
			},
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
					schedule: {
						monday: '',
						tuesday: '',
						wednesday: '',
						thursday: '',
						friday: '',
						saturday: '',
						sunday: '',
					},
				},
			};
			Object.assign(state, obj);
		},
		removeEmployee(state, action) {
			delete state[action.payload.id];
		},
		updateEmployee(state, action) {
			const obj = {
				id: action.payload.id,
				name: {
					first: action.payload.first,
					last: action.payload.last,
				},
				schedule: state[action.payload.id].schedule,
			};
			state[action.payload.id] = obj;
		},
		setNewSchedule(state, action) {
			Object.assign(state[action.payload.id].schedule, action.payload.schedule);
		},
	},
});

export const selectEmployees = (state) => state.employees;

export const { addEmployee, removeEmployee, updateEmployee, setNewSchedule } =
	employeeSlice.actions;

const { reducer } = employeeSlice;
export default reducer;
