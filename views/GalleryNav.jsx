import React from 'react';

export default class GalleryNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      choiceNav: false
    };
    this._render_choiceNav = this._render_choiceNav.bind(this);
    this._handleClick_choiceNav = this._handleClick_choiceNav.bind(this);
    this._handleClick_setView_toFrames = this._handleClick_setView_toFrames.bind(this);
    this._handleClick_setView_toNewGallery = this._handleClick_setView_toNewGallery.bind(this);
  }

  _handleClick_choiceNav(event){
    event.stopPropagation();
    event.preventDefault();
    const self = this;
    self.state.choiceNav?self.setState({choiceNav:false}):self.setState({choiceNav:true});
  }

  _handleClick_setView_toFrames(event){
    event.stopPropagation();
    event.preventDefault();
    this.props._handleClick_setView('frames', null)
  }

  _handleClick_setView_toNewGallery(event){
    event.stopPropagation();
    event.preventDefault();
    let nextChoice = event.target.innerText;
    if(nextChoice == this.props.galleryChoice){return;}
    this.setState({choiceNav: false});
    this.props._handleClick_setView('gallery', nextChoice);
  }

  _render_choiceNav(){
    const self = this;
    let galleryList = catalogueFrames.map(
      function(frame, index){
        return(
          <li
            key = {'key_galleryNav_'+index}
            onClick={self._handleClick_setView_toNewGallery}>
            {frame}
          </li>
        )
      }
    );
    return galleryList
  }

  render(){
    const style = {
      component_GalleryNav: {
        width: '10%',
        height: '40%',
        position: 'absolute',
        bottom: '0',
        left: '0'
      }
    }

    return(
      <div
        style={style.component_GalleryNav}>
        <div
          onClick={this._handleClick_setView_toFrames}>
          X
        </div>
        <div
          onClick={this._handleClick_choiceNav}>
          三
          {
            this.state.choiceNav &&
            <ul>
              {this._render_choiceNav()}
            </ul>
          }
        </div>
      </div>
    )
  }
}
