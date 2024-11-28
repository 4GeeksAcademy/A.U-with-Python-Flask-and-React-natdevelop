// import React, { useState } from "react"
// import {Link , useNavigate} from "react-router-dom"

// export const Signup = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [msg, setMsg] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const is_active = "True";
//     const submit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await fetch(`${process.env.BACKEND_URL}api/signup`,{
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ name, email, password, is_active}),
//             });
//             const data = await response.json();
//             if (!response.ok) {
//                 setMsg(data.msg || "Error al registrar");
//                 return;
//             }
//             setMsg("User created successfully! Redirecting to login...");
//             setTimeout(() => {
//                 navigate("/login");
//             }, 2000);
//         } catch (error) {
//             setMsg("Error inesperado al registrar");
//         }
//     }
//     return (
//         <div className="container">
//             {msg && <p style={{ color: msg.includes("success") ? "green" : "red" }}>{msg}</p>}
//             <main className="form-signin w-100 m-auto">
//                 <form onSubmit={submit}>

//                     <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//                     <div className="form-floating">
//                         <input 
//                         type="name" 
//                         className="form-control" 
//                         id="floatingName" 
//                         placeholder="name"
//                         value={name} 
//                         onChange={(eve)=>setName(eve.target.value)}
//                         />
//                         <label htmlFor="floatingName">Name</label>
//                     </div>

//                     <div className="form-floating">
//                         <input 
//                         type="email" 
//                         className="form-control" 
//                         id="floatingInput" 
//                         placeholder="name@example.com"
//                         value={email} 
//                         onChange={(eve)=>setEmail(eve.target.value)}
//                         />
//                         <label htmlFor="floatingInput">Email address</label>
//                     </div>
//                     <div className="form-floating">
//                     <input 
//                         type="text" 
//                         className="form-control" 
//                         id="floatingPassword"
//                         placeholder="password"
//                         value={password} 
//                         onChange={(eve)=>setPassword(eve.target.value)}
//                         />
//                         <label htmlFor="floatingPassword">Password</label>
//                     </div>

//                     <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
//                     <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
//                 </form>
//             </main>
//         </div>
//     )
// };
