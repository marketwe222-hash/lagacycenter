export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm border rounded-2xl p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create account</h1>
        <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Full name" />
        <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Email" type="email" />
        <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Password" type="password" />
        <button className="bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700">
          Register
        </button>
        <a href="/login" className="text-sm text-center text-blue-600">Already have an account?</a>
      </div>
    </div>
  );
}
