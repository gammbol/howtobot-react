import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import React from "react";
import Lessons from "./components/Lessons";

function App() {
	return (
		<>
			<Header/>
			<Hero/>
			<About/>
			<Lessons/>
		</>
	);
}

export default App;
