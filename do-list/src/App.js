import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AllNotes from './AllNotes';
import NoteDetails from './NoteDetails';
import AllGoals from './AllGoals';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>


          <Route path="/AllNotes">
            <AllNotes />
          </Route>
          <Route path="/Notes/:id">
            <NoteDetails />
          </Route>
          <Route path="/AllGoals">
            <AllGoals/>
          </Route>
        </Switch>




      </div>
    </Router>
  );
}

export default App;
