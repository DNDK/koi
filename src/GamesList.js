import React from "react";
import {Link} from "react-router-dom";

function Header(){
	return(
		<h1 className = "header">Интерактивный плакат "Знакомство с животными"</h1>
	)
}

function GameLink(props){
	return(
		<>
			{props.external ? 
				<a 
				href = {props.link}
				className = "game-link"
				>
				<img src = {props.logo} alt = {props.name}/>
				</a> 
			:
			<Link 
			to = {{pathname: props.link}}
			className = "game-link"
			>
			<img src = {props.logo} alt = {props.name}/>
			</Link>
			}
		</>
	);
}

function GamesList(){
	const games = [
		{name: "Запомни животное", link: "/animalgame", external: false, logo: "/animalworldlogo.jpg"},
		{name: "Угадай по голосу", link: "https://guess-the-animal-game.vercel.app", external: true, logo: "/animalvoicesgame.jpg"},
		{name: "Ассоциации", link: "/pairsgame", external: false, logo: "/animalpairslogo.jpg"},
	]
	return(
		<div className = "index-page">
			<center><Header /></center>
			<div className = "games-list">
				{games.map(game => {
				return (<GameLink 
					name = {game.name} 
					link = {game.link} 
					external = {game.external}
					logo = {game.logo}
					/>)
				})}
			</div>
		</div>
	)
}

export default GamesList;
