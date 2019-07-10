import React, { Component } from 'react'



class TodoItems extends Component {
  changeItem = (e) => {
    e.text = prompt ("Enter text", "");
    this.setState(e);
  }
  createTasks = item => {
    return (
      <div className="itemList" key={item.key}>
        <li onClick={() => this.changeItem(item)}>
          {item.text}
        </li>
        <div onClick={() => this.props.deleteItem(item.key)}>
          <i class="far fa-times-circle"></i>
        </div>  
      </div>
      
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems