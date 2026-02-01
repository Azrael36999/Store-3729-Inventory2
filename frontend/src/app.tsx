import React, { useState } from "react";

export default function App() {
const [u,setU]=useState("");
const [p,setP]=useState("");

async function login(){
const res = await fetch(import.meta.env.VITE_API_URL+"/auth/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username:u,password:p})
});
alert(res.ok?"Logged in":"Login failed");
}

return (
<div style={{padding:40,fontFamily:"system-ui"}}>
<h2>Store 3729 Inventory</h2>
<input placeholder="Username" onChange={e=>setU(e.target.value)} /><br/><br/>
<input placeholder="Password" type="password" onChange={e=>setP(e.target.value)} /><br/><br/>
<button onClick={login}>Login</button>
</div>
);
}
