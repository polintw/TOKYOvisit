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
          height: '78%',
          position: 'absolute',
          left: '0',
          top: '12%'
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
        component_GalleryTitle: {
          width: '19%',
          height: '18%',
          position: 'absolute',
          bottom: '3%',
          right: '2%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0.8vw 0vw 0.45vw -0.35vw'
        },
        titleBlock: {
          display: 'flex',
          justifyContent: 'flex-start',
          width: '84%',
          height: '60%',
          position: 'absolute',
          right: '3%',
          bottom: '35%',
          padding: '2%',
          borderBottom: '0.1vw solid #000000',
          fontSize: '2.6vw',
          fontWeight: '600',
          textAlign: 'right',
          letterSpacing: '0.25vw',
          color: '#992626'
        }
      }

      return(
        <div
          style={style.component_GalleryTitle}>
          <div
            style={style.titleBlock}>
            <span style={{alignSelf: "flex-end"}}>
            {this.props.galleryChoice}
            </span>
          </div>
        </div>
      )
    }
}
