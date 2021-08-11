import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

// COMPONENTS ------------------------------------
import Header from './components/Header';
import InputTask from './components/InputTask';
import Tasks from './components/Tasks';
import TaskDetail from './components/TaskDetail';
import { useEffect } from 'react';

// STYLED COMPONENTS -----------------------------
const Container = styled.div`
  max-width: 700px;
  min-height: 300px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: auto;
`;

const HeaderContainer = styled.div`
  height: 100px;
  margin-bottom: 10px;
  background-color: #0b69b6;
  padding: 10px 20px;
`;

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ]);

  useEffect( () => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
    
      setTasks(data);
    }

    fetchTasks();
  }, []);
  
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {...task, completed: !task.completed};
      }else {
        return task;
      }
    });

    setTasks(newTasks);

  }

  const handleTaskAddition = (task) => {
    const newTasks = [...tasks, {
      id: uuid(),
      title: task,
      completed: false
    }]

    setTasks(newTasks);
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  } 


  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" exact >
            <>
              <HeaderContainer>
                <Header text="Minhas Tarefas"/>
                <InputTask handleTaskAddition={handleTaskAddition}/>
              </HeaderContainer>
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
            </>
          </Route>
          
          <Route path="/:taskTitle" exact >
            <>
              <HeaderContainer>
                <Header text="Sobre"/>
              </HeaderContainer>
              <TaskDetail/>
            </>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;