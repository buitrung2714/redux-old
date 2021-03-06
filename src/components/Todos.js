import TodoForm from './TodoForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Todos = ({todos}) => {

    return (
        <div className="todo-list">
            <TodoForm/>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}
                        <input type="checkbox" />
                        <button>Delete</button>
                    </li>
                ))} 
            </ul>   
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {})(Todos)
