import { useRef } from "react";
function Login() {
    const email = useRef()
    const password = useRef()
    return (
        <>
            <div className="accountbg"></div>
            <div className="home-btn d-none d-sm-block">
                <a href="/" className="text-white"><i className="fa-solid fa-house"></i></a>
            </div>
            <div className="wrapper-page">
                <div className="card card-pages shadow-none">
                    <div className="card-body">
                        <div className="text-center m-t-0 m-b-15">
                            <a href="/" className="logo logo-admin">
                                <h1>TCTI</h1>
                            </a>
                        </div>
                        <h5 className="font-18 text-center">
                        </h5>

                        <form className="form-horizontal m-t-30 el_form" onSubmit={(e) => {
                            e.preventDefault()
                            fetch('http://tcti.uz/api/login', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ email: email.current.value, password: password.current.value })
                            }).then(function (res) { return res.json(); })
                                .then(function (data) {
                                    window.localStorage.setItem('token', JSON.stringify(data))
                                    window.location = "/admin/yangilik"
                                })
                        }}>


                            <div className="form-group">
                                <div className="col-12">
                                    <label>Email</label>
                                    <input ref={email} className="form-control email_input" type="email" required name="email" placeholder="Email" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-12">
                                    <label>Password</label>
                                    <input ref={password} className="form-control password_input" type="password" required name="password" placeholder="Password" />
                                </div>
                            </div>

                            <div className="form-group text-center m-t-20">
                                <div className="col-12">
                                    <button className="btn btn-primary btn-block btn-lg waves-effect waves-light" type="submit">Login</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
