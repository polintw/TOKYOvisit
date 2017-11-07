import React from 'react';
import Basement from './Basement.jsx';
import Frames from './Frames.jsx';
import Overview from './Overview.jsx';
import Gallery from './Gallery.jsx';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'frames',
      galleryChoice: null,
      coverPhoto: {}
    };
    this._render_view = this._render_view.bind(this);
    this._handleClick_setView = this._handleClick_setView.bind(this);
  }

  _handleClick_setView(view, galleryChoice){
    this.setState({view: view, galleryChoice: galleryChoice})
  }

  _render_view(){
    switch(this.state.view){
      case 'overview':
        return(
          <Overview/>
        )
        break;
      case 'gallery':
        return(
          <Gallery
            galleryChoice={this.state.galleryChoice}
            _handleClick_setView={this._handleClick_setView}/>
        )
        break;
      case 'frames':
        return(
          <Frames
            coverPhoto = {this.state.coverPhoto}
            _handleClick_setView={this._handleClick_setView}/>
        )
        break;
      default:
        return(
          <Frames
            _handleClick_setView={this._handleClick_setView}/>
        )
    }
  }

  render(){
    const style = {
      outline: {
        width: "100%",
		    height: "100%",
        position: "relative",
        margin: '0',
        fontFamily: "'Noto Sans TC', '微軟正黑體', 'Lato', 'Helvetica Neue', Helvetica, Futura, sans-serif, Arial"
      }
    }
    return(
      <div style={style.outline}>
        <Basement
          _handleClick_setView={this._handleClick_setView}>
          {
            this._render_view()
          }
        </Basement>
      </div>
    )
  }
}
