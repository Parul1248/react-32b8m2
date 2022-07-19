import React from "react";
class Companyy extends React.Component{
  render(){
    return(
      <div className="company">
        <div>
        Comapny Name: {this.props.companyName}
        <Employee   {...this.props} tenure="2Years"/>
       <Activities   {...this.props} />
        </div>
      
         
        </div>
    )
  }
}
class Employee extends React.Component {
  render() {
    return (
      <div className="employee">
        <div>Name: {this.props.employeeName}</div>
        <div>Designation: {this.props.designation}</div>
        <div>Tenure: {this.props.tenure}</div>
      </div>
    );
  }
}
class Activities extends React.Component {
  render() {
    return (
      <div className="activities">
        <div>Committies: {this.props.comitties}</div>
        <div>Forums: {this.props.forums}</div>
      </div>
    );
  }
}
export default Companyy