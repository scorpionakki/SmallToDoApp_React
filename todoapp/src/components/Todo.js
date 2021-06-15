import React,{useState} from 'react';

const Todo = () => {
    const[inputData, setInputData] = useState('');
    const[tasks, setTasks] = useState([]);
    const[editTaskBool, setEditTask] = useState(-1);
    const addTask = () => {
        if(inputData && editTaskBool === -1)
        {
            console.log("INSIDE IF");
            setTasks([...tasks, inputData]);
            setInputData("");
        }
        else if(editTaskBool > -1)
        {
            console.log("INSIDE ELSE IF");
            tasks[editTaskBool] = inputData;
            setInputData("");
            setEditTask(-1);
        } 
    }

    const editTask = (index) => {
        setInputData(tasks[index]);
        setEditTask(index);
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, ind) => {
            return ind !== index;
        });
        setTasks(updatedTasks);
    }

    const clearTasks = () => {
        setTasks([]);
    }

    return (
      <div className="App">

        <div></div>
        <div className="ToDoDiv">
          
          <div></div>{/*5%*/}

          <div className="Heading">{/*10%*/}
            <h2>ToDo App</h2>
          </div>
          
          <div></div>{/*10%*/}

          <div className="InputBox">{/*10%*/}
            <div></div>
            <input placeholder="Add a task" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
            <div></div>
            <button onClick={addTask}>{editTaskBool === -1 ? "Add" : "Done"}</button>
            <div></div>
          </div>
          
          <div className="ToDoList">{/*55%*/}
            {
                tasks.map((task, index) => {
                    return(
                        <div className="task" key={index}>
                            <div></div>
                            <h4 className="taskName">{task}</h4>
                            <button onClick={() => editTask(index)}>Edit</button>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </div>    
                    )
                })
            }
          </div>
          
          <div  className="clearList">{/*10%*/}
              <button  onClick={() => clearTasks()}>Clear List</button>
          </div>
        
        </div>
        <div></div>
      </div>
    );
}

export default Todo;