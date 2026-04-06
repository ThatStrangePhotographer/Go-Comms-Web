export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT: Contact Form */}
          <form className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wide opacity-80">NAME</label>
              <input
                type="text"
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wide opacity-80">EMAIL</label>
              <input
                type="email"
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wide opacity-80">MESSAGE</label>
              <textarea
                rows={5}
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-black font-semibold tracking-wide rounded-md hover:bg-green-400 w-fit"
            >
              SEND MESSAGE
            </button>
          </form>

          {/* RIGHT: Contact Details */}
          <div className="flex flex-col gap-8">

            <div>
              <h3 className="text-lg font-semibold tracking-widest mb-2">
                OPERATIONS
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                For deployment requests, operational support, or urgent comms requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-widest mb-2">
                EMAIL
              </h3>
              <p className="text-sm opacity-80">ops@gocomms.uk</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-widest mb-2">
                PHONE
              </h3>
              <p className="text-sm opacity-80">+44 0000 000000</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-widest mb-2">
                LOCATION
              </h3>
              <p className="text-sm opacity-80">
                Medway, Kent  
                United Kingdom
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
