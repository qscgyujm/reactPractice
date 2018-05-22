import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom'

import Home from './Home/Home';

import Booking from '../components/Booking/Booking';
import Weather from '../components/Weather/Weather';
import Carousel from '../components/Carousel/Carousel';
import Colorpage from '../components/Colorpage/Colorpage';
import Articlepage from '../components/Articlepage/Articlepage';

import TestRef from '../components/Practice/test';
import Children from '../components/Practice/Children';


class Contain extends Component {
  render() {
    return (
      <div
        style={{
          padding: '20px',
          // height: '100%',
          width: '100%'
        }}
      >

        <Route exact path="/" component={Home} />
        <Route path="/Booking" component={Booking} />
        <Route path="/Weather" component={Weather} />
        <Route path="/Carousel" component={Carousel} />
        <Route path="/Colorpage" component={Colorpage} />
        <Route path="/Articlepage" component={Articlepage} />
        
        <Route path="/TestRef" component={TestRef} />
        <Route path="/Children" component={Children} />
      </div>
    );
  }
}

export default Contain;