import React from 'react';

class HotelBookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nameValue: '',
      emailValue='',
      nameOfHotelValue: 'Fantastic Hotels',
      locationValue :'Calfornia',
    };
  }
/// for single event for multiple input//////////
  handleInputChange = (event) => {
    const name = event.target.name;
    var value = event.target.value;
    if(value == 'nameValue'){
      value = value.toUpperCase();
    }
    this.setState({[name]: value});
  }
  /////////////////////////////////////////////////////
handleNameChange =(event)=>{
this.setState({nameValue: event.target.value.toUpperCase()});
}
handleEmailChange =(event) =>{
  this.setState({emailValue:even.target.value});
}
handlenameOfHotelChange =(event)=>{
  this.setState({nameOfHotelValue: event.target.value});
  }
  handleLocationChange =(event) =>{
    this.setState({locationValue:even.target.value});
  }
  handleSubmit=(event)=>{
    alert("are you sure to proceed with hotel booking"+this.state.nameOfHotelValue);
    console.log('Name submitted:' +this.state.nameValue );
    console.log('Email submitted:' +this.state.emailValue);
    console.log('Name of Hotel submitted:' +this.state.nameOfHotelValue);
    console.log('Location submitted:' +this.state.locationValue);

    this.setState({
      nameValue: '',
      emailValue:'',
      nameOfHotelValue: 'Fantastic Hotels',
      locationValue :'Calfornia',
     });
     event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="content">
        <div className="label"> Name:</div>
        <textarea className="input" value={this.state.nameValue}
                  onChange={this.handleNameChange}/>


      <div className="label"> Email:</div>
      <input className="input" typr="text" value={this.state.emailValue}
             onChange={this.handleEmailChange}/>

      <div className="label"> Name of Hotel: </div>
      <select value={this.state.nameOfHotelValue}
             onChange={this.handlenameOfHotelChange}>
               <option value="Fantastic Hotel">Fantastic Hotel</option>
               <option value="Wonderful Hotel">Wonderful  Hotel</option>
               <option value="Comfortable Hotel">FComfortable  Hotel</option>
               <option value="Prententious Hotel">Frententious Hotel</option>
               </select>

       
      <div className="label"> Location:</div>
      <input className="input" typr="text" value={this.state.locationValue}
             onChange={this.handleLocationChange}/>
             <button className="but" type="submit" value="Submit"></button>
       
       
        </form>

/* <form  onSubmit={this.handleSubmit} className="content">
<div className="label"> Name:</div>
<textarea className="input" name="nameValue "value={this.state.nameValue}
          onChange={this.handleNameChange}/>


<div className="label"> Email:</div>
<input className="input" typr="text" name="emailValue" value={this.state.emailValue}
     onChange={this.handleEmailChange}/>

<div className="label"> Name of Hotel: </div>
<select value={this.state.nameOfHotelValue}
        name="nameOfHotelValue"
     onChange={this.handlenameOfHotelChange}>
       <option value="Fantastic Hotel">Fantastic Hotel</option>
       <option value="Wonderful Hotel">Wonderful  Hotel</option>
       <option value="Comfortable Hotel">FComfortable  Hotel</option>
       <option value="Prententious Hotel">Frententious Hotel</option>
       </select>


<div className="label"> Location:</div>
<input className="input" typr="text" name="locationValue "value={this.state.locationValue}
     onChange={this.handleLocationChange}/>
     <button className="but" type="submit" value="Submit"></button>


</form> */

        
    )
  }
}
export default HotelBookingForm;