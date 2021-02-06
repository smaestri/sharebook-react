
import { BrowserRouter, Route } from 'react-router-dom'
import AddBook from './AddBook';
import AddUser from './AddUser';
import ListBooks from './ListBooks'
import MyBooks from './MyBooks'
import Header from './Header'
import Login from './Login'
import MyBorrows from './MyBorrows'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
     
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/listBooks">
            <ListBooks />
          </Route>
          <Route path="/myBooks">
            <MyBooks />
          </Route>
          <Route exact path="/addBook">
            <AddBook />
          </Route>
          <Route exact path="/addBook/:bookId">
            <AddBook />
          </Route>
          <Route path="/myBorrows">
            <MyBorrows />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
