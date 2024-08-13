import React, {useState} from 'react'

function AddTodo() {
    const [value, setValue] = useState('');
    const [todo, setTodo] = useState([]);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addTask = () => {
        setTodo([...todo, value]);
        setValue('');
    };
    const removeTask = (index) => {
        const updateItems = [...todo];
        updateItems.splice(index, 1);
        setTodo(updateItems);
    };
  return (
    <div id="outter_div">
        <div id="input_box">
            <input type="text" placeholder="Enter your todo" value={value} onChange={handleChange} />
            <button onClick={addTask}>Add</button>
        </div>
        <div id="todo_list">
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item} <button onClick={()=>removeTask(index)}>Del</button></li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default AddTodo