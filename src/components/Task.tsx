import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import { TaskType } from '../initial-data';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  border-radius: 3px;
`;

const Task = ({ task, index }: { task: TaskType; index: number }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task.content}
          </Container>
        );
      }}
    </Draggable>
  );
};

export default Task;
