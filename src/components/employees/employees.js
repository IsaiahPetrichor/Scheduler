import AddEmployeeForm from './addEmployee';
import UpdateEmployeeForm from './updateEmployee';
import RemoveEmployeeForm from './removeEmployee';

export default function Edit() {
	return (
		<>
			<AddEmployeeForm />
			<UpdateEmployeeForm />
			<RemoveEmployeeForm />
		</>
	);
}
