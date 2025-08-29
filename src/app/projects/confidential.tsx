"use client";
import { useRouter } from "next/navigation";

export default function Confidential() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">🚫 Confidential Project</h1>
                <p className="text-gray-600 mb-6">
                    I really appreciate your interest in viewing the code, but this project is{" "}
                    <span className="font-semibold">confidential</span> and cannot be shared publicly.
                </p>
                <button
                    onClick={() => router.push("/")}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
                >
                    🔙 Return to Portfolio
                </button>
            </div>
        </div>
    );
}
