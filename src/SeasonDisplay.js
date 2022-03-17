import './SeasonDisplay.css';
import React from 'react';

// Config object
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!", // or 'Let\'s hit the beach!'
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is cold!',
        iconName: 'snowflake'
    }
};

// Helper function
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }

}

// Functional Component
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    //Curly brackets {} for javascript variable
    return (
        // {`${iconName} icon`}(es2015 template string), done to be able to pass value of const iconName as well as className
        // <h1>{text}</h1>, to make text big n bold
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />  
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div> 
    );
};

export default SeasonDisplay;