import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/taks';


const TaskListComponent = () => {

    const defaultTask = new Task("Example","Default description",false,LEVELS.Normal);

    const changeState = () => {
        console.log("TODO: Cambiar estado de una tarea")
    }

    return (
        <div>
            <div>
                Your tasks:
            </div>
            {/* TODO: Aplicar for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;

