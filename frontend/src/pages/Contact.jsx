import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react"

export default function Contact() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    if (
      !formRef.current ||
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setError(true)
      setLoading(false)
      console.error("Missing EmailJS config or form reference!")
      return
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
      (result) => {
        setLoading(false)
        setSuccess(true)

        if (formRef.current) {
          formRef.current.reset()
        }

        setTimeout(() => setSuccess(false), 5000)
      },
      (error) => {
        setLoading(false)
        setError(true)
        console.error("EmailJS error:", error.text)
        }
      )
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Let's Start a <span className="text-fuchsia-600 dark:text-fuchsia-400">Conversation</span>
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Whether you have a project in mind or just want to chat, I'm all ears.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          {/* --- LEFT SIDE: Contact Info --- */}
          <div className="md:col-span-2 bg-fuchsia-300 p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-fuchsia-400 opacity-20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl text-black font-bold mb-6">Contact Information</h3>
              <p className="text-black mb-8 leading-relaxed">
                Fill out the form and I will get back to you within 24 hours.
              </p>

              <div className="space-y-6 text-black">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>amankansahstate@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <a href="https://linkedin.com/in/amankansah" target="_blank" className="hover:underline">
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Kumasi, Ghana</span>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <p className="text-sm text-black">Connect with me on social media</p>
            </div>
          </div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="md:col-span-3 p-10 bg-white dark:bg-gray-900">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Name"
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-fuchsia-300 hover:bg-fuchsia-400 text-black font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-fuchsia-500/30"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" /> Sending...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
