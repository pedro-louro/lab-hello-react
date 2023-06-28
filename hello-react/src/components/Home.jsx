import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const Home = () => {
  return (
    <div
      className='container'
      style={{ backgroundColor: '#1F2535', color: 'white' }}
    >
      <nav>
        <ul>
          <div style={{ textAlign: 'start' }}>
            <img
              src={logo}
              alt=''
            />
          </div>
          <div style={{ textAlign: 'end' }}>
            <img
              src={menu}
              alt=''
            />
          </div>
        </ul>
      </nav>
      <div
        className='container d-flex flex-column align-items-start pb-5'
        style={{ color: 'white' }}
      >
        <h1
          className='pt-5'
          style={{ fontSize: '5em', textAlign: 'left', width: '30%' }}
        >
          Say Hello to React
        </h1>
        <p
          className='pt-3 pb-5'
          style={{ textAlign: 'left', width: '30%', fontSize: '1.2em' }}
        >
          You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <div
          style={{
            backgroundColor: 'white',
            padding: '10px',
            color: 'black',
            width: '100px'
          }}
        >
          <p>Awesome!</p>
        </div>
      </div>
      <div
        className='p-5 d-flex flex-row justify-content-center'
        style={{ backgroundColor: 'white', color: '#1F2535' }}
      >
        <div>
          <img
            src={icon1}
            alt=''
          />
          <h3>Declarative</h3>
        </div>
        <div>
          <img
            src={icon2}
            alt=''
          />
          <h3>Components</h3>
        </div>

        <div>
          <img
            src={icon3}
            alt=''
          />
          <h3>Single way</h3>
        </div>

        <div>
          <img
            src={icon4}
            alt=''
          />
          <h3>JSX</h3>
        </div>
      </div>
    </div>
  );
};
export default Home;
