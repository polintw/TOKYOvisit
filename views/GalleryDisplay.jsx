import React from 'react';

export default class GalleryDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      catalogueChoice: catalogue[this.props.galleryChoice],
      imgRender: [1,0],
      opacityOdd: 0,
      opacityEven: 1,
      wheelCount: 0,
      scrollCount: 0,
      scrollPoint: [],
      lastScrollTop: 0,
      scrollBoxFill: ''
    };
    this._handleScroll_ScrollBox = this._handleScroll_ScrollBox.bind(this);
    this._handleWheel_ImgFade = this._handleWheel_ImgFade.bind(this);
    this._prepareState_ScrollPoint = this._prepareState_ScrollPoint.bind(this);
  }

  _prepareState_ScrollPoint(catalogueChoice){
    let self = this;
    let scrollPoint = [200];
    for(let i=1; i<(catalogueChoice.length-1)*4; i++){
      let add;
      if(i%4==0){
        add =500;
      }else{
        add = 200;
      }
      scrollPoint.push(scrollPoint[i-1]+add)
    }
    return scrollPoint;
  }

  _handleScroll_ScrollBox(event){
    event.stopPropagation();
    let scrollTop = $('#scrollBox').scrollTop();
    if(scrollTop>this.state.lastScrollTop){
      let pointCheck = this.state.scrollCount==this.state.scrollPoint.length?this.state.scrollPoint[this.state.scrollCount-1]:this.state.scrollPoint[this.state.scrollCount];
      if(scrollTop>this.state.scrollPoint[this.state.scrollCount]){
        let scrollEvent = {};
        scrollEvent.deltaY = 1;
        this._handleWheel_ImgFade(scrollEvent);
        this.state.scrollCount += 1;
      }
    }else if(scrollTop<this.state.lastScrollTop){
      let pointCheck = this.state.scrollCount?this.state.scrollPoint[this.state.scrollCount-1]:0;
      if(scrollTop<pointCheck){
        let scrollEvent = {};
        scrollEvent.deltaY = -1;
        this._handleWheel_ImgFade(scrollEvent);
        this.state.scrollCount -= 1;
      }
    }
    this.state.lastScrollTop = scrollTop;
  }

  _handleWheel_ImgFade(event){
    //event.preventDefault();
    //this.state.wheelCount += event.deltaY;
    //let thereshold = this.state.opacityOdd*this.state.opacityEven==0?450:180;
    //scroll Down or up is totally different, should always be separated
    //if(this.state.wheelCount>thereshold){
    if(event.deltaY>0){
      if(this.state.imgRender[0]==this.state.catalogueChoice.length-1){this.state.wheelCount=0; return;};
      let even = this.state.imgRender[this.state.imgRender.length-1]%2==0?(-1):(1);
      let changeUnit = 0.25*even;
      this.state["opacityOdd"] = this.state.opacityOdd-changeUnit;
      this.state["opacityEven"] = this.state.opacityEven+changeUnit;
      if(!(this.state.opacityOdd*this.state.opacityEven)){
        this.state.imgRender.splice(1,1);
        let unshiftOne = this.state["imgRender"][0]+1;
        this.state.imgRender.unshift(unshiftOne);
      }
    //}else if(this.state.wheelCount<(thereshold*(-1))){
    }else if(event.deltaY<0){
      if(!(this.state.opacityOdd*this.state.opacityEven)){
        if(!this.state.imgRender[1]){this.state.wheelCount=0; return;};
        this.state.imgRender.splice(0,1);
        this.state.imgRender.push(this.state.imgRender[0]-1);
      }
      let even = this.state.imgRender[this.state.imgRender.length-1]%2==0?(-1):(1);
      let changeUnit = 0.25*even*(-1);
      this.state["opacityOdd"] = this.state.opacityOdd-changeUnit;
      this.state["opacityEven"] = this.state.opacityEven+changeUnit;
    }else{
      return;
    }

    //this.setState({opacityEven: this.state.opacityEven, opacityOdd: this.state.opacityOdd, imgRender: this.state.imgRender, wheelCount: 0});
    this.setState({opacityEven: this.state.opacityEven, opacityOdd: this.state.opacityOdd, imgRender: this.state.imgRender});
  }

  componentWillMount(){
    let scrollPoint = this._prepareState_ScrollPoint(this.state.catalogueChoice);
    let scrollBoxFill = scrollPoint[scrollPoint.length-1];
    this.setState({scrollPoint: scrollPoint, scrollBoxFill: scrollBoxFill});
  }

  componentWillReceiveProps(nextProps){
    let self = this;
    let scrollPoint = self._prepareState_ScrollPoint(catalogue[nextProps.galleryChoice]);
    let scrollBoxFill = scrollPoint[scrollPoint.length-1];
    $('#scrollBox').scrollTop(0);
    this.setState({
      catalogueChoice: catalogue[nextProps.galleryChoice],
      imgRender: [1,0],
      opacityOdd: 0,
      opacityEven: 1,
      scrollCount: 0,
      scrollPoint: scrollPoint,
      lastScrollTop: 0,
      scrollBoxFill: scrollBoxFill
    })
  }

  render(){
    const style = {
      component_GalleryDisplay: {
        width: '93%',
        height: '118%',
        position: 'absolute',
        top: '0',
        right: '0'
      },
      img_Photo_ordinary: {
        maxWidth: '100%',
        height: '100%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        margin: '0',
        borderRadius: '0.4vw'
      },
      img_Photo_rotate: {
        maxWidth: '55%',
        height: 'auto',
        position: 'absolute',
        left: '50%',
        top: '50%',
        margin: '0',
        transform: 'translate(-50%,-50%) rotate(90deg)',
        borderRadius: '0.4vw'
      },
      div_ScrollBox: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        overflowY: 'scroll'
      },
      div_scrollBoxFill: {
        width: '100%',
        height: this.state.scrollBoxFill
      }
    }

    const self = this;
    let photos = this.state.imgRender.map(function(number, index){
      let photoData = catalogueData[self.state.catalogueChoice[number]];
      let opacityState = number%2==0?self.state.opacityEven:self.state.opacityOdd;
      let argument = index==1?Math.pow(1.1, (4-(opacityState/0.25))):Math.pow(0.9, (4-(opacityState/0.25)));
      let div_imgBaseDepend = {
        width: (80*argument).toString()+'%',
        height: (85*argument).toString()+'%',
        position: 'absolute',
        top: '42.5%',//(42.5*argument).toString()+'%',
        left: '40%',//(40*argument).toString()+'%',
        transform: "translate(-50%, -50%)",
        opacity: opacityState.toString()
      }
      return(
        <div
          key={'key_galleryDisPhoto_'+photoData.photo}
          style={div_imgBaseDepend}>
          <img
            src={photoData.src+'.jpg'}
            style={photoData.rotate?style.img_Photo_rotate:style.img_Photo_ordinary}/>
        </div>
      )
    })

    return(
      <div
        style={style.component_GalleryDisplay}>
        {photos}
        <div
          id={'scrollBox'}
          style={style.div_ScrollBox}
          onScroll={this._handleScroll_ScrollBox}>
          <div style={style.div_scrollBoxFill}></div>
        </div>
      </div>
    )
  }
}
