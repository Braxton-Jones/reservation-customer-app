import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/booking' element={<Booking />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
