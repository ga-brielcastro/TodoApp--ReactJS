import React from 'react';
import { useHistory } from 'react-router-dom';
import {FiTrash} from 'react-icons/fi';
import {CgDetailsMore} from 'react-icons/cg';
import {AiOutlineCheck} from 'react-icons/ai';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 8px 0;
  padding: 0px 10px;
  border-radius: 5px;

  background-color: #ffffff;
  box-shadow: 1px 1px 5px #858585;
  color: #545454;
  cursor: pointer;

  transition: .5s;  
  &:hover {
    background-color: #ebebeb;
  }
`;

const TaskTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #545454;
`;

const ButtonsContainer = styled.div`

`;

const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 1.3rem;
`;

const ButtonDelete = styled(Button)`
  color: #e70000;
`;

const ButtonDone = styled(Button)`
  color: #23c423;
`;




const Task = ({ task, handleTaskClick, handleTaskDelete }) => {

  const history = useHistory();
  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  }
  return (
    <TaskContainer 
      style={task.completed ? {backgroundColor: '#e7e7e7'} : {}}>

      <TaskTitle
        style={task.completed ? {textDecoration: 'line-through', color: '#9c9c9c'} : {}}>
        {task.title}
      </TaskTitle>

      <ButtonsContainer>
        <ButtonDone onClick={_ => handleTaskClick(task.id)}>
          <AiOutlineCheck/>
        </ButtonDone>

        <ButtonDelete onClick={_ => handleTaskDelete(task.id)}>
          <FiTrash/>
        </ButtonDelete>

        <Button onClick={handleTaskDetailsClick}>
          <CgDetailsMore/>
        </Button>
      </ButtonsContainer>
    </TaskContainer>
  );
}

export default Task;