import React from 'react';

export default class GalleryDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      catalogueChoice: catalogue[this.props.galleryChoice]
    };
    this._handleClick_cutCount = this._handleClick_cutCount.bind(this);
    this._handleClick_addCount = this._handleClick_addCount.bind(this);
  }

  _handleClick_cutCount(event){
    event.stopPropagation();
    event.preventDefault();
    if(this.state.count>0){
      this.setState({count: this.state.count-=1})
    }
  }

  _handleClick_addCount(event){
    event.stopPropagation();
    event.preventDefault();
    if(this.state.count<this.state.catalogueChoice.length){
      this.setState({count: this.state.count+=1})
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      count: 0,
      catalogueChoice: catalogue[nextProps.galleryChoice]
    })
  }

  render(){
    const style = {
      component_GalleryDisplay: {
        width: '70%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0'
      },
      div_previous: {
        width: '15%',
        height: '65%',
        position: 'absolute',
        left:'0',
        top:'0',
        cursor: 'pointer'
      },
      div_next: {
        width: '10%',
        height: '100%',
        position: 'absolute',
        right:'0',
        top:'0',
        cursor: 'pointer'
      },
      img_Photo_ordinary: {
        width: '90%',
        height: '100%',
        position: 'absolute',
        right: '0',
        top: '0',
        margin: '0'
      },
      img_Photo_rotate: {
        maxWidth: '55%',
        height: 'auto',
        position: 'absolute',
        right: '45%',
        top: '50%',
        margin: '0',
        transform: 'translate(50%,-50%) rotate(90deg)'
      }
    }

    return(
      <div
        style={style.component_GalleryDisplay}>
        <div
          style={style.div_previous}
          onClick={this._handleClick_cutCount}>
        </div>
        <img
          src={catalogueData[this.state.catalogueChoice[this.state.count]].src+'.jpg'}
          style={catalogueData[this.state.catalogueChoice[this.state.count]].rotate?style.img_Photo_rotate:style.img_Photo_ordinary}/>
        <div
          style={style.div_next}
          onClick={this._handleClick_addCount}>
        </div>
      </div>
    )
  }
}
