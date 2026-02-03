import react,{useState} from 'react'



function ToDoList(){

    const [tasks,setTasks]=useState(["Eat breakfast","take a shower","walk in garden"]);
    const [newTask , setNewTask]=useState("");

    function handleInputChange(event){
       setNewTask(event.target.value);
    }


    function addTask(){
        if(newTask.trim() !==""){
        setTasks(t => [...tasks,newTask]);
        setNewTask("");
    }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTasks(updatedTask);


    }

    function moveTaskUp(index){
           if(index>0){
            const updatedTask =[...tasks];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
           }


    }

    function moveTaskDown(index){
            if(index< tasks.length-1){
            const updatedTask =[...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
           }


    }
    return(
     <div class="to-do-list">
          <h1>To-Do-List</h1>

          <div>
              <input type="text" placeholder="enter a task......." value={newTask}
               onChange={handleInputChange}
              />
              <button class="add-btn" onClick={addTask}>
                Add
              </button>
           
          </div>

          <ol>
            {tasks.map((task,index) =>
            <li key={index}>
                <span className="text">{task}</span>
                 <button className="delete-btn" onClick={()=>deleteTask(index)}>delete</button>
                 <button className="move-btn" onClick={()=>moveTaskUp(index)}>⤴️</button>
                 <button className="move-btn" onClick={()=>moveTaskDown(index)}>⤵️</button>
              </li>
            
            )}
          </ol>

    </div>);

}

export default ToDoList

