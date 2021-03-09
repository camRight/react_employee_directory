import Button from "../Components/Button/Button";
import Table from "../Components/Table/Table";
import React, { Component } from "react";
import API from "../utils/API";

// es6 notation this is a state
class  Home extends Component {
    state = {
        arr: []
    }
    componentDidMount(){
        API.getRandomPeople().then(response => {
            this.setState({
                arr: response.data.results
            })
        })
    }
    // u'd right constructor here if there are variables.
    render (){
        return (
            <>
                < Button color="success" text="ABC Desc" />
                <Button color="success" text="ABC Asc" />
                <Table arr={this.state.arr} />
            </>
        )
    }
    
}

export default Home;