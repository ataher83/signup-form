import { useState } from "react";

const Components = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log({name: name, email:email, password:password})


    const handleSubmit = (event)=> {
        event.preventDefault();   // ডিফ্লট ইভেন্ট বন্ধ করে।  রিলোড নেয়া বন্ধ করবে 
        // console.log('submit');
        const user = {name:name, email:email, password:password}
        console.log(user);
    }

    return (
        <div className="hero min-h-screen bg-purple-500">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-center pt-5 text-3xl font-bold text-violet-600 ">Signup Form</h2>

                <form 
                onSubmit={(event)=> handleSubmit(event)}
                className="card-body">

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input 
                    // onChange={(event)=> console.log(event.target.value)} 
                    onChange={(event)=> setName(event.target.value)} 
                    type="text" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                    onChange={(event)=> setEmail(event.target.value)} 
                    type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input 
                    onChange={(event)=> setPassword(event.target.value)} 
                    type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>

                    <div className="ml-[70%]">
                    <button className="btn bg-violet-600 text-white">Signup</button>
                    </div>

                </form>
                
                </div>
            {/* </div> */}
        </div>
        
    );
};

export default Components;