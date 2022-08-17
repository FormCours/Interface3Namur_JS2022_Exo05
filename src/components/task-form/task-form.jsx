import { useState } from 'react';
import priorityEnum from '../../enums/priority-enum';

// TaskForm attend depuis ses props, la fonction "onNewTask"
const TaskForm = ({ onNewTask }) => {

    // Valeur de state pour stocker les données du formulaire (synchronisé)
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskPrio, setTaskPrio] = useState(priorityEnum.normal);

    // Gestion du submit du formulaire
    const handleSubmit = (event) => {
        // Désactivation du comportement par defaut du navigateur
        event.preventDefault();

        // Créer un object avec les données du formulaires
        const task = {
            name: taskName,
            desc: taskDesc,
            priority: taskPrio,
            isDone: false
        };
        console.log('TaskForm', task);

        // Envoyer les données vers le composant parent (via un event dans les props)
        onNewTask(task);

        // Reset du formulaire
        setTaskName('');
        setTaskDesc('');
        setTaskPrio(priorityEnum.normal);
    };

    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='inputName'>Nom : </label>
                    <input type='text' id='inputName'
                        value={taskName}
                        onChange={(event) => setTaskName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='inputDesc'>Desc : </label>
                    <textarea id='inputDesc'
                        value={taskDesc}
                        onChange={(event) => setTaskDesc(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='inputPrio'>Priorité : </label>
                    <select id='inputPrio'
                        value={taskPrio}
                        onChange={event => setTaskPrio(event.target.value)}>
                        <option value={priorityEnum.low}>Basse</option>
                        <option value={priorityEnum.normal}>Normal</option>
                        <option value={priorityEnum.urgent}>Urgent</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Ajouter</button>
                </div>
            </form>
        </>
    );
};

TaskForm.defaultProps = {
    onNewTask: () => { } // NOOP → Si "onNewTask" est undefined, ca Evite que ca plante 
};


export default TaskForm;