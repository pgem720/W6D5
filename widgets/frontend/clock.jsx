import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            time: new Date(), 
            test: "hello"
        };

        this.tick.bind(this);
        // this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }


    tick(){

        this.setState({time: new Date()});
    }

    componentDidMount() {

        let that = this;
        var id = setInterval(that.tick.bind(that), 1000);
        that.id = id;

    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

    render(){
        
        let hour = this.state.time.getHours();
        let minute = this.state.time.getMinutes();
        let second = this.state.time.getSeconds();
        let date = this.state.time.toDateString();
        let day = this.state.time.getDate();
        let month = this.state.time.getMonth();
        let year = this.state.time.getFullYear();
        
        return (
            <div className ="clock">
                <h1>Clock</h1>
                <div className="time">
                    <h1>Time:</h1>
                    <h1>{hour}:{minute}:{second}</h1>
                </div>

                <div className="date">
                    <h1>Date:</h1>
                    <h1>{date}</h1>
                </div>
                
            </div>
        );
    }
}

export default Clock;