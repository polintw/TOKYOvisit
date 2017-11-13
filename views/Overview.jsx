import React from 'react';
import OverviewInterest from './OverviewInterest.jsx';
import GalleryNav from './GalleryNav.jsx';

export default class Overview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hoverOn: '',
      interest: false
    };
    this._handleClick_setInterest = this._handleClick_setInterest.bind(this);
    this._handleMouse_ImgOver = (event)=>{this.setState({hoverOn: event.target.id})};
    this._handleMouse_ImgOut = (event)=>{this.setState({hoverOn: ''})};
    this.style = {
      view_Overview: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          right: '0'
      },
      component_ColumAside: {
        width: '27%',
        height: '93%',
        position: 'absolute',
        top: '1.5%',
        right: '1%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0.15vw 0vw 0.3vw -0.15vw #555555'
      },
      component_ColumTop: {
        width: '53%',
        height: '17%',
        position: 'fixed',
        top: '1.5%',
        left: '43%',
        transform: 'translate(-50%, 0)',
        backgroundColor: 'white',
        boxShadow: '0 0.25vw 0.3vw -0.2vw #555555'
      },
      component_ColumMain: {
        width: '53%',
        height: '74%',
        position: 'absolute',
        top: '20.5%',
        left: '43%',
        transform: 'translate(-50%,0)',
        backgroundColor: 'white',
        boxShadow: '-0.2vw 0.15vw 0.3vw -0.2vw #555555'
      },
      topTitle: {
        position: 'absolute',
        top: '60%',
        left: '5%',
        transform: 'translate(0, -50%)',
        fontWeight: '400',
        fontSize: '2.2vw',
        letterSpacing: '0.5vw'
      },
      asideGap: {
        width: '100%',
        position: 'absolute',
        top: '20%',
        borderBottom: '0.25vw solid #FBFBFB',
        borderRadius: '0.2vw'
      },
      asideList: {
        width: '94%',
        height: '75%',
        position: 'absolute',
        top: '23%',
        right: '0',
        overflowY: 'auto'
      },
      listRow: {
        display: 'inline-block',
        width: '48%',
        height: '27%',
        position: 'relative',
        margin: '0 2% 0 0',
        boxSizing: 'border-box'
      },
      listRowImg: {
        maxWidth: '95%',
        height: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '0.3vw',
        cursor: 'pointer'
      },
      listRowImgRotate: {
        maxWidth: '72%',
        height: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(90deg)',
        borderRadius: '0.3vw',
        cursor: 'pointer'
      },
      div_mainPlaceHolder: {
        position: 'absolute',
        top: '50%',
        left: '53%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2vw',
        fontWeight: '400',
        letterSpacing: '0.3vw',
        textAlign: 'center',
        opacity: '0.3',
        color: '#919191'
      },
      span_mainPlaceHolderEng: {
        fontSize: '1.4vw',
        letterSpacing: '0.15vw'
      }
    }
  }

  _handleClick_setInterest(event){
    event.stopPropagation();
    event.preventDefault();
    this.setState({interest: event.target.id});
  }

  render(){
    let self = this;

    let optionList = intelligencePhoto.map(function(fileName, index){
      let imgStyle = Object.assign({}, catalogueData[fileName].rotate?self.style.listRowImgRotate: self.style.listRowImg);
      if(fileName=='WP_20171025_13_44_01_Pro'){
        imgStyle.maxWidth = '43%';
      }
      if(fileName==self.state.hoverOn){imgStyle.boxShadow='0.1vw 0.15vw 0.2vw'};
      return(
        <div
          key ={'key_intelligenceList_'+fileName}
          style={self.style.listRow}>
          <img
            src={catalogueData[fileName].src+'.jpg'}
            style={imgStyle}
            id={fileName}
            onMouseOver={self._handleMouse_ImgOver}
            onMouseOut={self._handleMouse_ImgOut}
            onClick={self._handleClick_setInterest}/>
        </div>
      )
    })

    return(
      <div
        style={this.style.view_Overview}>
        <div
          style={this.style.component_ColumAside}>
          <div style={this.style.asideGap}></div>
          <div
            style={this.style.asideList}>
            {optionList}
          </div>
        </div>
        <div
          style={this.style.component_ColumMain}>
          {
            this.state.interest ?
            (
              <OverviewInterest
                interest={this.state.interest}/>
            ):
            (
              <div
                style={this.style.div_mainPlaceHolder}>
                <span>點選有興趣的相片</span><br/>
                <span style={this.style.span_mainPlaceHolderEng}>please click a photo you interested</span><br/>
              </div>
            )
          }
        </div>
        <div
          style={this.style.component_ColumTop}>
          <div
            style={this.style.topTitle}>
            探索場景
          </div>
        </div>
        <GalleryNav
          galleryChoice={this.props.galleryChoice}
          _handleClick_setView={this.props._handleClick_setView}/>
      </div>
    )
  }
}
