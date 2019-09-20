import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        };
    }

    render() {
        return(
            <div className="weather">

                <h1>Weather</h1>
            </div>

        );

       
    }



}


export default Weather;