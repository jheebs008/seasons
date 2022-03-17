import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//const App = () => {
//    window.navigator.geolocation.getCurrentPosition(
//        (position) => console.log(position),
//        (err) => console.log(err)
//    );
//
//    return <div>Latitude: </div>;
//};

// Class based component
class App extends React.Component {
    //constructor(props) {
    //    super(props);

        // Initializing the state and errorMessage
        // Should be done like so, if using a constructor
        // and doing some initial data loading in constructor
        // like done below
        //this.state = { lat: null, errorMessage: '' };

        // One-time location query from user
        // Can be done in the constructor but best to do in the
        // componentDidMount to keep code organized for others
        //window.navigator.geolocation.getCurrentPosition(
        //    //(position) => console.log(position) (((To see Console in 'Inspect')))
        //    //(err) => console.log(err)
        //    (position) => {
        //        // we called setState!!!!
        //        this.setState({ lat: position.coords.latitude });
        //    },
        //    (err) => {
        //        this.setState({ errorMessage: err.message });
        //    }
        //);  
    //}

    // Instance property
    // Declaring state
    state = { lat: null, errorMessage: '' };

    // Data loading done in componentDidMount method (lifecycle method)
    // Called once
    // componentDidMount utilised everytime a component gets updated
    // componentWillUnmount done when we want to do cleanup
    // Other lifecycle methods rarely used: shouldComponentUpdate,
    // getDerivedStateFromProps and getSnapshotBeforeUpdate 
    componentDidMount () {
        // setState called to update state
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );  
    }

    // Helper method
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        
        return <Spinner message="Please accept location request" />;

    }

    // Always going to have a red border, although border not implemented
    // Actual render method, React says we have to define render method!!
    render() {  
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));