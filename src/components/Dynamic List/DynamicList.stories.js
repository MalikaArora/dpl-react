import React from 'react';
import './DynamicList.css';
import TodoList from './TodoList';
export default{
    title: 'Dynamic List'
}
export const App = () => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

