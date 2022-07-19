import React from 'react';
class DetailBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'parul',
      color: 'yellow',
      backgroundColor: 'pink',
      subject: 'History',
    };
  }

  pickRandomName = () => {
    var names = [
      'Alice',
      'Alexa',
      'Parul',
      'Mona',
      'Garg',
      'Harshit',
      'Gaurav',
    ];

    var nameIndex = Math.floor(Math.random() * names.length);

    this.setState({
      name: names[nameIndex],
    });
  };
  pickRandomColor = () => {
    var colors = ['Yellow', 'Green', 'Pink', 'blue', 'Red'];

    var colorIndex = Math.floor(Math.random() * colors.length);

    this.setState({
      color: colors[colorIndex],
    });
  };
  pickRandomBackgroundColor = () => {
    var colors = ['lime', 'skyblue', 'orange', 'purple', 'Red'];

    var colorIndex = Math.floor(Math.random() * colors.length);

    this.setState({
      backgroundColor: colors[colorIndex],
    });
  };
  pickRandomSubject = () => {
    var Subjects = ['Math', 'science', 'History', 'computer'];

    var SubjectIndex = Math.floor(Math.random() * Subjects.length);

    this.setState({
      subject: Subjects[SubjectIndex],
    });
  };
  render() {
    // const style = {
    //   color: this.style.color,
    //   backgroundColor: this.style.backgroundColor,
    // };

    return (
      <div>
        <div className="details" >
          Name:{this.state.name}
          <br />
          Subject:{this.state.subject}
        </div>
        <button className="button" onClick={this.pickRandomName}>
          Change Student Name
        </button>
        <button className="button" onClick={this.pickRandomColor}>
          Change Text Color
        </button>
        <button className="button" onClick={this.pickRandomBackgroundColor}>
          Change Background Color
        </button>
        <button className="button" onClick={this.pickRandomSubject}>
          Change Subject
        </button>
      </div>
    );
  }
}
export default DetailBox