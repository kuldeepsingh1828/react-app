import { useState } from 'react';
function Login({ color, text }) {

    const [data, setData] = useState({
        name: '',
        password: '',
        cpassword: '',
        email: '',
        hidden: "none"
    });

    const { name, email, password, cpassword, hidden } = data;

    const changeHandler = function (event) {
        let field = event.target.name;
        let value = event.target.value;
        setData((state) => ({ ...state, [field]: value }));
    }
    const submitHandler = function () {
        setData((state) => ({ ...state, hidden: "" }));
    }
    return <>
        <input
            type="text"
            placeholder="enter some name"
            name="name"
            value={name}
            onChange={changeHandler} />

        <input
            type="text"
            placeholder="enter some password"
            name="password"
            value={password}
            onChange={changeHandler} />

        <input
            type="text"
            placeholder="enter password again"
            name="cpassword"
            value={cpassword}
            onChange={changeHandler} />

        <input
            type="text"
            placeholder="enter some email"
            name="email"
            value={email}
            onChange={changeHandler} />
        <input
            onClick={submitHandler}
            type="submit"
            value="show data"
        />
        <div style={{ display: hidden }}>
            name:{name}<br />
            Email:{email}<br />
            Password:{password}<br />
        </div>
    </>
}
export default Login;