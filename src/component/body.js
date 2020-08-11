import React, {Component} from 'react';
import App from '../App';

class Body extends Component {

    state = {
        time: null, 
        principal: null, 
        rate: null, 
        times_applied: null, 
        simple: null,
        compound: null,
        count: 0,
    };

    updatePrincipal = (e) => {
        e.preventDefault();
        this.setState({principal: e.target.value});
    }

    updateTime = (e) => {
        e.preventDefault();
        this.setState({time: e.target.value});
    }

    updateRate = (e) => {
        e.preventDefault();
        this.setState({rate: (e.target.value/100)});
    }

    updateTimesApplied = (e) => {
        e.preventDefault();
        this.setState({times_applied: e.target.value});
    }

    updateSimpleInterest = (e) => {
        e.preventDefault();
        this.setState({simple: e.target.value});
    }

    updateCompoundInterest = (e) => {
        e.preventDefault();
        this.setState({compound: e.target.value});
    }

    resetValues = (e) => {
       document.getElementById("myForm").reset();
        e.preventDefault();
        this.setState(
            {   time: null, 
                principal: null, 
                rate: null, 
                times_applied: null, 
                simple: null,
                compound: null,
                count: 0,
            }
            
            );
    }

    calculateSimpleInterest = () => { 
        const finalSimpleAmount = this.state.principal * (1 + this.state.rate * this.state.time);
        this.setState({simple: finalSimpleAmount});
    }

    calculateCompoundInterest = () => { 
        let finalCompoundAmount = (1 + ((this.state.rate) / this.state.times_applied));
        finalCompoundAmount = Math.pow(finalCompoundAmount, this.state.times_applied * this.state.time)
        finalCompoundAmount = this.state.principal * finalCompoundAmount
        this.setState({compound: finalCompoundAmount});
    }

    
    calculateInterest = (e) => {
        let count = (1 + this.state.count);
        e.preventDefault();
        this.calculateSimpleInterest();
        this.calculateCompoundInterest();

    }


    render () {
        return (
            <div>

            <div className="form">
                <form id="myForm"> 
                    <p>
                        Enter principal amount ($): <input value= {this.state.principal} onChange={this.updatePrincipal}/>
                    </p> 
                
                    <p>
                        Enter interest rate (%): <input onChange={this.updateRate}/>
                    </p>
                
                    <p>
                        Enter number of time periods elapsed (years): <input onChange={this.updateTime}/>
                    </p>
                
                    <p>
                        Enter number of times compounded (compound interest only): <input onChange={this.updateTimesApplied}/>
                    </p>

                    <p>
                        Calculated Simple Interest ($): <input value= {this.state.simple} />
                    </p>

                    <p>
                        Calculated Compound Interest ($): <input value= {this.state.compound}/>
                    </p>
                    <div className="buttons">
                    <p>
                        <button onClick={this.calculateInterest}> Calculate</button>
                    
                    </p>
                    
                    <p>
                        <button onClick={this.resetValues}> Reset</button>
                    </p>
                    </div>


                </form>
               </div> 
            </div>
        )
    }
}

export default Body;
