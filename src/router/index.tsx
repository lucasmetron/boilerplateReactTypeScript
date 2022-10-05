import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

export default function Router() {
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
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
