import React, {useState, useEffect} from "react";
import {Level} from "./Level";
import Words from "./Words";
import "./style.css";

function Timer(props){
	let [secs, setSecs] = useState(props.secs);
	setTimeout(() => {
		setSecs(prevSecs => prevSecs-1);
	}, 1000);
	return(
		<div className="timer">
			{"0" + Math.floor(secs/60)}:{((secs%60).toString().length === 2 ? "" : "0") + secs%60}
		</div>
	)
}

function Game(){
	let [state, setState] = useState({
		showPics: true,
		
	});

	useEffect(() => {
		setTimeout(()=>{
			setState(s =>({
				...s,
				showPics: false
			}))
		}, 180000);
	}, []);

	return(
		<>
		{
			state.showPics ? 
	
			<div className = "words"><center><Timer secs = {180}/><Words/></center></div>
			:
			<Level/>
		}
		</>
	);
}

export default Game;
