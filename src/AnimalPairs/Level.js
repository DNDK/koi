import React, {useState} from "react";

function OptionPair(props){
	return(
		<div className = "opt-pair">
			<img src = {props.path} alt = {props.word}/>
			<span>{props.word}</span>
		</div>
	)
}

function Option(props){
	return(
		<div className = {`${props.change_color ? `${props.option.is_true ? "option-green" : "option-red" }` : ""} pg-option `} onClick = {props.onClick}>
			{
			props.option.pairs.map(pair => {
				return(
					<OptionPair path = {pair.picPath} word = {pair.assoc_word}/>
				)
			})
			}
		</div>
	)
}

function Question(props){
	const [clicked, setClicked] = useState(null);

	const check = (i) => {
		clearTimeout(tm);
		if(props.options[i].is_true){
			setClicked(i);
			setTimeout(props.increase_level, 100);
		}
		else{
			setClicked(i);
			var tm = setTimeout(() => {setClicked(null)}, 500);
		}
	}
	return(
		<div className = "pg-question">
		{
		props.options.map((option, i) => {
			return(
				<Option 
				option = {option} 
				change_color = {i === clicked} 
				onClick = {()=>{check(i)}}/>
			)
		})
		}
		</div>
	)
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
	  [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Level(props){
	const answers = [
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
	
	let options = [];
	
	let pathes = [];
	let words = [];

	for(const i of answers[props.level]){
		pathes.push(i.picPath);
		words.push(i.assoc_word);
	}

	for(let i = 0; i < 2; i++){
		let p = shuffle(pathes);
		let w = shuffle(words);
		let o = [];
		for(let j = 0; j < p.length; j++){
			o.push({
				picPath: p[j],
				assoc_word: w[j],
		});

		}
		options.push({
			pairs: o,
			is_true: false
		})
	}
	let right_option = {pairs: answers[props.level], is_true: true};
	options.push(right_option);
	options = shuffle(options);

	

	return(
		<div className = "level">
			<Question options = {options} increase_level = {props.increaseLevel}/>
		</div>
	)
}

export default Level;
