"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    await login(email, password);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm border rounded-2xl p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Password"
          type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}
          className="bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700">
          Sign in
        </button>
        <a href="/register" className="text-sm text-center text-blue-600">Create an account</a>
      </div>
    </div>
  );
}
