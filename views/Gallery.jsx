import React from 'react';
import GalleryDisplay from './GalleryDisplay.jsx';
import GalleryNav from './GalleryNav.jsx';

export default class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    const style = {
        view_Gallery: {
          width: '100%',
          height: '80%',
          position: 'absolute',
          left: '0',
          top: '10%'
        }
    }

    return(
      <div style={style.view_Gallery}>
        <GalleryDisplay
          galleryChoice={this.props.galleryChoice}/>
        <GalleryTitle
          galleryChoice={this.props.galleryChoice}/>
        <GalleryNav
          galleryChoice={this.props.galleryChoice}
          _handleClick_setView={this.props._handleClick_setView}/>
      </div>
    )
  }
}

class GalleryTitle extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

    render(){
      const style={

      }

      return(
        <div>
          <p>
            {this.props.galleryChoice}
          </p>
        </div>
      )
    }
}
