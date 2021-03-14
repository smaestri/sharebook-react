import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Book from './Book'
import SimpleModal from './SimpleModal'
import "./MyBooks.scss"

const MyBooks = () => {

  const [myBooks, setMyBooks] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)

  const fetchBooks = () => {
    axios.get(process.env.REACT_APP_BOOKS_ENDPOINT).then(response => {
      setMyBooks(response.data)
    })
  }

  React.useEffect(() => {
    fetchBooks();
  }, [])

  const handleDelete = (bookId) => {
    axios.delete(`${process.env.REACT_APP_BOOKS_ENDPOINT}/${bookId}`).then(response => {
      fetchBooks();
    }).catch(error => {
      setShowModal(true)
    })
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (<>
    <div>
      <h1>Mes Livres</h1>
      <div className="list-container">
        {myBooks.length === 0 ? "Vous n'avez pas déclaré de livres" : null}
        {myBooks.map(book => (<div key={book.id} className="mybook-container">
          <Book title={book.title} category={book.category.label} />
          <div className="container-buttons">
            <Link to={`/addBook/${book.id}`}><button className="btn btn-primary btn-sm">Modifier</button></Link>
            <button className="btn btn-primary btn-sm" onClick={() => handleDelete(book.id)}>Supprimer</button>
          </div>
        </div>
        ))}
      </div>
      <Link to="/addBook"><button className="btn btn-primary btn-sm">Nouveau livre</button></Link>
    </div>

    <SimpleModal
      title={"Supression de livre impossible"}
      bodyTxt={"Livre en cours d'emprunt"}
      handleCloseModal={handleCloseModal}
      showModal={showModal}
    ></SimpleModal>
  </>
  )

}
export default MyBooks;