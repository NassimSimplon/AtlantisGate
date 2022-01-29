import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import './App.css';
import Navbar from './component/DescriptionSection';
import Home from './pages/Home';
import Test from './shared/Test'
import OnePlaylist from './pages/OnePlaylist'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CoursPage from './pages/CoursPage';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import Footer from './shared/Footer';
import Contact from './pages/Contact';
import { PrivetRoute } from './HOC/PrivetRoute';
import Profile from './pages/Profile';
import { isUserLoggedIn } from './redux/SignIn/Action'

function App() {

  const auth = useSelector((state) => state.signInStore);


  const dispatch = useDispatch()
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App"  >
      <BrowserRouter>
        <div>
          <Test />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Cours' component={CoursPage} />
            <Route path='/Playlist' component={OnePlaylist} />
            <Route path='/Video' component={Video} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/Contact' component={Contact} />
            <PrivetRoute path="/profile" component={Profile} />
          </Switch>
          <Footer className='mt-5' />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
