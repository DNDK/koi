import React from "react";

function Pic(props){
	return(
		<div className = "a-pair">
			<div>
				<img src = {props.path} alt = {props.word}/><br/>
				<h3>{props.word}</h3>
			</div>
		</div> 
	)
}

function Pics(props){
	const levels = [
		[
			{picPath: "/animalpairs/bird.png", assoc_word: "Насекомое"},//птица
			{picPath: "/animalpairs/wolf.png", assoc_word: "Заяц"},//волк
			{picPath: "/animalpairs/cat.png", assoc_word: "Мышь"},//кот
			{picPath: "/animalpairs/horse.png", assoc_word: "Сено"},//лошадь
		],
		[
			{picPath: "/animalpairs/fish.png", assoc_word: "Вода"},//рыба
			{picPath: "/animalpairs/frog.png", assoc_word: "Пруд"},//лягушка
			{picPath: "/animalpairs/bear.png", assoc_word: "Лес"},//мaедведь
			{picPath: "/animalpairs/cow.png", assoc_word: "Коровник"},//корова
			{picPath: "/animalpairs/squirrel.png", assoc_word: "Дерево"},//белка
		],
		[
			{picPath: "/animalpairs/butterfly.png", assoc_word: "Цветок"},//бабочка
			{picPath: "/animalpairs/martin.png", assoc_word: "Дождь"},//ласточка
			{picPath: "/animalpairs/wolf.png", assoc_word: "Ночь"},//волк
			{picPath: "/animalpairs/elephant.png", assoc_word: "Труба"},//слон
			{picPath: "/animalpairs/sheep.png", assoc_word: "Носки"},//овца
			{picPath: "/animalpairs/chicken.png", assoc_word: "Яйцо"},//курица
		]
	];

	return(
		<div className = "pics">
			{
				levels[props.level].map(pair => {
					return(
						<Pic 
						path = {pair.picPath} 
						word = {pair.assoc_word}	
						/>
					)
				})
			}
		</div>
	)
}

export default Pics
