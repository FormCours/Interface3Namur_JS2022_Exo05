import style from './priority.module.css';
import priorityEnum from '../../enums/priority-enum';

/*
const PriorityDisplay = ({ value }) => {

    switch (value) {
        case priorityEnum.low:
            return <span className={style.low}>Basse</span>;

        case priorityEnum.normal:
            return <span className={style.normal}>Normal</span>;

        case priorityEnum.urgent:
            return <span className={style.urgent}>Urgent</span>;
    }

    return <span>Erreur</span>;
};
*/

const PriorityDisplay = ({ value }) => {

    let priorityContent;
    let priorityClassName;

    switch (value) {
        case priorityEnum.low:
            priorityContent = 'Basse';
            priorityClassName = style.low;
            break;

        case priorityEnum.normal:
            priorityContent = 'Normal';
            priorityClassName = style.normal;
            break;

        case priorityEnum.urgent:
            priorityContent = 'Urgent';
            priorityClassName = style.urgent;
            break;

        default:
            priorityContent = 'Erreur';
            priorityClassName = '';
            break;
    }

    return <span className={priorityClassName}>{priorityContent}</span>;
};

export default PriorityDisplay;