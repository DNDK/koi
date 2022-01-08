import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import "./index.css";

import AnimalGame from "./AnimalWorld/AnimalGame";
import GamesList from "./GamesList";
import PairsGame from "./AnimalPairs/PairsGame";

function App(){
	return(
		<>
		<Router>
			<Routes>
				<Route exact path = "/" element = {<GamesList />}/>
				<Route path = "/animalgame" element = {<AnimalGame />}/>
				<Route path = "/pairsgame" element = {<PairsGame />}/>
			</Routes>
			

		</Router>
		</>
	)
}

export default App;
