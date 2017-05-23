import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { If, Then, Else } from 'react-if';
import Toggle from 'material-ui/Toggle';
const style = {float: 'right'};

let TodoDetail = props => {

  const { thisTodo, toEditTodo, toDeleteTodo, toggleMarkTodo } = props;
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  const options2 = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const options3 = {
    hour: 'numeric',
    minute: 'numeric'
  };

  let atTime = '';

  if (thisTodo.at && typeof(thisTodo.at)==='string') {
    atTime = new Date(thisTodo.at).toLocaleString("ru", options);
  }

  if (thisTodo.at && typeof(thisTodo.at)==='object') {
    atTime = thisTodo.at.toLocaleString("ru", options);
  }

  let tillDate = '';

  if (thisTodo.till && typeof(thisTodo.till.when)==='string') {
    tillDate = new Date(thisTodo.till.when).toLocaleString("ru", options2);
  }

  if (thisTodo.till && typeof(thisTodo.till.when)==='object') {
    tillDate = thisTodo.till.when.toLocaleString("ru", options2);
  }

  let tillTime = '';

  if (thisTodo.till && typeof(thisTodo.till.time)==='string') {
    tillTime = new Date(thisTodo.till.time).toLocaleString("ru", options3);
  }

  if (thisTodo.till && typeof(thisTodo.till.time)==='object') {
    tillTime = thisTodo.till.time.toLocaleString("ru", options3);
  }


  return (
    <div>
      <FlatButton 
        label="Edit" 
        primary 
        onClick={toEditTodo} 
        style={style} />
      <FlatButton
        label="Delete" 
        primary 
        onClick={toDeleteTodo} 
        style={style} />
        
      <h1>{thisTodo.importance}</h1>
      <p>title: {thisTodo.title}</p>
      <p>description: {thisTodo.description}</p>

      <If condition = {!!thisTodo.till}>
        <Then>
          <p>do it till: {tillDate} {tillTime}</p>
        </Then>
      </If>

      <If condition = {!!atTime}>
        <Then>
          <p>done: {atTime}</p>
        </Then>
      </If>

      <Toggle
        label="done"
        defaultToggled={thisTodo.done}
        onToggle={() => toggleMarkTodo(thisTodo)}
        labelPosition="right"
        style={{margin: 10}}
      />
    </div>
  );
};

TodoDetail.propTypes = {
  thisTodo: PropTypes.object.isRequired,
  toEditTodo: PropTypes.func.isRequired,
  toDeleteTodo: PropTypes.func.isRequired,
  toggleMarkTodo: PropTypes.func.isRequired
};

export default TodoDetail;
