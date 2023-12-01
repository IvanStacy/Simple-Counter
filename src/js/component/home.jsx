import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {
	let first = Math.floor(counter/1)%10
	let second = Math.floor(counter/10)%10
	let third = Math.floor(counter/100)%10
	let fourth = Math.floor(counter/1000)%10
	let fifth = Math.floor(counter/10000)%10
	let sixth = Math.floor(counter/100000)%10
	

	return (
		<div className="justify-content-center d-flex">
			<div className="card bg-dark text-white me-2 text-center" style={{width: "6rem", fontSize: "75px"}}>
			<i className="fa-regular fa-clock my-auto"></i>
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "75px"}}>
				{sixth}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "75px"}}>
				{fifth}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "75px"}}>
				{fourth}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "75px"}}>
				{third}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "75px"}}>
				{second}
			</div>
			<div className="card bg-dark text-white me-2 text-center" style={{width: "5rem", fontSize: "75px"}}>
				{first}
			</div>
		</div>
	);
};

export default Home;
