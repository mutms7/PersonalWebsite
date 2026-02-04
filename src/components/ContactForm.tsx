import React, { useState } from 'react'

export default function ContactForm(){
  const [name,setName] = useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle')

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setStatus('sending')
    const payload = {name,email,message,website:''} // honeypot website must be empty
    try{
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
      const data = await res.json()
      if(res.ok && data.success){
        setStatus('success')
        setName(''); setEmail(''); setMessage('')
      }else{
        setStatus('error')
      }
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-2xl font-bold text-primary-700">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white p-6 rounded shadow">
          <input type="text" name="website" style={{display:'none'}} aria-hidden value="" readOnly />
          <label className="block">
            <span className="text-sm text-slate-700">Name</span>
            <input className="mt-1 block w-full rounded border px-3 py-2" value={name} onChange={e=>setName(e.target.value)} required />
          </label>
          <label className="block">
            <span className="text-sm text-slate-700">Email</span>
            <input type="email" className="mt-1 block w-full rounded border px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} required />
          </label>
          <label className="block">
            <span className="text-sm text-slate-700">Message</span>
            <textarea className="mt-1 block w-full rounded border px-3 py-2" value={message} onChange={e=>setMessage(e.target.value)} rows={5} required />
          </label>
          <div className="flex items-center gap-3">
            <button disabled={status==='sending'} className="px-4 py-2 rounded bg-primary-500 text-white">Send</button>
            {status==='success' && <span className="text-green-600">Message sent — thank you!</span>}
            {status==='error' && <span className="text-red-600">Something went wrong. Try again later.</span>}
          </div>
        </form>
        <p className="text-xs text-slate-500 mt-3">This form forwards messages to your Formspree endpoint via a serverless function and includes a honeypot spam check. Add your Formspree URL to Vercel env var <code>FORMSPREE_URL</code>.</p>
      </div>
    </section>
  )
}