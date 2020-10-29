import React,{Component} from 'react';
import './student.css';
class Student extends Component{
    constructor()
    {
        super();
        this.state={
            score:0,
            success:false,
            failure:false,
        }
    }
    componentDidMount() {
        this.setState({
            score:this.props.scores
        });
    }
    incScore()
    {
        this.setState({
            score:this.state.score+1
        },
        ()=>{
            if(this.state.score>=350)
            {
                this.setState({success:true});
                this.setState({failure:false});
            }
            if(this.state.score>=340 && this.state.score<350)
            {
                this.setState({success:false});
                this.setState({failure:false});
            }
        });  
    }
    subScore()
    { this.setState({
        score:this.state.score-1
    },
    ()=>{
        if(this.state.score<340)
        {
            this.setState({failure:true});
        }
        if(this.state.score<350)
        {
            this.setState({success:false});
        }
        if(this.state.score>=340 && this.state.score<350)
        {
            this.setState({success:false});
            this.setState({failure:false});
        }       
    }); 

    }
render(){
    const isSuccess=this.state.success;
    const isFailure=this.state.failure;
    let text;
    if(isSuccess){
        text=<span>Success</span>
    }
    else
    {
        text='';
    }
    let text1;
    if(isFailure)
    {text1=<span>Failed</span>}
    else{
        text1='';
    }

    return (
        <div className="student">
            <div className="left">
    <h2 className="studentName">{this.props.name}
    <button className="addScore" onClick={() => this.incScore()}>+</button>
    <button className="minusScore" onClick={() => this.subScore()}>-</button></h2>
    <p className="universityName">{this.props.university} {text} {text1}</p>
            </div>
            <div className="right">
    <div className="score">{this.state.score}</div>
            </div>
        </div>
 )
}
}
export default Student;