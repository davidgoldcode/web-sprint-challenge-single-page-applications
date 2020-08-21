import React from "react";
import { Link, Route, Switch } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div>
          <h1>Lambda Eats</h1>
      </div>
      <div>
          <p>Your favorite Pizza</p>
      </div>

      <div>
      <Link to='/pizza' className='orderPizza'> 
        <h3>
            Order your Pizza now
        </h3> 
      </Link>
      </div>
    </>
  );
};
export default Home;

