import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({todos}) => {
    return (
        <div className="navbar">
            <h1>My Redux App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total Todo: {todos.length}</li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {})(Navbar)
