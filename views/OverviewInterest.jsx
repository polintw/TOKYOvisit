import React from 'react';

export default class OverviewInterest extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      };
      this.style = {
        overviewInterest: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0'
        },
        interestLeft: {
          width: '60%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0'
        },
        interestMiddle: {
          width: '2%',
          height: '100%',
          position: 'absolute',
          top: '-2%',
          left: '60%',
          borderRadius: '0.2vw',
          backgroundColor: '#FBFBFB'
        },
        interestRight: {
          width: '37%',
          height: '100%',
          position: 'absolute',
          top: '0',
          right: '0'
        },
        leftTitle: {
          width: '94%',
          height: '13%',
          position: 'absolute',
          top: '6%',
          right: '2%',
          padding: '0 0 0 2%',
          boxSizing: 'border-box',
          borderBottom: '0.15vw solid #000000',
          textAlign: 'left',
          fontSize: '2.2vw',
          fontWeight: '600',
          cursor: 'default'
        },
        rightTitle: {
          width: '90%',
          height: '12%',
          position: 'absolute',
          top: '7%',
          right: '7%',
          padding: '0 0 0 2%',
          boxSizing: 'border-box',
          borderBottom: '0.15vw solid #c3ad3d',
          textAlign: 'left',
          fontSize: '1.8vw',
          fontWeight: '400',
          cursor: 'default'
        },
        rightColumn: {
          width: '94%',
          height: '70%',
          position: 'absolute',
          top: '23%',
          right: '2%'
        },
        img_interest: {
          maxWidth: '92%',
          maxHeight: '70%',
          position: 'absolute',
          top: '58%',
          left: '51%',
          transform: 'translate(-50%, -50%)',
          boxSizing: 'content-box',
          borderTop: '0.6vw solid #000000',
          borderRight: '0.45vw solid #000000',
          borderLeft: '0.45vw solid #000000',
          borderBottom: '0.6vw solid #000000',
          borderRadius: '0.1vw'
        },
        img_interestRotate: {
          maxWidth: '85%',
          maxHeight: '73%',
          position: 'absolute',
          top: '58%',
          left: '51%',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          boxSizing: 'content-box',
          borderTop: '0.3vw solid #000000',
          borderRight: '0.7vw solid #000000',
          borderLeft: '0.7vw solid #000000',
          borderBottom: '0.3vw solid #000000',
          borderRadius: '0.1vw'
        },
        div_rightColumnBlock: {
          width: '100%',
          position: 'relative',
          boxSizing: 'border-box',
          padding: '2%',
          margin: '2% 0',
          fontSize: '1.4vw',
          fontWeight: '400',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        },
        p_webDescription: {
          height: '47%',
          marginBottom: '0',
          fontSize: '1.1vw',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }
      };
    }

    render(){
        return(
            <div
                style={this.style.overviewInterest}>
                <div
                    style={this.style.interestLeft}>
                    <div
                      style={this.style.leftTitle}>
                      {catalogueData[this.props.interest].location}
                    </div>
                    <img
                      src={catalogueData[this.props.interest].src+'.jpg'}
                      style={catalogueData[this.props.interest].rotate?this.style.img_interestRotate: this.style.img_interest}/>
                </div>
                <div style={this.style.interestMiddle}></div>
                <div
                    style={this.style.interestRight}>
                    <div
                      style={this.style.rightTitle}>
                      {catalogueData[this.props.interest].region}
                    </div>
                    <div
                      style={this.style.rightColumn}>
                      <div
                        style={this.style.div_rightColumnBlock}>
                        {'拜訪日期:   '}
                        {catalogueData[this.props.interest].date.substr(0,2)+' 月'+catalogueData[this.props.interest].date.substr(2,2)+' 日'}
                      </div>
                      <div
                        style={this.style.div_rightColumnBlock}>
                        {'資訊連結:   '}
                        <a href={catalogueData[this.props.interest].webUrl} target='_blank' style={{fontSize: '1vw', target: "_blank"}}>{catalogueData[this.props.interest].webUrl}</a>
                      </div>
                      <div
                        style={this.style.div_rightColumnBlock}>
                        {'連結簡介:  '}<br/>
                        <p
                          style={this.style.p_webDescription}>
                          {catalogueData[this.props.interest].webDescription}
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}
