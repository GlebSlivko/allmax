import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import DetailEditBox from './DetailEditBox';
import {List} from 'material-ui/List';


class ListTodo extends Component {

  constructor(props){
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(todo, index) {

    const thisTodo = todo;

    return(
      <div key={thisTodo.id}>
        <DetailEditBox thisTodo={thisTodo}/>
      </div>
    );
  }

  render(){

    const self = this;
    const { todos } = this.props;

    return(
      <List>
        {todos.map(self.renderList)}
      </List>
    );
  }
}

ListTodo.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ListTodo;
