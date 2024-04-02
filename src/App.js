import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import Incentive from './pages/Incentive';
import Space from './pages/Space';
import Timeline from './pages/Timeline';

function App() {
	return (
		<BrowserRouter className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/Incentive" element={<Incentive />} />
            <Route path="/Space" element={<Space />} />
            <Route path="/Timeline" element={<Timeline />} />
        </Routes>
		</BrowserRouter>
	);
}

export default App;
