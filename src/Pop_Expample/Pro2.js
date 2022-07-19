
import React from "react";

class Company extends React.Component{
  render(){
    return(
      <div className="company">
        <div>
        Comapny Name: {this.props.companyName}
        </div>
       <Employee   employeeName=  {this.props.employeeName}
                   designation =  {this.props.designation} />
       <Activities Comitties   =  {this.props.comitties}
                   Forums      =  {this.props.forums} />
         
        </div>
    )
  }
}
class Employee extends React.Component{
  render(){
    return(
      <div className="employee">
        <div>
          Name: {this.props.employeeName}
        </div>
        <div>
          Designation: {this.props.designation}
        </div>
        </div>
    )
  }
}

class Activities extends React.Component{
  render(){
    return(
      <div className="activities">
        <div>
          Committies: {this.props.comitties}
        </div>
        <div>
          Forums: {this.props.forums}
        </div>
        </div>
    )
  }
}

export default Company