import Input from './components/Input';
import Board from './components/Board';
import React, {useState} from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
    <h1 className='text-xl font-semibold'>
      TO-DO Board List
    </h1>
    <Input taskList={taskList} setTaskList={setTaskList} />
    <Board />
    </div>
  );
}

export default App;
