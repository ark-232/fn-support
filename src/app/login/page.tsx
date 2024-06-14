"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";

export default function Login() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        sessionStorage.removeItem("authenticated");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            sessionStorage.setItem("authenticated", "true");
            router.push("/dashboard");
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white">
                <h1 className="text-3xl mb-6">Admin Login</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </form>
            </main>
        </>
    );
}
