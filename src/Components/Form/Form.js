import React, {useState} from 'react'
import Card from '../Card/Card'

export default function Form() {

	const [myState, setMyState] = useState([
		{tache: 'Promener le chien', txt: "Une fois à 8h, une fois à 19h"},
		{tache: 'Faire à manger', txt: "Quiche Lorraine"},
		{tache: 'Lire un livre', txt: "30 min de lecture"}
	])
	const [task, setTask] = useState();
	const [txt, setTxt] = useState();

	function taskCreation(e) {
		e.preventDefault();
	
		const newArray = [...myState, {tache: task, txt: txt}];
		setMyState(newArray);
		console.log(newArray);
		setTask('');
		setTxt('');
	}

	function deleteTask(index) {
		const cleanTab = [...myState];

		setMyState(cleanTab.filter(item => cleanTab.indexOf(item) !== cleanTab.indexOf(cleanTab[index])));
	}

	return (
		<div className="container px-3">
			<h2 className="title mt-5">
				Rentrez vos tâches à faire
			</h2>

			<form onSubmit={taskCreation}>

				<div className="field">
					<div className="control">
						<label htmlFor="task" className="label">Tâche</label>
						<input
						value={task}
						type="text" 
						id="task"
						placeholder="Titre de votre tâche"
						className="input"
						onChange={e => setTask(e.target.value)}
						/>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label htmlFor="text" className="label">Détails de la tâche</label>
						<textarea 
						value={txt}
						type="text" 
						id="text"
						placeholder="Détail de votre tâche"
						className="textarea"
						onChange={e => setTxt(e.target.value)}
						>	
						</textarea>
					</div>
				</div>

				<div className="control">
					<button type="submit" className="button is-link has-background-success">Créer une tâche</button>
				</div>

			</form>

			{
				myState.map((todo, index) => (
					<Card
						key={index}
						index={index}
						tache={todo.tache}
						txt={todo.txt}
						deleteFunc={deleteTask}
					/>
				))
			}
		</div>
	)
}
