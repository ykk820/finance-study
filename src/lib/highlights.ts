"use client";

const HIGHLIGHTS_KEY = "finance-study-highlights";

export interface Highlight {
  id: string;
  chapterId: string;
  text: string;
  color: "yellow" | "green" | "blue" | "pink";
  createdAt: number;
}

export function getHighlights(chapterId?: string): Highlight[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(HIGHLIGHTS_KEY);
  const all: Highlight[] = data ? JSON.parse(data) : [];
  return chapterId ? all.filter((h) => h.chapterId === chapterId) : all;
}

export function addHighlight(chapterId: string, text: string, color: Highlight["color"] = "yellow"): Highlight {
  const highlights = getHighlights();
  const newHighlight: Highlight = {
    id: `hl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    chapterId,
    text,
    color,
    createdAt: Date.now(),
  };
  highlights.push(newHighlight);
  localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(highlights));
  return newHighlight;
}

export function removeHighlight(id: string) {
  const highlights = getHighlights().filter((h) => h.id !== id);
  localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(highlights));
}

export function clearHighlights(chapterId: string) {
  const highlights = getHighlights().filter((h) => h.chapterId !== chapterId);
  localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(highlights));
}
