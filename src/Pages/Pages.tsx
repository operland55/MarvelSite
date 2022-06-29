import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CharactersInfo from "../Components/CharactersInfo";
import Search from "../Components/Search";
import Characters from "./Characters";
import Comic from "./Comic";
import Home from "./Home";
import Story from "./Story";

function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/comic" element={<Comic />}></Route>
				<Route path="/stories" element={<Story />}></Route>
				<Route path="/characters" element={<Characters />}></Route>
				<Route path="/characters/:charactersId" element={<CharactersInfo />}></Route>
				<Route path="/search/:searchId" element={<Search />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Pages;
