"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  logout,
  setCurrentUser,
  useCurrentUser,
} from "@/lib/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const currentUser = useCurrentUser();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("請填寫姓名和 Email");
      return;
    }

    setCurrentUser({
      name: name.trim(),
      email: email.trim(),
      createdAt: Date.now(),
    });
    router.push("/");
  };

  if (currentUser) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-xl border shadow-sm p-8 text-center">
          <p className="text-sm font-medium text-emerald-600 mb-2">已登入</p>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {currentUser.name}
          </h1>
          <p className="text-slate-600 mb-6">{currentUser.email}</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => router.push("/progress")}
              className="py-3 rounded-md bg-emerald-600 text-white font-medium transition-colors hover:bg-emerald-700"
            >
              查看進度
            </button>
            <button
              type="button"
              onClick={() => {
                logout();
              }}
              className="py-3 rounded-md border border-slate-300 text-slate-700 font-medium transition-colors hover:bg-slate-50"
            >
              登出
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-white rounded-xl border shadow-sm p-8">
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-6">
          本機學習者設定
        </h1>
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-800">
          這不是雲端帳號系統，不會儲存密碼。姓名與 Email 只保存在你的瀏覽器，用來顯示學習者名稱。
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              姓名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="你的姓名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="your@email.com"
            />
          </div>

          {message && (
            <p className="text-sm text-red-600">{message}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors"
          >
            儲存本機設定
          </button>
        </form>
      </div>
    </div>
  );
}
