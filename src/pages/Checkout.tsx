export default function Checkout() {
  return (
    <main className="w-full bg-black text-white min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          EVENT CHECKOUT
        </h1>

        {/* Summary Card */}
        <div className="border border-white/10 bg-white/5 rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold tracking-wide mb-4">
            Deployment Summary
          </h2>

          <div className="flex flex-col gap-4 text-sm opacity-80">
            <p><span className="font-semibold opacity-100">Package:</span> Selected event deployment tier</p>
            <p><span className="font-semibold opacity-100">Date:</span> Your chosen event date</p>
            <p><span className="font-semibold opacity-100">Location:</span> Event location provided</p>
            <p><span className="font-semibold opacity-100">Operators:</span> Number of operators required</p>
            <p><span className="font-semibold opacity-100">Radios:</span> Quantity requested</p>
          </div>
        </div>

        {/* Checkout Form */}
        <form className="border border-white/10 bg-white/5 rounded-lg p-8 flex flex-col gap-6">

          <h2 className="text-xl font-semibold tracking-wide mb-2">
            Contact Details
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide opacity-80">NAME</label>
            <input
              type="text"
              className="bg-black/40 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide opacity-80">EMAIL</label>
            <input
              type="email"
              className="bg-black/40 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide opacity-80">PHONE</label>
            <input
              type="text"
              className="bg-black/40 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide opacity-80">ADDITIONAL NOTES</label>
            <textarea
              rows={4}
              className="bg-black/40 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-green-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-green-500 text-black font-semibold tracking-wide rounded-md hover:bg-green-400 w-fit"
          >
            CONFIRM REQUEST
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-xs opacity-50 tracking-widest mt-12">
          A member of the GO COMMS operations team will contact you to confirm your deployment.
        </p>
      </div>
    </main>
  );
}
