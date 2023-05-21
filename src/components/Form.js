import React from 'react';
export default class Form extends Component{
    constructor(){
        super()
        this.stste={
            user:null,
            password:null
        }
    }
    submit(){
        console.warn(this.state)
    }
    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <input type='text'></input>
            </div>
        )
    }
} 
