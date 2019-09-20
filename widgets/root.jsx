import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

const Root = (props) => {
    const tab1 = {title: "one", content: "I am the first" };
    const tab2 = {title: "two", content: "I am the second" };
    const tab3 = {title: "three", content: "I am the third" };
    const tabs = [tab1,tab2, tab3];
    return (

        <>
        <Clock />
        <Tabs tabs={tabs}/>
        <Weather />
        </>
    );
     
};

export default Root;
