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
      galleryChoice: null
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
          <Overview
            galleryChoice={this.state.galleryChoice}
            _handleClick_setView={this._handleClick_setView}/>
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

  componentWillMount(){
    document.getElementsByTagName('body')[0].setAttribute('style', "margin: 0;")
  }

  componentWillUpdate(){
    document.getElementsByTagName('body')[0].setAttribute('style', "margin: 0;")
  }

  render(){
    const style = {
      outline: {
        width: "100%",
		    height: "100%",
        position: "relative",
        margin: '0',
        backgroundColor: '#F9F9F9',
        fontFamily: "'Lato', 'Noto Sans TC', '微軟正黑體', 'Helvetica Neue', Helvetica, Futura, sans-serif, Arial"
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
