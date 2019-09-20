import React from 'react';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabIndex: 0,
        };
    }

    handleClick(idx){
        this.setState({ tabIndex: idx })
    }

    render(){
        const titles = this.props.tabs.map((tab, idx) => {
           return (
           <ul>
                   <h1 key={tab.title} onClick={this.handleClick.bind(this, idx)}>{tab.title}</h1>
            </ul>
            
            );
        });
        return(
            <div className="tabs">
           <ul>{titles}</ul>
           <article>{this.props.tabs[this.state.tabIndex].content}</article>
            </div>
        );
    }

}


export default Tabs;