function Login({ color, text }) {
    color = "yellow";
    return <div>
        <label htmlFor="">Enter Your E-Mail</label><br />
        <input type="text" name="" id="" placeholder="Email here" /><br />
        <label htmlFor="">Enter Your Password</label><br />
        <input type="password" name="" id="" placeholder="password" /><br />
        <input type="submit" value={text} style={{ backgroundColor: color }} /><br />
        <button onClick={() => { color = "pink"; console.log(color); }}>click me to change the color</button>
    </div >
}
export default Login;