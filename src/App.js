import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/pages/Sign-up/SignUp';
import events from './components/pages/Events/events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sponsors from './components/pages/Sponsors/Sponsors';
import FAQ from './components/pages/FAQ/FAQ';
import landingPage from './components/pages/LandingPage/LandingPage.js';
// import BasicStack from './components/pages/Events/EventMobile/EventTab';
import Photography from './components/pages/Events/MobileView/Photography';
import Cinematography from './components/pages/Events/MobileView/Cinematography';
import Outreach from './components/pages/Events/MobileView/Outreach';
import Design from './components/pages/Events/MobileView/Design';
import Media from './components/pages/Events/MobileView/Media';
import Animation from './components/pages/Events/MobileView/Animation';
import Authentication from './components/pages/Authentication/Authentication';
import RegisterationForm from './components/pages/Register/RegisterationForm';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AuthContext from './store/auth-context';
import PrivateRoute from './components/PrivateRoute';
import Team from './components/pages/Team/Teams';
import Merchandise from './components/pages/Merchandise/Merchandise';
import AllEvents from './components/pages/Events/MobileView/AllEvents';
import Cart from './components/Cart';
import DashBoard_2 from './components/pages/Dashboard/DashboardNew';
import DashBoardNew from './components/pages/Dashboard/DashboardNew';
function App() {
  const authCtx = useContext(AuthContext);
  if (window.innerWidth <= 1280) {
    document.body.style.backgroundImage = 'none';
  }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/landing" exact component={Home} /> */}
          <Route path="/sign-up" component={SignUp} />;
          <Route path="/events" exact component={events} />;
          <Route path="/events/photography" component={Photography} />;
          <Route path="/events/cinematography" component={Cinematography} />;
          <Route path="/events/outreach" component={Outreach} />;
          <Route path="/events/media" component={Media} />;
          <Route path="/events/design" component={Design} />;
          <Route path="/events/animation" component={Animation} />;
          <Route path="/events/allevents" component={AllEvents} />;
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/" exact component={landingPage} />
          <Route path="/authentication" exact component={Authentication} />
          {/* {authCtx.isLoggedIn && <Route path="/dashboard" exact component={Dashboard} />} */}
          {/* {sessionStorage.getItem('isNewUser')==="true" && <Route path="/register" exact component={RegisterationForm} />} */}
          <PrivateRoute path="/register" component={RegisterationForm} />
          <PrivateRoute path="/dashboard" component={DashBoardNew} />
          <Route path="/team" exact component={Team} />
          <Route path="/cart" component={Cart} />
          <Route path="/d" exact component={DashBoard_2}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
