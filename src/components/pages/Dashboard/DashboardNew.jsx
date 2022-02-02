/* eslint-disable react/react-in-jsx-scope */
import Loading from '../../Loading';
import { useState, useEffect, useContext } from 'react';
import Classes from './DashboardNew.module.css';
import EventCard from './EventCard';
import { useCart } from 'react-use-cart';
import Button from './Button/Button';
import Footer from '../../Footer';
// import './Events.css';

function DashBoardNew() {
  // const authCtx = useContext()
  const { items } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: 'foo@foo.com',
    college: 'Foo',
    phone: 'XXXXXXXXXX',
    year: '0',
    instaHandle: '_blah_',
    userType: '-1',
    cartItems: [],
    refCode: ''
  });
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  const logoutHandler = () => {
    // console.log("yash");
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };
  useEffect(() => {
    const isTokenValid = async () => {
      setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/user', {
          method: 'GET',
          // body: JSON.stringify({
          //   token: token
          // }),
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        const data = await res.json();
        // console.log(data);

        // data has message : 'success' if valid and 'invalid' else
        // on valid, data also has user.email, user.name, user.isNewUser, user.role
        if (data.message === 'success') {
          localStorage.removeItem('react-use-cart');
          console.log(data);
          // console.log(data.user.userID.userCart.cartItems);
          if (data.user.userID) {
            setUserData((prevState) => ({
              // ...prevState,
              name: data.user.userID.name,
              // email: data.user.userID.email,
              // college: data.user.userID.college,
              // phone: data.user.userID.number,
              // year: data.user.userID.yearOfStudy,
              // instaHandle: data.user.userID.instaHandle,
              userType: data.user.userID.role,
              refCode: data.user.ref_code,
              // timesReferred: data.user.norefcode,
              cartItems: data.user.userID.userCart.cartItems
            }));
            sessionStorage.setItem('userID', data.user.userID._id);
          } else {
            setUserData((prevState) => ({
              // ...prevState,
              name: data.user.name,
              // email: data.user.email,
              // college: data.user.college,
              // phone: data.user.number,
              // year: data.user.yearOfStudy,
              // instaHandle: data.user.instaHandle,
              userType: data.user.role,
              cartItems: data.user.userCart.cartItems,
              refCode: data.user.ref_code
              // timesReferred:
            }));
            sessionStorage.setItem('userID', data.user._id);
          }
        }
        sessionStorage.setItem('isLoggedIn', true);
        console.log(userData.cartItems);
      } catch (e) {
        console.log(e);
        alert('Error with authentication, login again');
        sessionStorage.clear();
      }
      await sleep(3000);
      setIsLoading(false);
    };
    isTokenValid();
    // window.location.reload();

    // console.log(isTokenValid());
  }, []);

  return (
    <div className={Classes.section}>
      <div className={Classes.section_top}>
        <div className={Classes.section_title}>
          <h1>Dashboard</h1>
        </div>
        <h2>Hey {userData.name}!</h2>
        <div className={Classes.referral}>
          <h2>
            Referral Code: <span>{userData.refCode}</span>
          </h2>
          <h2>{userData.userType == '2' ? 'Campus Ambassador' : 'Participant'}</h2>
        </div>
        <div className={Classes.registered_contest}>
          <h2>Registered Contests</h2>
        </div>
      </div>
      <div className={Classes.contest_cards}>
        {/* <div className="event-cards"> */}
        <div className={Classes.event_cards}>
          {userData.cartItems.map((item, index) => {
            if (item.Type === 'Contest') {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            }
            return '';
          })}
        </div>
      </div>
      <div className={`${Classes.registered_contest} ${Classes.section_top}`}>
        <h2>Registered Workshops</h2>
      </div>
      <div className={Classes.contest_cards}>
        {/* <div className="event-cards"> */}
        <div className={Classes.event_cards}>
          {userData.cartItems.map((item, index) => {
            if (item.Type === 'Workshop') {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            }
            return '';
          })}
        </div>
      </div>
      <div className={Classes.logout_button}>
        <Button
          // isInternalLink
          // toLink="/"
          // buttonStyle="btn--primary"
          // className="nav-links sign"
          onClick={logoutHandler}>
          LOG OUT
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoardNew;
