import React,{Component} from 'react';
class Subscribe extends Component{
    constructor(){
        super();
        this.state={
            message:"Subscrib to Our Channel"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thankyou For Subscribing"})
    }
    
render(){
    return (
        <div>
    <h1>
        {this.state.message}
    </h1>
    <button onClick={() => this.changeMessage() }>Subscribe</button>
    </div>
    )}
}
export default Subscribe;