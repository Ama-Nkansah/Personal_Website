import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#2b3336]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Have a question, idea, or just want to say hi? I’d love to hear from
          you!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-[#dfe9ec] dark:bg-[#353c3e] p-6 rounded-2xl shadow-md"
          >
            <Mail className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400 mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
            <a
              href="mailto:amankansahstate@gmail.com"
              className="text-gray-600 dark:text-gray-300 mt-2 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
            >
              amankansahstate@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-[#dfe9ec] dark:bg-[#353c3e] p-6 rounded-2xl shadow-md"
          >
            <Linkedin className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400 mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/amankansah" // replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 mt-2 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
            >
              Connect with me
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-[#dfe9ec] dark:bg-[#353c3e] p-6 rounded-2xl shadow-md"
          >
            <MapPin className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400 mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Kumasi, Ghana</p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          action="/contact"
          method="POST"
          className="mt-16 grid gap-6 max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="placeholder-gray-900 dark:placeholder-gray-100 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-[#dfe9ec] dark:bg-[#353c3e] dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="placeholder-gray-900 dark:placeholder-gray-100 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-[#dfe9ec] dark:bg-[#353c3e] dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="placeholder-gray-900 dark:placeholder-gray-100 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-[#dfe9ec] dark:bg-[#353c3e] dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-fuchsia-600 text-white font-semibold hover:bg-fuchsia-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
