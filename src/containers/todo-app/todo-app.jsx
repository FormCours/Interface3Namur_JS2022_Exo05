import { useRef, useState } from 'react';
import TaskForm from '../../components/task-form/task-form';
import TaskList from '../../components/task-list/task-list';

const TodoApp = () => {

    // Définition du tableau de taches dans le state
    const [tasks, setTasks] = useState([]);

    // Créer une valeur (hors state) pour géré l'id auto-incrementé
    // Pour manipuler la valeur d'un "ref", il faut utiliser la propriété "current"
    const nextTaskId = useRef(0);

    // Méthode pour ajouter une tache
    const addNewTask = (data) => {

        // Création de la nouvelle tache avec l'id
        const newTask = {
            ...data,
            id: nextTaskId.current
        };
        console.log('TodoApp', newTask);

        // Incrementation de l'id des taches
        nextTaskId.current++;

        // Ajouter la tache dans la liste des taches
        setTasks(tasks => [newTask, ...tasks]);
    };

    // Méthode pour supprimer une tache
    const deleteTask = (targetId) => {
        setTasks(tasks => tasks.filter(task => task.id !== targetId));
    };

    // Méthode pour terminer une tache
    const terminateTask = (targetId) => {
        setTasks(tasks => {
            const copy = [...tasks];

            const target = copy.find(task => task.id === targetId);
            target.isDone = true;

            return copy;
        });

        // Equivalent avec la fonction "map"
        // setTasks(tasks => tasks.map(task => (task.id !== targetId) ? task : { ...task, isDone: true }));
    };

    return (
        <>
            <h1>Liste de choses à faire  (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h1>
            <TaskForm onNewTask={addNewTask} />
            <TaskList allTask={tasks}
                onDeleteTask={deleteTask}
                onTerminateTask={terminateTask} />
        </>
    );
};

export default TodoApp;