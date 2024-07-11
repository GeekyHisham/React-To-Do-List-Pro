import React, {useState, createContext, ReactNode} from "react";
import { TaskProps, TaskListType } from "./taskType";

interface ChildrenProps {
    children: React.ReactNode;
  }

export const TaskListContext = createContext<TaskListType|null>(null);

export const TaskListContextProvider: React.FC<ChildrenProps> = ({children}) =>{
    const [taskList, setTaskList] = useState<TaskProps[]>([
        {
            id:1,
            title: "Project 1",
            done: false,
            categorie: "Year-Up",
            color: "#FF9C9C",
        },
        {
            id:2,
            title: "Project 2",
            done: false,
            categorie: "Year-Up",
            color: "#FF9C9C",
        },
        {
            id:3,
            title: "Project 3",
            done: true,
            categorie: "Year-Up",
            color: "#FF9C9C",
        },

    ]);
    const [doneTasks, setDoneTasks]=  useState<TaskProps[]>(taskList.filter((task:TaskProps) => task.done==true));
    const [notDoneTasks, setNotDoneTasks] = useState<TaskProps[]>(taskList.filter((task:TaskProps) => task.done==false));

    const addTask = (task: TaskProps)=>{
    
        taskList.push(task)
        setTaskList([...taskList]);
        console.log(taskList)
        setNotDoneTasks([...notDoneTasks, task]);

        
    };

    const checkTask = (id:number)=>{
        taskList.filter((task: TaskProps) => {
            if (task.id === id) {
              task.done = !task.done
              setTaskList([...taskList]);
              setDoneTasks(taskList.filter((task:TaskProps) => task.done==true));
              setNotDoneTasks(taskList.filter((task:TaskProps) => task.done!=true));
            }
        });
    };

    const deleteTask = (id:number)=>{
        const index = taskList.findIndex((task:TaskProps)=>task.id == id);
        taskList.splice(index,1);
        setTaskList([...taskList]);
        console.log(taskList);
        setDoneTasks(taskList.filter((task:TaskProps) => task.done==true));
        setNotDoneTasks(taskList.filter((task:TaskProps) => task.done!=true));
    };

    return(
        <TaskListContext.Provider value={{taskList, doneTasks,notDoneTasks, addTask, checkTask, deleteTask}}>
            {children}
        </TaskListContext.Provider>
    )
}

