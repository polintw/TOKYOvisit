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
      //[width, height, top, left, <p>top, ,<p>justifyContern, <p>width , <p>left, boxShadow]
      ['29%', "36%", '-6%', "8%", "15%", 'flex-end', '39%', '0', '0.1vw -0.1vw 0.3vw'],
      ['20%', '62%', '-6%', '44.5%', '60%', 'flex-end', '35%', '0','0.1vw 0.05vw 0.3vw'],
      ['21%', '63%', '40%','8%', '69%', 'flex-start', '48%', '52%', '-0.1vw 0.1vw 0.4vw'],
      ['30%', '35%', '67%', '37%', '69%', 'flex-end', '47%', '0', '-0.1vw 0.1vw 0.3vw'],
      ['21%', '66%', '36.5%', '74%', '71%', 'flex-start', '43%', '57%', '0.1vw 0.05vw 0.4vw']
    ];
    let frameStyle = graphicMap.map(function(mapInfo, index){
      let liCustom = {
        width: mapInfo[0],
        height: mapInfo[1],
        top: mapInfo[2],
        left: mapInfo[3],
        boxShadow: mapInfo[8]
      }
      let liStyle = Object.assign(liCustom, liGeneral);
      let liFrameNameStyle = {
        display: 'flex',
        justifyContent: mapInfo[5],
        width: mapInfo[6],
        height: '5vh',
        position: 'absolute',
        top: mapInfo[4],
        left: mapInfo[7],
        margin: '0',
        padding: '0 0.7vh 1vh 0.7vh',
        boxSizing: 'border-box',
        borderBottom: '0.1vw solid #FFFFFF',
        fontSize: '1.8vw',
        letterSpacing: '0.15vw',
        color: '#FFFFFF'
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
          padding: '0',
          margin: '0'
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
          borderRadius: '8px',
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
              style={catalogueData[catalogue[frame][0]].rotate?index==4?Object.assign({filter: "brightness(80%)"}, style.img_Preview_rotate):style.img_Preview_rotate:style.img_Preview_ordinary}/>
            <p style={frameStyle[index].liFrameNameStyle}>
              <span style={{alignSelf: "flex-end"}}>
                {frame}
              </span>
            </p>
          </li>
        )
      }
    );

    return(
      <div style={style.view_Frames}>
        <ul style={style.component_framesUl}>
            {galleryList}
        </ul>
      </div>
    )
  }
}
