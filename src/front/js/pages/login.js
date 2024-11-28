import React, { useState, useContext } from "react";

import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const addAll = async (e) => {
        e.preventDefault()
        let userNew = {
            name: name,
            email: email,
            password: password

        }
        let resp = await actions.login(userNew)
        HTMLFormControlsCollection.log(resp)
    }
    return (
        <div className="container">
			<h1>Signup</h1>
			<form>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Name</label>
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
				</div>
				<button type="button" onClick={(e)=>add(e)} className="btn btn-primary">Submit</button>
			</form>
		</div>
    );
}