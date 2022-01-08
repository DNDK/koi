import React, {useState, useEffect} from "react";
import Level from "./Level";
import Pics from "./Pics";
import WinnerScreen from "./WinnerScreen";
import "./style.css";

function Timer(props){
	const [secs, setSecs] = useState(props.secs);
	setTimeout(() => {setSecs(secs-1)}, 1000);
	return(
		<div className = "timer">
			{secs}
		</div>
	)
}

function PairsGame(){
	let [state, setState] = useState({
		level: 0,
		showPics: true,
	});
	
	useEffect(() => {
		setTimeout(() => {
			setState(s => ({
				...s,
				showPics: false
			}))
		}, 5000)
	}, [])

	const increaseLevel = () => {
		let new_level = state.level+1;
		setState({
			level: new_level,
			showPics: true
		});
		setTimeout(() => {
			setState({
				level: new_level,
				showPics: false
			})
		}, 5000)
	}

	return(
		<>
		{state.level<3 ? 
		<div className = "game">
			{
			state.showPics ? 
			<><center><Timer secs = {5} /></center><Pics level = {state.level} /></>
			:
			<Level level = {state.level} increaseLevel = {increaseLevel}/>
			}
		</div>
		:
		<WinnerScreen />
		}
		</>
	)
}

export default PairsGame
