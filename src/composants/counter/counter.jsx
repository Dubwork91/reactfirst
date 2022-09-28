import { Component } from 'react';
import "./style.css";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      somme: 0,
    };

   this.cl = "redColor";
    
  }

 incrementer = ()=>{
  let c = this.state.count;
  c++;
  this.setState({ count: c });
  this.changeColor();
  } 
  
  decrementer = ()=>{
  let c = this.state.count;
  c--;
  this.setState({ count: c });
  this.changeColor();
  }

  reset = () => {
    let c = this.state.count;
    c = 0;
    this.setState({ count: c });
    this.changeColor();
  }

  changeColor = ()=>{
   let {count } = this.state;
    if(count>0 && count<=10){
      this.cl = "redColor";
    }else if(count>10){
      this.cl = "greenColor";
    }else if(count<0){
      this.cl = "blueColor";
    }
  }

  render() {
    const {children } = this.props;
    
    return (
      <div>
        <h1>{children}</h1>
        <h2 className={this.cl} ><span style={{ color: "black" }}>counter: </span> {this.state.count}</h2>
        <button
          onClick={this.decrementer}
        >
          decrementer
        </button>
        <button
          onClick={this.reset}
        >
          reset
        </button>
        <button
          onClick={this.incrementer}
        >
          incrementer
        </button>
      </div>
    )
  }
}