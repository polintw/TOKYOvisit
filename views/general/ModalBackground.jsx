import React from 'react';

export default class ModalBackground extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const style = this.props.className ?　null : {
      width: "100%",
      height: "95%",
      position: "absolute",
      top: "5%",
      left: 0,
      backgroundColor: "rgba(106, 100, 100, 0.9)",
      zIndex: 5
    }

    return(
      <div className={this.props.className} style={style} onClick={(event) => {event.stopPropagation();event.preventDefault();this.props.onClose();}}>
        <div onClick={(event) => {event.preventDefault(); event.stopPropagation();}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
