// function Login({ color, text }) {
//     color = "yellow";
//     return <div>
//         <label htmlFor="">Enter Your E-Mail</label><br />
//         <input type="text" name="" id="" placeholder="Email here" /><br />
//         <label htmlFor="">Enter Your Password</label><br />
//         <input type="password" name="" id="" placeholder="password" /><br />
//         <input type="submit" value={text} style={{ backgroundColor: color }} /><br />
//         <button onClick={() => { color = "pink"; console.log(color); }}>click me to change the color</button>
//     </div >
// }

import { Component } from "react";

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.color = props.color;
        this.text = props.text;
    }

    render() {
        return <div>
            <label htmlFor="">Enter Your E-Mail</label><br />
            <input type="text" name="" id="" placeholder="Email here" /><br />
            <label htmlFor="">Enter Your Password</label><br />
            <input type="password" name="" id="" placeholder="password" /><br />
            <input type="submit" value={this.text} style={{ backgroundColor: this.color }} /><br />
            <button onClick={() => { this.color = "pink"; this.setState({ color: this.color, text: this.text }); console.log(this.color); }}>click me to change the color</button>
        </div >
    }
}

export default Login;