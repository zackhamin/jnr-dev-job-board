import Home from './Pages/Home'
import Resources from './Pages/Resources'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Jobs from './Pages/Jobs'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from '../src/Components/Header'


function App() {
  return (

    <Router>
      <div>
        <Menu />
      </div>
     
      <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Jobs' component={Jobs} />
              <Route exact path='/Resources' component={Resources} />
              <Route exact path='/Contact' component={Contact} />
          </Switch>

          <div>
        <Footer />
      </div>
      </Router>
      )
}

export default App;

