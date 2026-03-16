const Newsletter = () => {
    return (
        <div>
            <div className="card bg-[url(https://i.ibb.co.com/zVzQmgJR/La-Importancia-de-la-Decoracion-en-un-Evento-Corporativo.jpg)] bg-cover bg-center">
                <div className="bg-black/40 inset-0">
                    <div className="card-body space-y-5 items-center py-20 text-white">
                        <h1 className="text-center font-semibold text-4xl">Subscribe to our Newsletter</h1>
                        <form className="w-full max-w-xl join">
                            <input className="input join-item w-full outline-none text-black" placeholder="Email" />
                            <button className="btn join-item btn-primary text-black">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;