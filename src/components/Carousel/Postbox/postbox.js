import React, { Component } from 'react';
import './postbox.scss'

class postbox extends Component {
  render() {
    const { i, index, title, description, cover } = this.props;
    const classes = ['postbox', i === index ? 'cur_Item': null ].join(' ');

    return (
      <div className={classes} >
        <div className='cover' style={{
          backgroundImage: `url('${cover}')`
        }}>
          <div className='infos' >
            <h1>{title}</h1>
            <h5>{description}</h5>
          </div>
        </div>

      </div>
    );
  }
}

export default postbox;