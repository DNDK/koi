import React from "react";
import {Link} from "react-router-dom";

function WinnerScreen(){
	return(
		<div className = "winner-screen">
			<Link to = "/" className = "finish-link">На главную</Link><br/>
			<span className = "finish-link" onClick = {()=>{window.location.reload()}}>Заново</span>
		</div>
	)
}

export default WinnerScreen;
