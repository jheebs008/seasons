import React from 'react';

// props needed to receive props object
const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">
                {props.message }
            </div>
        </div>
    );
}

// To provide default message in the Spinner, if props.message isn't utilized
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;