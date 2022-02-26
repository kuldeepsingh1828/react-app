import ReactDOM from 'react-dom';
import Login from './components/Login';

let loginText= "Login ME";
let loginColor="green";
let registerText= "Register ME";
let registerColor="red";
ReactDOM.render(<div><Login text={loginText} color={loginColor} /><br /><Login color={registerColor} text={registerText} /></div>, document.getElementById("root"));