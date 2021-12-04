export default function Schedule() {
	let employees = [];

	return (
		<div className="schedule">
			<table>
				<thead>
					<th>Employee Name</th>
					<th>Monday</th>
					<th>Tuesday</th>
					<th>Wednesday</th>
					<th>Thursday</th>
					<th>Friday</th>
					<th>Saturday</th>
					<th>Sunday</th>
				</thead>
				<tbody>
					{employees.forEach((employee) => {
						return (
							<tr>
								<td>{employee.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
