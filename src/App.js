import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import React from "react";

function App() {
	return (
		<div
			className="h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d4a1f9]/80">
			<Header/>
			<Hero/>
			<About/>
		</div>
	);
}

export default App;
