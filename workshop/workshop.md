# Workshop React 101

### Correr `npx create-react-app workshop``
### Correr `cd workshop` y `npm start`
### Revisar carpeta `src` para ver archivos
### Abrir `App.js``
Eliminar partes innecesarias: logo y link

Cambiar `<p>` por `<h1>` y texto por "TODO App"
```jsx
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TODO App
          </h1>
        </header>
      </div>
    );
  }
}

export default App
```
Cambiar estilos y borrar partes innecesarias
```css
.App {
  background-color: #282c34;
  text-align: center;
}

.App-header {
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
```
### Instalar shortid: `npm i shortid`
### Crear carpeta `components` en `src`
### Crear componente `ToDo`
```jsx
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
  }

  render() {
    return (
      <ul className="ToDo">
        <input type="text" ref={this.textInput} />
        <button onClick={this.addItem}>Add</button>
        {this.state.items.map(elem =>
          <ToDoItem key={elem.id} {...elem} />
        )}
      </ul>
    );
  }
}

export default ToDo
```
### Crear carpeta `styles` dentro de `components`
### Crear archivo `styles/ToDo.css`
### Crear componente ToDoItem
```jsx
import React from 'react'
import './styles/ToDoItem.css'

const ToDoItem = ({text, checked}) => (
  <li>
    <input type="checkbox" checked={checked} />
    {text}
  </li>
)

export default ToDoItem
```
### Crear archivo `styles/ToDoItem.css`
