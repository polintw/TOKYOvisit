import React from 'react';

export default class Frames extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._renderStyle_frame = this._renderStyle_frame.bind(this);
    this._handleClick_setView = this._handleClick_setView.bind(this);
  }

  _renderStyle_frame(liGeneral){
    const graphicMap = [
      //[width, height, top, left, <p>top, ,<p>textAlign]
      ['15%', "60%", '10%', "7%", "15%", 'right'],
      ['30%', '33%', '0', '25%', '60%', 'right'],
      ['15%', '60%', '37%','25%', '70%', 'right'],
      ['15%', '60%', '0', '58%', '70%', 'left'],
      ['15%', '60%', '25%', '77%', '15%', 'left']
    ];
    let frameStyle = graphicMap.map(function(mapInfo, index){
      let liCustom = {
        width: mapInfo[0],
        height: mapInfo[1],
        top: mapInfo[2],
        left: mapInfo[3]
      }
      let liStyle = Object.assign(liCustom, liGeneral);
      let liFrameNameStyle = {
        width: '100%',
        height: '15%',
        position: 'absolute',
        top: mapInfo[4],
        left: '0',
        margin: '0',
        padding: '0',
        textAlign: mapInfo[5],
        color: 'white'
      }
      return ({
        'liStyle': liStyle,
        'liFrameNameStyle': liFrameNameStyle
      })
    })

    return frameStyle;
  }

  _handleClick_setView(event){
      event.stopPropagation();
      event.preventDefault();
      let galleryChoice = event.currentTarget.id.substr(13);
      this.props._handleClick_setView('gallery', galleryChoice);
  }

  render(){
    const style = {
        view_Frames: {
            width: '100%',
            height: '83%',
            position: 'absolute',
            top: '8%',
            left: '0'
        },
        component_framesUl:{
          width: '100%',
          height: '100%',
          position: 'relative',
          top: '0',
          left: '0',
          padding: '0'
        },
        img_Preview_ordinary: {
          maxWidth: '110%',
          height: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        },
        img_Preview_rotate: {
          width: 'auto',
          maxHeight: '90%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: "translate(-50%, -50%) rotate(90deg)"
        },
        li_general: {
          position: "absolute",
          listStyle: 'none',
          borderRadius: '2px',
          overflow: 'hidden',
          cursor: 'pointer'
        },
        li_empty: {
          width: '30%',
          height: '33%',
          left:'45%',
          top: '64%',
          backgroundColor: 'black',
          cursor: 'default'
        }
    }
    const self = this;
    let frameStyle = self._renderStyle_frame(style.li_general);

    let galleryList = catalogueFrames.map(
      function(frame, index){
        return(
          <li
            key = {'key_frameList_'+index}
            id={'id_frameList_'+frame}
            style = {frameStyle[index].liStyle}
            onClick={self._handleClick_setView}>
            <img
              src={catalogueData[catalogue[frame][0]].src+'.jpg'}
              style={catalogueData[catalogue[frame][0]].rotate?style.img_Preview_rotate:style.img_Preview_ordinary}/>
            <p style={frameStyle[index].liFrameNameStyle}>
              {frame}
            </p>
          </li>
        )
      }
    );
    galleryList.push(
      <li
        key = {'key_galleryList_'+5}
        style = {Object.assign(style.li_empty, style.li_general)}></li>
    )

    return(
      <div style={style.view_Frames}>
        <ul style={style.component_framesUl}>
            {galleryList}
        </ul>
      </div>
    )
  }
}
