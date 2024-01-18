import { useState } from "react";

const List = () => {
  const [tasks,setTasks]=useState([
    { id: 1, title: 'Task 1' ,isChecked :false },
    { id: 2, title: 'Task 2' ,isChecked :false },
    { id: 3, title: 'Task 3' ,isChecked :false },
    { id: 4, title: 'Task 4' ,isChecked :false },
  ]);

  const handleChecked=(id)=>{
    const newTasks=[...tasks];
    for(let i=0;i<newTasks.length;i++){
      if(newTasks[i].id==id){
        newTasks[i].isChecked=!newTasks[i].isChecked;
      }
    }
    setTasks(newTasks);
    console.log(newTasks);
  }
    
  
  
  return ( 
    <div className="w-1/4 h-80 bg-white transition-shadow ease-out duration-500 rounded delay-150 hover:shadow-xl mt-48 ml-auto hover:border mr-auto shadow-md p-4 flex flex-col content-between gap-3 justify-center" > 

    <h1 className="font-abc text-center font-bold text-3xl">Add a task</h1>
    <div className="flex justify-center w-full ">
      <input type="text" className="border  bg-slate-50	 rounded h-6 p-1 " />
      <button className="w-32 font-abc mt-auto bg-blue-500 hover:bg-blue-700 text-white font-light	 py-auto px-auto rounded h-6">AddItem</button>
    </div>
    {tasks.map(task=>(
    <div className="flex justify-between w-full" key={task.id}>
    <div className="flex">
      <input type="checkbox" onChange={()=>handleChecked(task.id)} className="mr-2" />
      <h3 className={`font-abc font-light ${ task.isChecked ? 'line-through decoration-slate-900-500' : ''}`}>{task.title}</h3>

    </div>
    <button className="w-16 text-sm font-abc mt-auto bg-red-500 hover:bg-red-700 text-white font-light	 py-auto px-auto rounded h-6 " >Delete</button>
    </div>))
    
}


    </div>
   );
}
 
export default List;