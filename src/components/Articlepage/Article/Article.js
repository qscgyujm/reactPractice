import React, { Component } from 'react';
import './article.scss';

class Article extends Component {
  render() {
    const { album, author, company, content, cover, created_at, description, established_time, id,
      name_cht, name_short, short_description, status, stick_top_cata, stick_top_index, tag, title,
      updated_at } = this.props;

    const newCover = cover.slice(9)
    const coverUrl = cover.indexOf('http') !== -1 ? cover : 'http://image.zashare.org' + newCover;
    const backgroundImg = {
      backgroundImage: `url('${coverUrl}')`,
      backgroundSize: 'cover'
    }
    console.log(cover);
    // http://image.zashare.org/uploads/2017_02_20_06_49_54_23.jpeg
    // http://image.zashare.org/dropzone/uploads/2017_03_16_03_03_12_2017_03_12_05_12_36_hackpad.com_cPgQ59Izxkm_p.692518_1480866587976_IMG_6855.jpg   


    return (
      <div className='article col-4' >
        <div className='articleInner' >
          <div className='articleImg' style={backgroundImg} >

          </div>
          <h6>{name_cht}</h6>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {/* <img src={coverUrl} alt="" /> */}
      </div>
    );
  }
}

export default Article;