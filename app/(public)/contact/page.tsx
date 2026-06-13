export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="flex flex-col gap-4">
        <input  className="border rounded-lg px-4 py-2 text-sm" placeholder="Your name" />
        <input  className="border rounded-lg px-4 py-2 text-sm" placeholder="Email address" type="email" />
        <textarea className="border rounded-lg px-4 py-2 text-sm h-32" placeholder="Your message" />
        <button className="bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700">Send message</button>
      </div>
    </div>
  );
}
