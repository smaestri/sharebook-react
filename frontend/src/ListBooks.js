import React from 'react'
import Book from './Book'

import './MyBooks.scss'
import './ListBooks.scss'

export default class ListBooks extends React.Component {

  constructor() {
    super();
    this.state = { books: [] }
  }
  componentDidMount() {
    // TODO charger les livres disponibles a partir des APi back
    this.setState({
      books: [
        {
          title: "asterix",
          category: "BD",
        },

        {
          title: "tintin",
          category: "BD",
        }
      ]
    })
  }

  render() {

    return (<div >
      <h1>Livres diponibles</h1>
      <div className="list-container">
        {this.state.books.length === 0 ? "Pas de livres disponibles" : null}
        {this.state.books.map(book => (<div className="list-book-container">
          <Book title={book.title} category={book.category}></Book>
          <button className="btn btn-primary btn-sm">Emprunter</button>
        </div>))}
      </div>
    </div>)

  }

}
