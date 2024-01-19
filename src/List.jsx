import { useState } from "react";
import useFetch from "./useFetch";


const List = () => {

  const {tasks:tasks,title,setTitle,handleAdd,handleChecked,handleDelete} =useFetch("http://localhost:8080/list");

  
  
  
  
  
  
  return ( 
    <div className="w-96 min-h-80 bg-white transition-shadow ease-out duration-500 rounded delay-150 hover:shadow-xl mt-32 ml-auto  mr-auto shadow-md p-4 flex flex-col content-between gap-3 justify-center" > 

    <h1 className="font-abc text-center font-bold text-3xl">Add a task</h1>
    <div className="flex justify-center w-full ">
      <input type="text" className="border  bg-slate-50	 rounded h-6 p-1 " value={title} onChange={(e)=>setTitle(e.target.value)} />
      <button onClick={()=>handleAdd(title)} className="w-32 font-abc mt-auto bg-blue-500 hover:bg-blue-700 text-white font-light	 py-auto px-auto rounded h-6">AddItem</button>
    </div>
    {tasks.map(task=>(
    <div className="flex justify-between w-full" key={task.id}>
    <div className="flex">
      <input type="checkbox" onChange={()=>handleChecked(task.id)} className="font-abc mr-2" />
      <h3 className={`font-abc font-light ${ task.isChecked ? 'line-through decoration-slate-900-500' : ''}`}>{task.title}</h3>

    </div>
    <button onClick={()=>handleDelete(task.id)}  className="w-16 text-sm font-abc mt-auto bg-red-500 hover:bg-red-700 text-white font-light	 py-auto px-auto rounded h-6 " >Delete</button>
    </div>))
    
}


    </div>
   );
}
 
export default List;