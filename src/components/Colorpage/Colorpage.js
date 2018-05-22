import React, { Component } from 'react';
import './colorpage.scss';

class Colorpage extends Component {
  state = {
    colorSetting: `//顏色變數\n$color_black: #303030\n$color_bg: #F7F0E9\n$color_berry: #D56134\n$color_top: #9C4215\n$color_md_1: #F3D1BA\n$color_md_2: #F7E1CD\n$color_bottom: #773000\n$color_cherry_1: #FF613A\n$color_cherry_2: #DF5333`,
    colorCard: {
      name: 'bloack',
      colorCode: '#303030',
      colorCss: {
        'backgroundColor': '#303030'
      }
    },
  }


  onChangeValue = (e) => {
    // console.log(e.target.value);

    this.setState({
      colorSetting: e.target.value
    })
  }

  render() {
    const { colorSetting, colorCard } = this.state;
    // const result = colorSetting.split('\n').map((el, i)=>{
    //   return {
    //     name: el.split(':')[0] ,
    //     colorCode: el.split(':')[1],
    //     colorCss: {
    //       'backgroundColor': el.split(':')[1]
    //     }
    //   }
    // });
    // result.shift();
    const result = [];
    for (let i = 0; i < colorSetting.split('\n').length; i++) {
      const tmp = colorSetting.split('\n')[i];
      const name = tmp.split(':')[0];
      const color = tmp.split(':')[1];


      if (name.indexOf('color') != -1) {
        result.push({
          name: name,
          colorCode: color,
          colorCss: {
            'backgroundColor': color
          }
        })
      }
    }

    console.log(result);


    return (
      <div className='color_page container' >
        <div className='row'>
          <div className='col-12' ></div>
          <div className='col-4 editarea ' >
            <textarea name="" id="" cols="30" rows="10"
              value={colorSetting}
              onChange={this.onChangeValue}
            >
            </textarea>
          </div>
          <div className='col-8 showarea' >
            <ul className='row' >
              {
                result.map((el, i) => {
                  return (
                    <li key={i} className='col-3'>
                      <div className='colorCard' >
                        <div className='block' style={el.colorCss} >
                        </div>
                        <div className='info' >
                          <div className='name' >
                            {el.name}
                          </div>
                          <div className='code' >
                            {el.colorCode}
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })
              }

            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default Colorpage;