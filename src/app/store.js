import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../components/employees/employeeSlice';

export default configureStore({
	reducer: {
		employees: employeeReducer,
	},
});
