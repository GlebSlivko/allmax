import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { If, Then, Else } from 'react-if';

const style = {float: 'right'};


const TodoDetail = ({thisTodo, toEditTodo, toDeleteTodo}) => (
  <div>
    <FlatButton label="Edit" primary onClick={toEditTodo} style={style} />
    <FlatButton label="Delete" primary onClick={toDeleteTodo} style={style} />
    <h1>{thisTodo.importance}</h1>
    <p>title: {thisTodo.title}</p>
    <p>description: {thisTodo.description}</p>

    <If condition = {!thisTodo.till}>
      <Then><p>do it till: --:-- </p></Then>
      <Else>{() => // will only be evaluated if the condition fails.
         <span>
            {typeof(thisTodo.till.time)==='string' && <p>do it till: {new Date(thisTodo.till.time).toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>}
            {typeof(thisTodo.till.time)==='object' && <p>do it till: {thisTodo.till.time.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>}
         </span>
      }
      </Else>
    </If>
  </div>
);

TodoDetail.propTypes = {
  thisTodo: PropTypes.object.isRequired,
  toEditTodo: PropTypes.func.isRequired,
  toDeleteTodo: PropTypes.func.isRequired
};

export default TodoDetail;
