import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddDialogue from './AddDialogue';
import ListTodo from './ListTodo';
import toastr from 'toastr';
import FlatButton from 'material-ui/FlatButton';


class ListPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			openAdd: false,
			filter: false
		};

		this.handleOpenAdd = this.handleOpenAdd.bind(this);
		this.handleCloseAdd = this.handleCloseAdd.bind(this);

		this.handleSubmitTodo = this.handleSubmitTodo.bind(this);

		this.setFilterUsual = this.setFilterUsual.bind(this);
		this.setFilterAll = this.setFilterAll.bind(this);
		this.setFilterImportant = this.setFilterImportant.bind(this);
		this.setFilterVI = this.setFilterVI.bind(this);

	}

	handleOpenAdd() {
		this.setState({openAdd: true});
	}

	handleCloseAdd() {
		this.setState({
			openAdd: false
		});
	}

	handleSubmitTodo(newTodo) {
		this.props.todoactions.saveTodo(newTodo);
		this.handleCloseAdd();
		toastr.success('Todo saved');

	}

	setFilterUsual() {
		this.setState({
			filter: 1
		});
	}

	setFilterAll() {
		this.setState({
			filter: false
		});
	}

	setFilterImportant() {
		this.setState({
			filter: 2
		});
	}

	setFilterVI() {
		this.setState({
			filter: 3
		});
	}

	render() {
		let todos = this.props.todos;
		const styleFloatingActionButton = {
			marginTop: '4%',
			marginBottom: '2%'
		};

		if (this.state.filter == 1) {
			todos = todos.filter(todo => todo.importance == "usual");
		}

		if (this.state.filter == 2) {
			todos = todos.filter(todo => todo.importance == "important");
		}

		if (this.state.filter == 3) {
			todos = todos.filter(todo => todo.importance == "very important");
		}

		return(
			<div>
				<div className="floatingActionButton">
					<FlatButton 
						secondary 
						label="all" 
						onClick={this.setFilterAll} 
						/>
					<FlatButton 
						secondary 
						label="usual" 
						onClick={this.setFilterUsual} 
						/>
					<FlatButton 
						secondary 
						label="important" 
						onClick={this.setFilterImportant} 
						/>
					<FlatButton 
						secondary 
						label="very important" 
						onClick={this.setFilterVI} 
						/>
				</div>
				<div className="floatingActionButton">
					<FloatingActionButton 
						style={styleFloatingActionButton} 
						onTouchTap={this.handleOpenAdd}>
						<ContentAdd />
					</FloatingActionButton>

					<AddDialogue
						openAdd={this.state.openAdd}
						handleSubmitTodo={this.handleSubmitTodo}
						handleCloseAdd={this.handleCloseAdd}/>
				</div>
				<ListTodo todos={todos}/>
			</div>
			);
	}
}

ListPage.propTypes = {
	todos: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);