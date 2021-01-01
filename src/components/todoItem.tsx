import React from 'react';

const TodoItem: React.FC = ({ children }) => {
  return (
    <div className="todo-item">
      😊😊😊 {children}
      <button className="delete-todo-btn">💩</button>
    </div>
  );
};

export default TodoItem;
