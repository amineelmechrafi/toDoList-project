import { useEffect, useState } from "react";

const useFetch = (link) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch(link, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data=await response.json();
        setTasks(data);
        console.log("rendered")
      }
      catch(err){console.log(err)}
    }
    fetchData();
  },[])

   

  const handleChecked = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(newTasks);
    console.log(newTasks);
  };

  const handleAdd = (titleArg) => {
    if (titleArg) {
      const newTask = { title: titleArg };
      setTasks([...tasks, newTask]);
      setTitle('');
      console.log(titleArg);
      async function handlePost(){
      const response = await fetch(link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });}
      handlePost();
      
    }
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    const link2=link+"/"+id;
    async function handleDelete(){
      const response = await fetch(link2, {
        method: 'DELETE',
      });}
      handleDelete();
  };

  return { tasks, title,setTitle, handleAdd, handleChecked, handleDelete };
};

export default useFetch;
