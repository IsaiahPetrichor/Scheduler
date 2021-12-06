import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../components/employees/employeeSlice';
import scheduleReducer from '../components/scheduleEmployee/scheduleSlice';

export default configureStore({
	reducer: {
		employees: employeeReducer,
		schedule: scheduleReducer,
	},
});
