import './App.css';
import Home from './components/home/Home';
import ContextProvider from './context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HotelDetails from './components/hotelDetails/HotelDetails';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hotel/:id' component={HotelDetails} />
          </Switch>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
