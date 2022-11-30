import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Donate from './pages/donate';
import HomePage from './pages/home';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/donate" element={<Donate />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
