import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    alert("Thanks, " + form.name + "! Your message has been received.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Email: odeyarrenukaradhya@gmail.com • Phone: +91-7795561563 • Location: Tiptur
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring ${
                errors.name ? "border-red-400" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring ${
                errors.email ? "border-red-400" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring ${
                errors.message ? "border-red-400" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
