import React, { useState } from 'react';
import './CreateTaskForm.sass'

import { socketEmit, createTask_api } from './api'



function CreateTaskForm(props) {

    const [taskText, setTaskText] = useState();

    const createTask = () => {
        let id = Math.ceil(Math.random() * 100) + "id";
        let newEl = { id: id, isCompleted: false, isBeingEdited: {status:false, user:''}, index: 0, text: taskText };

        socketEmit(createTask_api, newEl);
        setTaskText('');
    }

        return (
            <div className="createTask">
                <input type="text" placeholder="Поставте задачу" onChange={(e) => { setTaskText(e.target.value) }} value={taskText} />
                <button onClick={createTask}>Создать задачу</button>
            </div >
        );
    
}

export default CreateTaskForm;