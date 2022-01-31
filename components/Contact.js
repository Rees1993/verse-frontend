const Contact = () => {
  return (
    <section className="mx-auto mt-34 max-w-3xl font-roboto">
      <form action="#">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-error">
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full rounded-md border border-error py-3 pl-4 text-sm shadow-sm placeholder:text-error focus:border-error focus:ring-error"
                placeholder="john.doe@mysite.com"
              />
            </div>
            <span className="mt-2 inline-block text-sm text-error">* Invalid Email Address</span>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm text-black">
              Your Name
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                className=" border-gray block w-full rounded-md border py-3 px-4 text-sm shadow-sm placeholder:text-slate-dark focus:border-slate focus:ring-slate-dark "
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="topic" className="block text-sm text-black">
              Choose a topic
            </label>
            <select
              id="topic"
              name="topic"
              autoComplete="topic"
              className="border-gray focus:border-gray mt-2 block w-full rounded-md border py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-slate-dark"
            >
              <option value="">Please Select</option>
              <option>Product & MVP Development</option>
              <option>Content Delivery & Campaign Management</option>
              <option>Design & UX</option>
              <option>Best in Breed Development</option>
              <option>Support & Optimisation</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-black">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows="4"
                className=" border-gray block w-full rounded-md border py-3 px-4 text-sm shadow-sm placeholder:text-slate-dark focus:border-slate-dark focus:ring-slate-dark"
                placeholder="Enter a message..."
              />
            </div>
          </div>

          <button className="grow-1 justify-content mx-auto mt-[50px] flex bg-primary px-9 py-3 font-leiko text-white transition-colors duration-200 hover:bg-primary-hovered">
            Button Text
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
