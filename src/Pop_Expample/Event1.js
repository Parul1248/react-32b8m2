import React from 'react';
class AnchorLink extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      linkCounter: 0,
    };
  }
  handleClick= (e) => {
    console.log(e.type + '' + this.state.linkCounter)
    console.log("native event:" + e.nativeEvent)
    this.setState(function(prevState, props){
      return{
        linkCounter: prevState.linkCounter +1
      }
    });
  };
  render(){
    return(
      <div>
        <div className="box">
          <a href= "https://skillsoft.com/" target= "_blank"
            onClick = {this.handleClick}>
              Click me</a>
          </div>
        </div>
    )
  }

}

export default AnchorLink 