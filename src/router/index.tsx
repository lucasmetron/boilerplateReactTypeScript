import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import AreaLogada from '../components/AreaLogada';
import Login from '../components/Login';

import PageNotFound from '../components/PageNotFound';
import About from '../pages/About';
import Home from '../pages/Home';

export default function Router() {
	const isLogged = false;

	return (
		<BrowserRouter>
			<nav>
				<ul>
					<Link to="/">
						<li>home</li>
					</Link>
					<Link to="/about">
						<li>about</li>
					</Link>
					<Link to="/AreaLogada">
						<li>AreaLogada</li>
					</Link>
				</ul>
			</nav>
			<Routes>
				{/* Public routes */}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />

				{/* Private routes */}
				<Route
					path="/AreaLogada"
					element={isLogged ? <AreaLogada /> : <Navigate to="/login" />}
				/>

				{/* Unknown route */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
