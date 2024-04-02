import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import A10 from './pages/A10';
import A11 from './pages/A11';

function App() {
	return (
		<BrowserRouter className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/A11" element={<A11 />} />
            <Route path="/A10" element={<A10 />} />
        </Routes>
		</BrowserRouter>
	);
}

export default App;
