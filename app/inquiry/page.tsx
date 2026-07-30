'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function InquiryPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mjgnlrar', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError('Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-6">
        <div className="text-center max-w-[500px]">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--text)] mb-4">Thank You!</h1>
          <p className="text-[17px] text-[var(--text-secondary)]">
            Your initial request has been submitted. I will personally review it and get back to you within 48 hours.
          </p>
          <Link href="/" className="inline-block mt-8 px-8 py-3.5 rounded-[50px] text-sm font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-secondary)]">
      <div className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-9">
          <span className="font-serif text-xl font-bold text-[var(--primary)] tracking-[0.5px]">
            Eastern<span className="text-[var(--accent)]">Flow</span>
          </span>
          <Link href="/" className="inline-block px-7 py-2.5 rounded-[50px] text-sm font-semibold text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
            &larr; Back
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--text)] mb-3">Initial Request</h1>
          <p className="text-[17px] text-[var(--text-secondary)] max-w-[540px] mx-auto">
            Tell me about your property. I&apos;ll review everything personally and get back to you within 48 hours with a tailored quote and next steps.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white rounded-xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]" onSubmit={handleSubmit}>
          {/* Contact Info */}
          <div className="mb-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <input type="text" name="first_name" placeholder="First Name" required
                className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)]" />
              <input type="text" name="last_name" placeholder="Last Name" required
                className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)]" />
            </div>
            <input type="tel" name="phone" placeholder="Phone Number" required
              className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)] mt-3.5" />
            <input type="email" name="email" placeholder="Email" required
              className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)] mt-3.5" />
          </div>

          {/* Address */}
          <div className="mb-7">
            <h2 className="font-serif text-xl text-[var(--text)] mb-2 font-semibold">Address</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-3">Be sure your address can be located on Google Maps correctly.</p>
            <textarea name="address" placeholder="Address" rows={3} required
              className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)] resize-vertical"></textarea>
          </div>

          {/* Facing */}
          <div className="mb-7">
            <h2 className="font-serif text-xl text-[var(--text)] mb-2 font-semibold">&ldquo;Facing&rdquo; of Your Property</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              Please show or label which way your property is looking out to street-wise. When you look out a certain window, what street do you see?
            </p>
            <input type="text" name="facing" placeholder="Describe or upload a diagram below"
              className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)]" />
          </div>

          {/* Floor Plan */}
          <div className="mb-7">
            <h2 className="font-serif text-xl text-[var(--text)] mb-2 font-semibold">Exact Floor Plan</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              Hand drawn or poor floor plans are likely not accepted due to low accuracy rate. We calculate based off of your exact property build. Poor data will result in poor accuracy.
            </p>
            <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3 cursor-pointer">
              <input type="checkbox" name="show_placement" value="yes" className="accent-[var(--primary)]" />
              <span>Ideally show how things are placed</span>
            </label>
            <textarea name="floor_plan_notes" placeholder="Describe your floor plan or paste a link to your floor plan file" rows={3}
              className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)] resize-vertical"></textarea>
          </div>

          {/* Notes */}
          <div className="mb-7">
            <textarea name="notes" placeholder="Any other general notes?" rows={4}
              className="w-full px-5 py-3.5 border border-[var(--border)] rounded-lg text-[15px] text-[var(--text)] bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-3 focus:ring-[rgba(45,74,62,0.12)] resize-vertical"></textarea>
          </div>

          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

          {/* Submit */}
          <button type="submit"
            className="w-full px-10 py-4 rounded-[50px] text-base font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,74,62,0.3)] transition-all">
            Send
          </button>
          <p className="text-center text-[13px] text-[var(--text-light)] mt-4">
            I personally review every inquiry. You&apos;ll hear back within 48 hours.
          </p>
        </form>
      </div>
    </div>
  )
}
