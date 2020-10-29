import React,{Component} from 'react';
class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:1,
            message:""
        }
    }
    incrementCounter(){
        this.setState({
            counter:this.state.counter+1
        },
()=>{
            if(this.state.counter == 10){
                this.setState({
                   message:"RACHED 10"
            });
            }
    })
    }
    
render(){
    return (
        <div>
    <h1>
        {this.state.counter}
       
    </h1>
    <p> {this.state.message}</p>
    <button onClick={() => this.incrementCounter() }>Subscribe</button>
    </div>
    )}
}
export default Counter;