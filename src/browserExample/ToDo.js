'use strict'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    const { text, checked } = this.props

    this.state = {
      checked,
      text
    }
  }

  render() {
    const { checked, text } = this.state

    return React.createElement('li', {},
      React.createElement('input', {
        checked,
        type: 'checkbox',
        onChange: ({ target }) => {
          this.setState({ checked: target.checked })
        }
      }),
      React.createElement('span', {}, text)
    )
  }
}

function ToDo(props) {
  const { items } = props
  const itemElements = items.map(
    (itemProps, key) => React.createElement(
      ToDoItem,
      { key, ...itemProps }
    )
  )

  return itemElements
}

ReactDOM.render(
  React.createElement(ToDo, {
    items: [
      {
        text: 'Test ToDo item!',
        checked: false,
      }
    ]
  }),
  document.getElementById('container')
)