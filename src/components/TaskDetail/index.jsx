import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5';
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 20px;
    margin: 20px auto;
    border: 0;
    border-radius: 5px;
    background-color: #eeeeee;
`;

const Span = styled.span`
    margin-left: 10px;
`;

const TaskDetail = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackTask = () => {
        history.goBack()
    }

    return(
        <Container>
            <h3>{params.taskTitle}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s.</p>

            <Button handleClick={handleBackTask}>
                <IoReturnUpBack/>
                <Span>Voltar</Span>
            </Button>
        </Container>
    );
}

export default TaskDetail;