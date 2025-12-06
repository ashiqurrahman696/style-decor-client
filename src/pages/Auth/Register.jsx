const Register = () => {
    return (
        <div className="p-4 min-h-screen flex justify-center items-center">
            <div className="card bg-base-300 w-full max-w-sm">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-3xl">Register</h2>
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Name" />
                        <label className="label">Image</label>
                        <input type="file" className="file-input w-full" />
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;