import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './Redux.js'


const TodosList = ({todosData , toggleTodo }) =>(
	<ul class="list-group">
		{todosData.map(item =>
			<li key={item.id} className={item.completed ? 'list-group-item done': 'list-group-item unfinished'}
				onClick={() => toggleTodo(item.id)}>
				<i class="material-icons">{item.completed ? 'check_box': ''}</i> {item.text}
			</li>
		)}
	</ul>
)
const Visiablefilter = (todosData) =>{

	switch(todosData.filter){
		case 'All':
			return todosData.list
		case 'Unfinished':
			return todosData.list.filter(t => !t.completed)
		case 'Done':
			return todosData.list.filter(t => t.completed)
		default:
			throw new Error('Unknown filter: ' + todosData)
	}
}
const mapStateToProps = (state) => ({
	todosData: Visiablefilter( state.Todos )
})
const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps ,mapDispatchToProps)(TodosList)
