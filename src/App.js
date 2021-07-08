import './App.css';
import Home from './conponents/home/Home';
import ContextProvider from './context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HotelDetails from './conponents/hotelDetails/HotelDetails';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hotel/:id' component={HotelDetails} />
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
