"use client";

import { useMemo, useSyncExternalStore } from "react";

export type StoredUser = {
  name: string;
  email: string;
  createdAt: number;
};

const CURRENT_USER_KEY = "finance-current-user";
const LEGACY_USERS_KEY = "finance-users";
const AUTH_CHANGE_EVENT = "finance-auth-change";

function emitAuthChange() {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function getCurrentUser(): StoredUser | null {
  if (typeof window === "undefined") return null;

  try {
    const user = getCurrentUserSnapshot();
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

function getCurrentUserSnapshot() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CURRENT_USER_KEY);
}

export function setCurrentUser(user: StoredUser) {
  const safeUser: StoredUser = {
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
  localStorage.removeItem(LEGACY_USERS_KEY);
  emitAuthChange();
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
  emitAuthChange();
}

export function useCurrentUser() {
  const userSnapshot = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener(AUTH_CHANGE_EVENT, onStoreChange);

      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener(AUTH_CHANGE_EVENT, onStoreChange);
      };
    },
    getCurrentUserSnapshot,
    () => null
  );

  return useMemo(() => {
    try {
      return userSnapshot ? JSON.parse(userSnapshot) as StoredUser : null;
    } catch {
      return null;
    }
  }, [userSnapshot]);
}
