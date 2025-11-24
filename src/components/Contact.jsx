


const Contact = () => {
  return (
    <div id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact <span className="text-purple">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-900/40 border border-purple rounded-2xl p-8 shadow-lg hover:shadow-purple/40">
          <p className="text-gray-300 text-center mb-6">
            Reach out for , collaborations , freelance and any frontend-related
            work!
          </p>

          <form
            action="https://formspree.io/f/mkgenkdd"
            method="POST"
            className="space-y-5"
          >
            {/* Name */}

            <div>
              <label className="block text-gray-200 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-transparent border border-purple rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-white transition"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-200 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-transparent border border-purple rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-white transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-200 mb-1">Message</label>
              <textarea
                rows="5"
                name="message"
                className="w-full bg-transparent border border-purple rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-white transition"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple text-white font-semibold px-6 py-3 rounded-xl border border-purple hover:bg-white hover:text-purple transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Social Links */}
          <div className="text-center mt-8 text-gray-300">
            <p>You can also reach me via:</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/shalinib-js"
                target="_blank"
                className="px-4 py-2 bg-white text-purple rounded-xl font-medium border border-purple hover:bg-purple hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shalinib-js/"
                target="_blank"
                className="px-4 py-2 bg-purple text-white rounded-xl font-medium border border-purple hover:bg-white hover:text-purple transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
