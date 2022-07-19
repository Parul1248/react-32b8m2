import React from 'react';

class StatusBox extends React.Component{
  constructor(props){
    super();
    this.state = {
      enabled: true,
      msg: 'State is enabled',
    }
    this.showMsg = this.showMsg.bind(this);
  }
  handleClick =(e)=>{
    e.preventDefault();
    this.setState(state =>({
enabled: !state.enabled
    }));
  }
  showMsg(){
    if(this.state.enabled){
      alert('Are you sure to want it disabled')
      this.setState({
        msg:"State is Disable"
      });
    }
    else{
      alert('are you sure to want is enabled')
      this.setState({
        msg: "State is enabled"
      });
    }
  }
render(){
  return(
      <div>
    <div >
      {this.state.msg}
    </div>
    <button  onClick={(e)=>{
      this.handleClick(e);
      this.showMsg();
    }}>
  {this.state.enabled? 'Disabled' : "enabled"}
      </button>
      </div>
  );
}
}
export default StatusBox;
