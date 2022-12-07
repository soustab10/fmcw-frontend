/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import Classes from './DashboardNew.module.css';
import EventCard from './EventCard';
import WorkshopCard from './WorkshopCard';
import { useCart } from 'react-use-cart';
import Button from './Button/Button';
import Footer from '../../Footer';

function DashBoardNew() {
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
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        const data = await res.json();
        if (data.message === 'success') {
          localStorage.removeItem('react-use-cart');
          console.log(data);
          if (data.user.userID) {
            setUserData((_prevState) => ({
              name: data.user.userID.name,
              userType: data.user.userID.role,
              refCode: data.user.ref_code,
              cartItems: data.user.userID.userCart.cartItems
            }));
            sessionStorage.setItem('userID', data.user.userID._id);
          } else {
            setUserData((prevState) => ({
              name: data.user.name,
              userType: data.user.role,
              cartItems: data.user.userCart.cartItems,
              refCode: data.user.ref_code
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
        <div className={Classes.event_cards}>
          {userData.cartItems.map((item, index) => {
            if (item.Type === 'Contest') {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.Type}
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
        <div className={Classes.event_cards}>
          {userData.cartItems.map((item, index) => {
            if (item.Type === 'Workshop') {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.Type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
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
        <Button onClick={logoutHandler}>LOG OUT</Button>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoardNew;
