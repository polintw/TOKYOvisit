import React from 'react';
import BasementBurger from './BasementBurger.jsx';

export default class Basement extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._handleClick_setView = this._handleClick_setView.bind(this);
  }

  _handleClick_setView(event){
      event.stopPropagation();
      event.preventDefault();
      this.props._handleClick_setView('overview');
  }

  render(){
    const style = {
        view_Basement: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0'
        },
        tokyoName: {
            position: 'absolute',
            left: '15%',
            top: '45%',
            zIndex: '-1',
            fontSize: '10vw',
            fontWeight: '600',
            letterSpacing: '1vw',
            color: '#AFAFAF'
        },
        burgerLine: {
            width: '24%',
            height: '28%',
            position: 'absolute',
            right: '6%',
            top: '6%',
            cursor: 'pointer'
        }
    }
    return(
      <div style={style.view_Basement}>
        <div
            style={style.tokyoName}>
            TOKYO
        </div>
        {this.props.children}
        <div
            style={style.burgerLine}
            onClick={this._handleClick_setView}>
            <BasementBurger/>
        </div>
      </div>
    )
  }
}
