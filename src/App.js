import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import React, {useState} from "react";

function App() {
	const [state, setState] = useState('hidden');
	if (state === 'visible') {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
	const MobileMenuListener = () => {
		setState(state === 'visible' ? 'hidden' : 'visible');
	}

	return (
		<>
			<Header state={state} listener={MobileMenuListener}/>
			<Hero/>
			<About id='about'/>
		</>
	);
}

export default App;
