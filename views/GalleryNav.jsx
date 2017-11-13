import React from 'react';

export default class GalleryNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      widthRef: 1
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
    self.state.widthRef>1?self.setState({widthRef:1}):self.setState({widthRef:2.5});
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
    this.setState({widthRef: 1});
    this.props._handleClick_setView('gallery', nextChoice);
  }

  _render_choiceNav(style){
    const self = this;
    let galleryList = catalogueFrames.map(
      function(frame, index){
        return(
          <li
            key = {'key_galleryNav_'+index}
            style= {style}
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
        width: (8*this.state.widthRef).toString()+'%',
        height: '78vh',
        position: 'fixed',
        bottom: '10vh',
        left: '0%',
        backgroundColor: '#FFFFFF',
        boxShadow: '-0.1vw 0.4vw 0.4vw -0.15vw #555555',
        overflow: 'hidden'
      },
      navBack: {
        width: (24/this.state.widthRef).toString()+'%',
        height: 'auto',
        position: 'absolute',
        left: (50/this.state.widthRef).toString()+'%',
        top: '68%',
        transform: 'translate(-50%, 0)',
        cursor: 'pointer'
      },
      choiceNavBurger: {
        width: (30/this.state.widthRef).toString()+'%',
        height: 'auto',
        position: 'absolute',
        left: (50/this.state.widthRef).toString()+'%',
        bottom: '11%',
        transform: 'translate(-50%, 0)',
        cursor: 'pointer'
      },
      burgerList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        width: '60%',
        height: '47%',
        position: 'absolute',
        left: '38%',
        bottom: '10%',
        padding: '0',
        margin: '0',
        borderLeft: '2px solid #919191',
        borderRadius: '0.1vw',
        backgroundColor: '#FFFFFF',
        listStyle: 'none'
      },
      burgerListOpation: {
        width: '100%',
        height: '15%',
        boxSizing: 'border-box',
        padding: '0 0 0 12%',
        backgroundColor: '#FFFFFF',
        fontSize: '1.5vw',
        fontStyle: 'italic',
        fontWeight: '600',
        letterSpacing: '0.1vw',
        cursor: 'pointer'
      }
    }

    return(
      <div
        style={style.component_GalleryNav}>
        <div
          style={style.navBack}
          onClick={this._handleClick_setView_toFrames}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.75 49.75">
            <defs>
              <style>{".cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}"}</style>
            </defs>
            <g id="圖層_2-2" data-name="圖層 2">
              <line className="cls-1" x1="1.5" y1="48.25" x2="48.25" y2="1.5"/>
              <line className="cls-1" x1="1.5" y1="1.5" x2="48.25" y2="48.25"/>
            </g>
          </svg>
        </div>
        <div
          style={style.choiceNavBurger}
          onClick={this._handleClick_choiceNav}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.38 16.48">
            <defs>
              <style>{".cls-1{fill:none;stroke:#333333;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}"}</style>
            </defs>
            <g id="wireframe">
              <line className="cls-1" x1="1.5" y1="8.24" x2="26.88" y2="8.24"/>
              <line className="cls-1" x1="1.5" y1="14.98" x2="26.88" y2="14.98"/>
              <line className="cls-1" x1="1.5" y1="1.5" x2="26.88" y2="1.5"/>
            </g>
          </svg>
        </div>
        {
          this.state.widthRef>1 &&
          <ul
            style={style.burgerList}>
            {this._render_choiceNav(style.burgerListOpation)}
          </ul>
        }
      </div>
    )
  }
}
