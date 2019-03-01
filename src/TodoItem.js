import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Props in todo item', this.props)
    let itemColor;
    this.props.status ? itemColor = 'green' : itemColor = 'blue'
    return (
      <li onClick={this.props.changeTodoStatus} style={{color: itemColor}}>{this.props.todoText}</li>
    )
  }
}

export default TodoItem