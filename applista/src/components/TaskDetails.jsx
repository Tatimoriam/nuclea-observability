import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

import './TaskDetails.css';

const TaskDetails = () => {
	const params = useParams();
	const navigate = useNavigate();

		return (
		<>
			<div className="back-button-container" onClick={() => navigate(-1)}>
				<Button>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum sequi accusamus aliquam nemo reiciendis.</p>
			</div>
		</>
	);
};

export default TaskDetails;
