import React, { Component } from 'react';
import './Room.scss';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faWifi, faBath, faCoffee, faTimes } from '@fortawesome/fontawesome-free-solid/'

// import brands from '@fortawesome/fontawesome-free-brands'

class Rooms extends Component {

  render() {
    const { i, amount, cover, discount, eng, equipment, name, price, hotelDiscount, serverFee, 
      onDeleteRoom } = this.props;

    const finalPrice = parseInt(price * discount * hotelDiscount, 10) + 1.0 * serverFee;
    const finalDiscount = parseInt(discount * hotelDiscount * 100, 10);
    // const imgSrc = {
    //   'backgroundImage': "url(https://cors-anywhere.herokuapp.com/" +  cover + ")",
    //   // 'textAlign': 'center'
    // }
    const data = 'http://i.imgur.com/XoBbu9D.jpg';
    console.log(data, cover);
    return (
      <div className='col-4 col-room'>
        <div className='room_comtainer' >
          <div
            style={{
              backgroundImage: `url('${cover}')`,
              // width: `100%`,
              // // height: `200px`,
              // backgroundSize: `cover`,
              // backgroundRepeat: `no-repeat`
            }}
            className='cover'>
            <FontAwesomeIcon icon={faTimes} className='times' 
              onClick={()=>onDeleteRoom(i)} />
            <h3>{name}</h3>
          </div>
          <div className='info'>
            <h5>
              {eng}
              <div className='icons' >
                <span>{equipment.wifi ? <FontAwesomeIcon icon={faWifi} /> : null} </span>
                <span>{equipment.bathtub ? <FontAwesomeIcon icon={faBath} /> : null} </span>
                <span>{equipment.breakfast ? <FontAwesomeIcon icon={faCoffee} /> : null} </span>
              </div>
            </h5>
            <h5>
              {discount}
              *{hotelDiscount}
              ＝{finalDiscount}折
            </h5>
            <h4>
              TWD
            <s>{price}</s>
              <span className='finalPrice'>
                {finalPrice}
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;