import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
    constructor(props) { // this constructor initializes the default state
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {     // inserting this method callAPI() will fetch the data from the API 
        // and store the response on this.state.apiResponse
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {   // inserting this react lifecycle method called
        // componentDidMount(), that will execute the callAPI() method
        // after the component mounts
        this.callAPI();
    }

    // display a paragraph on our client page, with text retrieved from the API
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Film Search</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
