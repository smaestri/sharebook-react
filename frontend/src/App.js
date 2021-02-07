import React from 'react'
import ListBooks from './ListBooks'
import MyBooks from './MyBooks'
import AddBook from './AddBook'
import AddUser from './AddUser'
import MyBorrows from './MyBorrows'
import Header from './Header'
import Login from './Login'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userInfo, setUserInfo] = React.useState('');

  return (
    <div>
      
      <BrowserRouter>
        <div className="container">
            {!userInfo && <Redirect to="/login" /> }
            {userInfo && <Header userInfo={userInfo} setUserInfo={setUserInfo} /> }
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
              <Login setUserInfo={setUserInfo} />
            </Route>
            <Route path="/addUser">
              <AddUser setUserInfo={setUserInfo} />
            </Route>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
