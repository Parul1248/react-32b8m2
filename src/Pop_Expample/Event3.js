import React from 'react';

class Emp extends React.Component{
  constructor(props){
    super(props);
    console.log('1.constructor',props.intialNames);
    this.state={
     name: "PArul",
     mounted: false,
    };
    window.addEventListener('mountedEvent', function(){
      console.log('Invoked when component has mounted');
      this.setState((prevState) => {
        var names = prevState.names.concat();
        names.push('Image');
        names.push('jkjiji'); 
        names.push('Ijff');
        names.push('Isds');
        names.push('abdhj');
        return {
          names: names
        };
      });
      this.setState({mounted:true})
    });
  }
  render()
  { 
    console.log('2. render');
    var index = 0;
    return(
     <div>
     <div>
       {this.state.names.map((name) =>
       ( 
           <div className="employee"
                Key={index++}>
                {name}
            </div>
       )}
     </div>
     <div>{this.state.mounted? "Component Mounted" : "Component unmounted"}
       </div>
    
  </div>
    );
  }
  componentDidMount () {
    console.log('3. componentDidMount');
    setTimeout(function (){
      window.dispatchEvent(new Event('mountedEvent'));
    },5000);

  }
}