import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Incentive from './pages/Incentive';
import About from './pages/About';

function App() {
	return (
		<BrowserRouter className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Incentive" element={<Incentive />} />
            <Route path="/About" element={<About />} />
        </Routes>
		</BrowserRouter>
	);
}

export default App;
