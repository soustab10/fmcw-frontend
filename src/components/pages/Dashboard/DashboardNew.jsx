import Loading from '../../Loading';
import { useState, useEffect } from 'react';
import Classes from './DashboardNew.module.css';
import EventCard from './EventCard';
import { useCart } from 'react-use-cart';
import Button from "./Button/Button";
// import './Events.css';

function DashBoardNew() {
  const { items } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'foo@foo.com',
    college: 'Foo',
    phone: 'XXXXXXXXXX',
    year: '0',
    instaHandle: '_blah_',
    userType: '-1'
  });
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  const logoutHandler = () => {
    console.log("yash");
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };
  useEffect(() => {
    const isTokenValid = async () => {
      setIsLoading(true);
      // const token = sessionStorage.getItem('tokenID');
      // try {
      //   const res = await fetch('/api/verify-token', {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       token: token
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   });
      //   const data = await res.json();

      //   // data has message : 'success' if valid and 'invalid' else
      //   // on valid, data also has user.email, user.name, user.isNewUser, user.role
      //   if (data.message === 'success') {
      //     console.log(data);
      //     setUserData((prevState) => ({
      //       // ...prevState,
      //       name: data.user.name,
      //       email: data.user.email,
      //       college: data.user.college,
      //       phone: data.user.number,
      //       year: data.user.yearOfStudy,
      //       instaHandle: data.user.instaHandle,
      //       userType: data.user.role
      //     }));
      //   }
      // } catch {
      //   alert('Error with authentication, login again');
      // }
      await sleep(5000);

      setIsLoading(false);
    };
    // isTokenValid();

    // console.log(isTokenValid());
  }, []);

  return (
    <div className={Classes.section}>
      <div className={Classes.section_top}>
        <div className={Classes.section_title}>
          <h1>Dashboard</h1>
        </div>
        <h2>Hey _NAME_!</h2>
        <div className={Classes.referral}>
          <h2>
            Referral Code: <span>FMCW0001</span>
          </h2>
          <h2>Participant/Campus Ambassador</h2>
        </div>
        <div className={Classes.registered_contest}>
          <h2>Registered Contests</h2>
        </div>
      </div>
      <div className={Classes.contest_cards}>
        {/* <div className="event-cards"> */}
        <div className={Classes.event_cards}>
          {items.map((item, index) => {
            if (item.type === 'Contest') {
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
          {items.map((item, index) => {
            if (item.type === 'Workshop') {
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
      </Button></div>
    </div>
  );
}

export default DashBoardNew;
