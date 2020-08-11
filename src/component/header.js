import React, {Component} from 'react';
import App from '../App';
import image91 from './image91.png';

class Header extends Component {

    state = {count: 0}

    componentDidMount() {
        this.setState({count: this.state.count + 1})
        //Changes the state whenever the program starts up
        this.counter()       
    }

    counter = () => {
        setInterval(() => {this.setState({count: this.state.count + 1})}, 1000); 
        //This is a counter that starts when you run the app
    }

    render () {
        return (
            <div>

                <div className="Header"><div><img className="Logo" src={image91}></img></div>Interest Calculator</div>
                <div className="counter">  You've earned: ${this.state.count}.00 </div>
            </div>
        )
    }
}

export default Header;