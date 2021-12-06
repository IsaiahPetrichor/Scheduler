import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../components/main/header';
import Schedule from '../components/schedule/schedule';
import Edit from '../components/employees/employees';

export default function App() {
	return (
		<Router>
			<div>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Schedule />} />
						<Route path="/employees" element={<Edit />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
