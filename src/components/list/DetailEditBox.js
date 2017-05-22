import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TodoDetail from './TodoDetail';
import TodoDelete from './TodoDelete';
import {ListItem} from 'material-ui/List';
import InitializeTodoEditForm from './InitializeTodoEditForm';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import {connect} from 'react-redux';
import toastr from 'toastr';


class DetailEditBox extends Component {

	constructor(props){
		super(props);

		this.state = {
			showModal: false,
			detailTodoValue: true,
			editTodoValue: false,
			deleteTodoValue: false
		};

		this.toggleModal = this.toggleModal.bind(this);

		this.toEditTodo = this.toEditTodo.bind(this);
		this.toDeleteTodo = this.toDeleteTodo.bind(this);
		this.toDetailTodo = this.toDetailTodo.bind(this);

		this.updateSubmitTodo = this.updateSubmitTodo.bind(this);
		this.deleteSubmitTodo = this.deleteSubmitTodo.bind(this);
	}

	updateSubmitTodo(todo) {
		this.props.todoactions.updateTodo(todo);
		this.toggleModal();
		toastr.success('Todo updated');
	}

	deleteSubmitTodo(todo) {
		this.props.todoactions.deleteTodo(todo);
		this.toggleModal();
		toastr.success('Todo deleted');
	}

	toEditTodo() {
		this.setState({
			detailTodoValue: false,
			editTodoValue: true,
			deleteTodoValue: false
		});
	}

	toDetailTodo() {
		this.setState({
			detailTodoValue: true,
			editTodoValue: false,
			deleteTodoValue: false
		});
	}

	toDeleteTodo() {
		this.setState({
			detailTodoValue: false,
			editTodoValue: false,
			deleteTodoValue: true
		});
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
			detailTodoValue: true,
			editTodoValue: false,
			deleteTodoValue: false
		});
	}

	render() {
		
		const styleForTodo = {
			margin: 'auto',
			textAlign: "center",
			width: '50%'
		};

		const styleFlatButtonButton = {
			float: 'right'
		};

		return (
			<div>
				<ListItem  style={styleForTodo} onClick={this.toggleModal}>
					{this.props.thisTodo.title}
				</ListItem>
				<Dialog 
					open={this.state.showModal}
					modal
					onRequestClose={this.toggleModal}
					autoScrollBodyContent>

					{this.state.detailTodoValue && <TodoDetail toDeleteTodo={this.toDeleteTodo} toEditTodo={this.toEditTodo} thisTodo={this.props.thisTodo}/>}
					{this.state.editTodoValue && <InitializeTodoEditForm onSubmit={this.updateSubmitTodo} toDetailTodo={this.toDetailTodo} thisTodo={this.props.thisTodo}/>}
					{this.state.deleteTodoValue && <TodoDelete onSubmit={this.deleteSubmitTodo} toDetailTodo={this.toDetailTodo} thisTodo={this.props.thisTodo}/>}
					
					<FlatButton style={styleFlatButtonButton} label="Close" primary onClick={this.toggleModal} />
				</Dialog>
			</div>
		);
	}
}

DetailEditBox.propTypes = {
	thisTodo: PropTypes.object.isRequired,
	todoactions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		todoactions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailEditBox);
