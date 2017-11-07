import React from 'react';
import ReactDOM from 'react-dom';

export default class ModalBox extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
	  let container = this.props.containerClass;
    this.newModalBox = document.getElementsByClassName(this.props.containerClass)[0].appendChild(document.createElement('div'));
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.newModalBox);
  }

  componentDidUpdate(){
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.newModalBox);
  }

  componentWillUnmount(){
    ReactDOM.unmountComponentAtNode(this.newModalBox);
    document.getElementsByClassName(this.props.containerClass)[0].removeChild(this.newModalBox);
  }

  render() {
    return null;
  }
}
