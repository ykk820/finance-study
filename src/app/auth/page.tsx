"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getUsers,
  logout,
  saveUsers,
  setCurrentUser,
  useCurrentUser,
} from "@/lib/auth";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const currentUser = useCurrentUser();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const users = getUsers();
      const user = users.find(
        (u) => u.email === email.trim() && u.password === password
      );
      if (user) {
        setCurrentUser(user);
        router.push("/");
      } else {
        setMessage("帳號或密碼錯誤");
      }
    } else {
      if (!name || !email || !password) {
        setMessage("請填寫所有欄位");
        return;
      }
      const users = getUsers();
      if (users.find((u) => u.email === email.trim())) {
        setMessage("此 Email 已被註冊");
        return;
      }
      const newUser = {
        name: name.trim(),
        email: email.trim(),
        password,
        createdAt: Date.now(),
      };
      users.push(newUser);
      saveUsers(users);
      setCurrentUser(newUser);
      router.push("/");
    }
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
          {isLogin ? "登入" : "註冊"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
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
          )}

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

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>

          {message && (
            <p className="text-sm text-red-600">{message}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors"
          >
            {isLogin ? "登入" : "註冊"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          {isLogin ? "還沒有帳號？" : "已經有帳號了？"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="ml-1 text-emerald-600 font-medium hover:text-emerald-700"
          >
            {isLogin ? "立即註冊" : "登入"}
          </button>
        </p>
      </div>
    </div>
  );
}
