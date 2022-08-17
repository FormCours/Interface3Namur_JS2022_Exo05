// Créer une 'pseudo' enum en JS (Objet)
const priorityEnum = {
    low: '1',
    normal: '2',
    urgent: '3'
};

// Bloquer les modifications de l'objet
Object.freeze(priorityEnum);

// Export de celle-ci
export default priorityEnum;