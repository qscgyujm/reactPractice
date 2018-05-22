import React, { Component } from 'react';

import Room from './Rooms/Rooms';
import EditArea from './Editarea/Editarea';

class Booking extends Component {
  state = {
    roomData: [
      {
        "name": "經濟雙人房",
        "eng": "Economy Double Room",
        "price": 7000,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
        "discount": 0.9,
        "equipment": {
          "wifi": false,
          "bathtub": true,
          "breakfast": true
        }
      },
      {
        "name": "海景三人房",
        "eng": "Sea view triple Room",
        "price": 7800,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(2).jpg",
        "discount": 0.8,
        "equipment": {
          "wifi": true,
          "bathtub": true,
          "breakfast": false
        }
      },
      {
        "name": "典雅景觀房",
        "eng": "Elegant landscape Room",
        "price": 5400,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(3).jpg",
        "discount": 0.85,
        "equipment": {
          "wifi": false,
          "bathtub": true,
          "breakfast": true
        }
      },
      {
        "name": "尊享豪華房",
        "eng": "Exclusive Deluxe Room",
        "price": 9800,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(4).jpg",
        "discount": 0.8,
        "equipment": {
          "wifi": true,
          "bathtub": false,
          "breakfast": true
        }
      },
      {
        "name": "商務雙人房",
        "eng": "Business Double Room",
        "price": 5600,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (5).jpg",
        "discount": 0.9,
        "equipment": {
          "wifi": true,
          "bathtub": false,
          "breakfast": false
        }
      },
      {
        "name": "溫泉雙人房",
        "eng": "Hot spring double Room",
        "price": 8400,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg",
        "discount": 0.6,
        "equipment": {
          "wifi": true,
          "bathtub": true,
          "breakfast": true
        }
      },
      {
        "name": "總統套房",
        "eng": "Presidential Suite",
        "price": 23000,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg",
        "discount": 0.75,
        "equipment": {
          "wifi": true,
          "bathtub": true,
          "breakfast": true
        }
      },
      {
        "name": "奢華四人房",
        "eng": "Luxury four Room",
        "price": 8500,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg",
        "discount": 0.7,
        "equipment": {
          "wifi": true,
          "bathtub": true,
          "breakfast": false
        }
      }
    ],
    discount: 0.9,
    serverFee: 200,
    editId: 0,
  }

  onAddRoom = () => {
    const newRoom = {
      "name": "新增房間",
      "eng": "New Room",
      "price": 0,
      "amount": 0,
      "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
      "discount": 0.9,
      "equipment": {
        "wifi": false,
        "bathtub": true,
        "breakfast": true
      }
    }
    const newRoomData = [
      ...this.state.roomData,
    ]
    newRoomData.push(newRoom)

    this.setState({
      roomData: newRoomData,
      editId: newRoomData.length - 1,
    })
  }

  onChangeDiscount = (e) => {
    this.setState({
      discount: e.target.value
    })
  }

  onChangeFee = (e) => {
    this.setState({
      serverFee: e.target.value
    })
  }

  onChangeHandler = (e, i) => {
    // console.log(e, e.target.value, e.target.name, i);
    const changeData = [...this.state.roomData];
    const name = e.target.name;
    const value = e.target.value;

    changeData[i][e.target.name] = e.target.value;
    // console.log( this.state.roomData, changeData);

    this.setState({
      roomData: changeData
    })
  }

  onChangeEquipment = (e, i) => {
    console.log(e.target.value, e.target.name, e.target.checked, i);

    const changeData = [...this.state.roomData];
    const name = e.target.name;
    const checked = e.target.checked;
    changeData[i]['equipment'][name] = checked;

    this.setState({
      roomData: changeData
    })
  }

  onDelete = (id) => {
    // console.log(id);
    const changeData = [...this.state.roomData]
    changeData.splice(id, 1)
    // console.log(changeData);

    this.setState({
      roomData: changeData
    })
  }

  onChangeEditIdHandler = (e) => {
    // console.log(e.target.value, this);
    this.setState({
      editId: e.target.value
    })
  }

  render() {
    const { roomData, discount, serverFee, editId } = this.state;
    console.log([roomData[editId]]);
    return (
      <div className='container-fluid  Booking'>
        <div className='row'>
          <div
            style={{
              height: '100vh',
              overflowY: 'scroll',
              paddingBottom: '50px',
              backgroundColor: '#f4f4f4'
              
            }}
            className='col-3'>
            <h1>編輯區</h1>
            <hr />
            <label htmlFor="">折價</label>
            <input className='form-control'
              value={discount}
              onChange={(e) => this.onChangeDiscount(e)}
              type="text"
            />
            <label htmlFor="">服務費</label>
            <input className='form-control'
              value={serverFee}
              onChange={(e) => this.onChangeFee(e)}
              type="text"
            />
            <hr />
            <h1>房間編輯</h1>
            <button onClick={this.onAddRoom} >新增房間</button>
            <select className='form-control'
              value={editId}
              onChange={this.onChangeEditIdHandler}
            >
              {roomData.map((el, i) => {
                return (
                  <option value={i} key={i}>
                    {el.name}
                  </option>
                )
              })}
            </select>
            <br />
            {[roomData[editId]].map((el, i) => {
              return <EditArea
                key={i}
                i={i}
                editId={editId}
                {...el}
                onChangeName={this.onChangeHandler}
                onChangeEquipment={this.onChangeEquipment}
                onDeleteRoom={this.onDelete}
              />
            })}
          </div>
          <div
            className='col-9' style={{
              height: '100vh',
              overflowY: 'scroll',
              paddingBottom: '50px'
            }} >
            <h1>房間列表</h1>
            <hr />
            <div className='row' >
              {roomData.map((el, i) => {
                return (
                  <Room key={i}
                    i={i}
                    {...el}
                    hotelDiscount={discount}
                    serverFee={serverFee}
                    onDeleteRoom={this.onDelete}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;