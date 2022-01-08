import React from "react";

function Word(props){
	return(
		<div className = "pair">
			<span><span className = "id">{props.animal.id}</span> <br />
				<span className = "name">{props.animal.name}</span>
		</span>
		</div>
	)
}

function Words(){
	const animals = [
		[{id: 0, name: "Корова"},
		{id: 1, name: "Змея"},
		{id: 2, name: "Гусь"},
		{id: 3, name: "Ворона"},
		{id: 4, name: "Синица"}],
		[{id: 5, name: "Собака"},
		{id: 6, name: "Овца"},
		{id: 7, name: "Лошадь"},
		{id: 8, name: "Медведь"},
		{id: 9, name: "Белка"}]

	]
	return (
		<div className = "pairs-container">
			{animals.map(row => {
				return(
					<div>
					{row.map(animal => {
						return(<Word animal = {animal} />)
					})}
					</div>
				)
			})}			
		</div>
	)
}

export default Words;
