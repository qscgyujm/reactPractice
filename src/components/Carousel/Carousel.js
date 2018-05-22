import React, { Component } from 'react';
import Postbox from './Postbox/postbox'
import './carousel.scss';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/fontawesome-free-solid/'

class Carousel extends Component {
  state = {
    works: [
      {
        title: "海象樂園",
        description: "趴在冰層上的懶惰動物",
        cover: "https://unsplash.it/400/300?image=1084"
      },
      {
        title: "搭船遊去",
        description: "不會游泳只好搭船",
        cover: "https://unsplash.it/400/300?image=1083"
      },
      {
        title: "老年學鋼琴",
        description: "學習永遠不嫌晚！",
        cover: "https://unsplash.it/400/300?image=1082"
      },
      {
        title: "高樓的一隅",
        description: "繁複的幾何線條構築",
        cover: "https://unsplash.it/400/300?image=1081"
      },
      {
        title: "草莓來襲",
        description: "聽見果農的艱辛",
        cover: "https://unsplash.it/400/300?image=1080"
      },
      {
        title: "探索宇宙",
        description: "看見光的速度與殘影",
        cover: "https://unsplash.it/400/300?image=1079"
      }
    ],
    index: 0,
    span: 1230,
  }

  onChageIndex = (d) => {
    const newIndexs = (this.state.index + d + this.state.works.length) % this.state.works.length;

    this.setState({
      index: newIndexs
    })
  }

  render() {
    const { works, index } = this.state;
    const moveLeft = {
      left: (-this.state.index * this.state.span) + 'px'
    }

    return (
      <div className='app' >
        <div className='postarea' >
          <div className='postss'
            style={moveLeft}
          >
            {works.map((el, i) => {
              return <Postbox key={i} i={i} index={index} {...el} />
            })}
          </div>
        </div>
        <FontAwesomeIcon
          id='FontAwesomeIcon'
          icon={faArrowLeft}
          className='control_left'
          onClick={() => this.onChageIndex(-1)} />
        <FontAwesomeIcon
          id='FontAwesomeIcon'
          icon={faArrowRight}
          className='control_right'
          onClick={() => this.onChageIndex(1)} />
      </div>
    );
  }
}

export default Carousel;