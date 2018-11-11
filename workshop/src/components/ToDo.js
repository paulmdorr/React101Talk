import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import './styles/ToDo.css'
import shortid from 'shortid'

class ToDo extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef();

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.toggleCheckItem = this.toggleCheckItem.bind(this)
  }

  addItem() {
    this.setState(prevState => {
      const newItems = [...prevState.items]

      newItems.push({
        text: this.textInput.current.value,
        checked: false,
        toggleCheck: this.toggleCheckItem,
        id: shortid.generate()
      })

      return {
        items: newItems
      }
    })
  }

  toggleCheckItem(id) {
    this.setState(prevState => {
      const newItems = [...prevState.items].map(elem => {
        if (elem.id === id) {
          elem.checked = !elem.checked
        }

        return elem
      })

      return {
        items: newItems
      }
    })
  }

  render() {
    return (
      <div  className="ToDo">
        <input type="text" ref={this.textInput} />
        <input type="button" onClick={this.addItem} value="Add" />
        <ul>
          {this.state.items.map(elem =>
            <ToDoItem key={elem.id} {...elem} />
          )}
        </ul>
      </div>
    );
  }
}

export default ToDo
