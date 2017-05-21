import {combineReducers} from 'redux';
import todos from './todoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	todos,
	form: formReducer
});

export default rootReducer;