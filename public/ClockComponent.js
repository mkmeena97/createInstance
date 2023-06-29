import React from "react";
class Clock extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        currentTime: new Date().toLocaleTimeString()
      };
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.updateTime(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    updateTime() {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    }
  
    render() {
      return (
        <div>
          <p>{this.state.currentTime}</p>
        </div>
      );
    }
  }
  
  export default Clock;