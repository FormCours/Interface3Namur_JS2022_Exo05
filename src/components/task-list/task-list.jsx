import PriorityDisplay from '../priority-display/priority-display';

const TaskListItem = ({ id, name, desc, priority, isDone, onDelete, onTerminate }) => {

    return (
        <article>
            <p>{name} <PriorityDisplay value={priority} />  Statut: {isDone ? 'X' : '/'}</p>
            <div>
                <button onClick={() => onTerminate(id)} >Terminer</button>
                <button onClick={() => onDelete(id)} >Supprimer</button>
            </div>
        </article>
    );
};


const TaskList = ({ allTask, onDeleteTask, onTerminateTask }) => {

    return (
        <>
            <h2>Liste des taches</h2>
            <div>
                {allTask.map(
                    (task) => <TaskListItem {...task} key={task.id}
                        onDelete={onDeleteTask}
                        onTerminate={onTerminateTask} />
                )}
            </div>
        </>
    );
};

TaskList.defaultProps = {
    allTask: []
};

export default TaskList;