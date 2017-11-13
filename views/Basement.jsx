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
    this.props._handleClick_setView('overview', null);
  }

  render(){
    const style = {
        view_Basement: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            overflow: 'hidden'
        },
        tokyoName: {
            width: '70%',
            position: 'absolute',
            left: '-4%',
            bottom: '-10%',
            opacity: '0.6'
        },
        burgerLine: {
            width: '25%',
            height: '14%',
            position: 'absolute',
            right: '2%',
            top: '3%',
            cursor: 'pointer'
        }
    }
    return(
      <div style={style.view_Basement}>
        <div
            style={style.tokyoName}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 828.55 189.84">
                <defs>
                    <style>{".cls-1-name{fill:#919191;}"}</style>
                </defs>
                <g id="圖層_1-2" data-name="圖層 1">
                    <path className="cls-1-name" d="M137.9,13.52H75.6V187.87H62.68V13.52H0V2.1H137.9Z"/>
                    <path className="cls-1-name" d="M318.69,94.92q0,21.53-6.14,39.06a87.4,87.4,0,0,1-17.3,29.93,76.37,76.37,0,0,1-26.77,19.17,90.79,90.79,0,0,1-68.76,0A76.49,76.49,0,0,1,173,163.91,87.33,87.33,0,0,1,155.71,134q-6.14-17.53-6.14-39.06A117.05,117.05,0,0,1,155.71,56,87.33,87.33,0,0,1,173,26.06a77.24,77.24,0,0,1,26.7-19.23A84.53,84.53,0,0,1,234.06,0a85.7,85.7,0,0,1,34.41,6.76A76,76,0,0,1,295.24,26a88.13,88.13,0,0,1,17.3,30A117.12,117.12,0,0,1,318.69,94.92Zm-13.29,0q0-19.43-5.14-34.92a75.56,75.56,0,0,0-14.54-26.26,62.77,62.77,0,0,0-22.57-16.48,76.6,76.6,0,0,0-58,0,63.35,63.35,0,0,0-22.63,16.48A75.7,75.7,0,0,0,167.81,60q-5.2,15.49-5.2,34.92t5.2,35a75.75,75.75,0,0,0,14.67,26.19,62.61,62.61,0,0,0,22.63,16.41,77.42,77.42,0,0,0,58,0,62,62,0,0,0,22.57-16.41,75.6,75.6,0,0,0,14.54-26.19Q305.4,114.48,305.4,94.92Z"/>
                    <path className="cls-1-name" d="M376.23,87.83h10.53a37.57,37.57,0,0,0,4.14-.2,13.79,13.79,0,0,0,3.2-.72,8.86,8.86,0,0,0,2.63-1.51A30.53,30.53,0,0,0,399.3,83L470.88,5.91a10.59,10.59,0,0,1,3.7-3,10.82,10.82,0,0,1,4.33-.79h10.28L411.71,85.47a37.09,37.09,0,0,1-4.2,4.07,16.43,16.43,0,0,1-4.07,2.36,14.63,14.63,0,0,1,4.76,2.43,26.34,26.34,0,0,1,4.26,4.27l81.61,89.27H483.67A9.65,9.65,0,0,1,479,187a10,10,0,0,1-2.82-2.69l-75-80.35q-1.38-1.44-2.57-2.49A12.41,12.41,0,0,0,396,99.71a12.08,12.08,0,0,0-3.39-1,30.78,30.78,0,0,0-5-.33H376.23v89.54H363.31V2.1h12.91Z"/>
                    <path className="cls-1-name" d="M581.08,111.33v76.54H568.29V111.33L502.6,2.1h11.28a4.65,4.65,0,0,1,2.88.85,6.46,6.46,0,0,1,1.88,2.43l50.77,85.33q1.63,3,3,5.84a58.17,58.17,0,0,1,2.38,5.58q1-2.76,2.26-5.58t2.88-5.84L630.72,5.38A5.88,5.88,0,0,1,632.54,3a4.68,4.68,0,0,1,2.95-.92h11.28Z"/>
                    <path className="cls-1-name" d="M828.55,94.92q0,21.53-6.14,39.06a87.4,87.4,0,0,1-17.3,29.93,76.36,76.36,0,0,1-26.77,19.17,90.79,90.79,0,0,1-68.76,0,76.49,76.49,0,0,1-26.7-19.17A87.32,87.32,0,0,1,665.58,134q-6.15-17.53-6.14-39.06A117,117,0,0,1,665.58,56a87.32,87.32,0,0,1,17.3-29.93,77.23,77.23,0,0,1,26.7-19.23A84.53,84.53,0,0,1,743.93,0a85.69,85.69,0,0,1,34.41,6.76A76,76,0,0,1,805.11,26a88.13,88.13,0,0,1,17.3,30A117.12,117.12,0,0,1,828.55,94.92Zm-13.29,0q0-19.43-5.14-34.92a75.54,75.54,0,0,0-14.54-26.26A62.76,62.76,0,0,0,773,17.26a76.6,76.6,0,0,0-58,0,63.35,63.35,0,0,0-22.63,16.48A75.69,75.69,0,0,0,677.67,60q-5.2,15.49-5.2,34.92t5.2,35a75.74,75.74,0,0,0,14.67,26.19A62.61,62.61,0,0,0,715,172.51a77.42,77.42,0,0,0,58,0,62,62,0,0,0,22.57-16.41,75.59,75.59,0,0,0,14.54-26.19Q815.26,114.48,815.26,94.92Z"/>
                </g>
            </svg>
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

class BurgerAside extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
        <div>
          <h2>{catalogueData[this.props.photoFocus].region}</h2>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>
          <span>照片日期:</span>
          <span>{catalogueData[this.props.photoFocus].date.substr(0,2)+' 月 '+catalogueData[this.props.photoFocus].date.substr(2,2)+' 日'}</span>
        </div>
        <div
          onClick={this.props._handleClick_setView}>
          <span>探索更多旅程情報</span>
        </div>
      </div>
    )
  }
}
