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
}