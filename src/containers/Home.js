import React, { Component } from 'react';
import * as firebaseAPI from '../firebase/firebaseAPI'
import * as _ from 'lodash'

class Home extends Component {    

    constructor(){
        super()
        this.state = {}
    }

    componentWillMount(){
        firebaseAPI.getStreams().then((data)=>{this.setState({streams: data})})
    }

    listStreams = () => {
        if(this.state.streams) {
           return _.map(this.state.streams, (s)=>{
                return <div>{s.createTime}</div> 
            })
        }
    }

    render()
    {
        return (
            <div>
                {this.listStreams()}
            </div>
        )
    }
}

export default Home;
