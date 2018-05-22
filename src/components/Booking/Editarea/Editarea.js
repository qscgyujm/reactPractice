import React, { Component } from 'react';
import './Editearea.scss';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid/'

class Editarea extends Component {
    render() {
        const { i, amount, cover, discount, eng, equipment, name, price, editId,
            onChangeName, onChangeEquipment, onDeleteRoom} = this.props;
        return (
            <div className='room_edit' >
                <h4>{name}</h4>
                <label htmlFor="">房間</label>
                <FontAwesomeIcon icon={faTrash} 
                    onClick={()=>onDeleteRoom(editId)} 
                    className='courser_pointer'
                />
                <input type="text" className='form-control'
                    name='name'
                    value={name}
                    onChange={(e) => onChangeName(e, i)}
                />
                <label htmlFor="">價錢</label>
                <input type="text" className='form-control'
                    name='price'
                    value={price}
                    onChange={(e) => onChangeName(e, i)}
                />
                <label htmlFor="">折扣</label>
                <input type="text" className='form-control'
                    name='discount'
                    value={discount}
                    onChange={(e) => onChangeName(e, i)}
                />
                <label htmlFor="">英文名稱</label>
                <input type="text" className='form-control'
                    name='eng'
                    value={eng}
                    onChange={(e) => onChangeName(e, i)}
                />
                <label htmlFor="">網址</label>
                <input type="text" className='form-control'
                    name='cover'
                    value={cover}
                    onChange={(e) => onChangeName(e, i)} 
                />
                <label htmlFor="">房間設備</label>
                <label htmlFor="">早餐</label>
                <input type="checkbox" 
                    className='form-control'
                    name='breakfast'
                    checked={equipment.breakfast}
                    onChange={(e) => onChangeEquipment(e, i)}
                />
                <label htmlFor="">Wifi</label>
                <input type="checkbox" 
                    className='form-control'
                    name='wifi'
                    checked={equipment.wifi}
                    onChange={(e)=>onChangeEquipment(e, i)}
                />
                <label htmlFor="">浴室</label>
                <input type="checkbox" 
                    className='form-control'
                    name='bathtub'
                    checked={equipment.bathtub}
                    onChange={(e)=>onChangeEquipment(e, i)}
                />
            </div>
        );
    }
}

export default Editarea;