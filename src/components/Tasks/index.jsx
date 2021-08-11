import React from 'react';
import styled from 'styled-components';
import Task from '../Task';

const Container = styled.div`
  margin: 20px;
`;

const Tasks = ({tasks, handleTaskClick, handleTaskDelete}) => {

  return (
    <Container>

      <h3>Lista de tarefas</h3>

      {tasks.map( task => (
        <Task 
          key={task.id}
          task={task} 
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}/>
      ))}
    </Container>
  );
}

export default Tasks;