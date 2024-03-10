import { useState } from "react";

const useTaskManager = ( )=> {
    const [tasks , addTasks] = useState([]);

    cons addTask = (newTask) => {
        setTasks ((prevTasks)=>[...prevTasks,newTask]);

    };
    

    };
}