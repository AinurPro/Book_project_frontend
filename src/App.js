import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import About from './components/pages/About'
import UpdateBook from './components/forms/UpdateBook'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="container">
      <h1 className="text-primary">The world of Books</h1>
      <Switch>
        <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser}/>}/>
        <Route path='/home' render={routerProps=> <Home {...routerProps} user={user} />} />
        <Route path='/about' component={About} />
        <Route path='/update/:id' component={UpdateBook}/>
      </Switch>
     
    </div>
  );
}

export default App;
