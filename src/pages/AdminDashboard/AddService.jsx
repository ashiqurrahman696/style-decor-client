const AddService = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-4xl font-bold">Add Decoration Service</h2>
            <form className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="label">Service Name</label>
                    <input type="text" className="input w-full" placeholder="Service Name" />
                </div>
                <div>
                    <label className="label">Cost (BDT)</label>
                    <input type="text" className="input w-full" placeholder="Cost (BDT)" />
                </div>
                <div>
                    <label className="label">Unit</label>
                    <input type="text" className="input w-full" placeholder="Unit" />
                </div>
                <div>
                    <label className="label">Service Category</label>
                    <input type="text" className="input w-full" placeholder="Service Category" />
                </div>
                <div>
                    <label className="label">Description</label>
                    <textarea className="textarea w-full resize-none" rows={5} placeholder="Description" />
                </div>
                <div className="col-span-full">
                    <button className="btn btn-primary text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;