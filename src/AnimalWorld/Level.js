import React, {useState} from "react";
import WinnerScreen from "./WinnerScreen";

function Option(props){
	return(<>
		<div className = {`option ${props.change_color ? (props.is_true ? "option-green" : "option-red") : ""}`} onClick = {props.onClick}>
			{props.text} 
		</div><br/></>
	)
}

function QuestionR(props){
	const [state, setState] = useState({
		clicked: null,
		solved: false
	});
	const check = (i) => {
		clearTimeout(tm);
		if(!props.question.options[i].is_true){
			setState({
				...state,
				clicked: i
			});
			var tm = setTimeout(()=>{
				setState({
					...state,
					clicked: null
				})
			}, 300)
		}
		else{
			setState({
				...state,
				solved: true,
				clicked: i
			});
			setTimeout(() => {
				props.increase_level();
				setState({
					...state,
					solved: false,
					clicked: null
				})
			}, 1000);
		}
	}
	return(<>
		<div className = "question">
			<center>
			<h3 className = "text-question">{props.question.question}</h3>
			<div className = "options">
				{props.question.options.map((option, i) => {
					let text = "";
					for(let i = 0; i < option.nums.length; i++){
						text += option.nums[i] + (i === option.nums.length - 1 ? "" : ", ");
					}
					
					return(
						<Option 
						text = {text} 
						change_color = {state.clicked === i}
						is_true = {option.is_true}
						onClick = {()=>{check(i)}}/>
					)
				})}
			</div>
			</center>
		</div><br/>
		</>
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
	const [level, setLevel] = useState(0);
	let questions = [
		{
			question: "Какая цифра соответствует слову \"медведь\"?", 
			options_number: 1,
			options: [{nums: [8], is_true: true}]
		},
		{
			question: "Какие цифры соответствуют словам \"медведь\" и \"змея\"?",
			options_number: 2,
			options: [{nums: [1, 8], is_true: true}]
		},
		{
			question: "Какие цифры соответствуют словам \"синица\", \"корова\" \"овца\"?",
			options_number: 3,
			options: [{nums: [0, 4, 6], is_true: true}]
		},
		{
			question: "Какие цифры соответсвуют названиям птиц?",
			options_number: 3,
			options : [{nums: [2, 3, 4], is_true: true}]
		},
		{
			question: "Какие цифры соответсвуют названиям домашних животных?",
			options_number: 4,
			options: [{nums: [0, 5, 6, 7], is_true: true}]
		}
	];

	for(let i = 0; i<questions.length ; i++){
		let options = questions[i].options;
		let used_combinations = [];
		used_combinations.push(options[0].nums.toString());

		while(options.length < 5){
			let nums = [];
			while(nums.length < questions[i].options_number){
				let r = Math.floor(Math.random() * 10);
				if(nums.indexOf(r) === -1) nums.push(r);
			}
			nums.sort();
			if(used_combinations.indexOf(nums.toString()) === -1){
				console.log(nums)
				options.push({nums, is_true: false});
				used_combinations.push(nums.toString());
			}
		}
		console.log(used_combinations);
		questions[i].options = shuffle(options);
	}
	
	const increase_level = ()=>{
		setLevel(level + 1);
	}

	return(
		<>
			{
				level < questions.length ? 
				<QuestionR question = {questions[level]} increase_level = {increase_level}/>
				:
				<WinnerScreen />
			}
		</>
	)
}

export {Level}
