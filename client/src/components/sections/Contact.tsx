import { Button } from '../ui/button'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    emailjs.init('cb53DCxDpoPkU7zQa')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      await emailjs.send(
        'service_5kejp0y',
        'template_55lqzrm',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'cb53DCxDpoPkU7zQa'
      )
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Form fields */}
          <motion.div variants={itemVariants}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-white/10 rounded-lg border border-black text-white"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-white/10 rounded-lg border border-black text-white"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full p-3 bg-white/10 rounded-lg border border-black text-white"
              required
            />
          </motion.div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
          {status && (
            <p
              className={`text-center ${
                status.includes('success') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
