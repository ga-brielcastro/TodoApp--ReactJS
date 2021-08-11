import React, {useState} from 'react';
import {GrAdd} from 'react-icons/gr';
import styled from 'styled-components';
import Button from '../Button';

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    margin-right: 3px;
    padding: 10px 20px;
    border: 0;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 2px #858585;
    text-align: center;
    color: #545454;
    font-size: 1.1rem;

    &::focus {
        border: .5px solid #dedede;
    }
`;

const Span = styled.span`
    margin-left: 10px;
`;

const InputTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState('');

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }

    return (
        <Form>
            <Input onChange={e => setInputData(e.target.value)} value={inputData} placeholder="Digite a tarefa aqui" />
            <Button 
                color="#545454"
                bg="#2de975"
                handleClick={handleAddTaskClick}>
                <GrAdd/> <Span>Adicionar</Span>
            </Button>       
        </Form>
    );
}

export default InputTask;