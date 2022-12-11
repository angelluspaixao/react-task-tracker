import PropTypes from 'prop-types'
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length > 0 ? 
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        )) : 
        'No tasks to-do!'
      }
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func
}

export default Tasks
