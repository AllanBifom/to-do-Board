import React, {useState} from 'react'

function Input({taskList,setTaskList}) {
    const [input, setInput] = useState("");
    const addTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input]);
        setInput("");
    }
  return (
    <div>
        <form className='flex flex-row items-center gap-3'>
            <input
            className="border rounded-lg py-1.5 px-2.5 text-lg"
            type='text'
            placeholder='Add a task'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />

            <button
            onClick={addTask}
            className='bg-violet-400 text-white py-2 px-4 rounded'
            >
                Add
            </button>
        </form>
    </div>
  )
}

export default Input