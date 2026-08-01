"use client";

import { useEffect, useState } from "react";

import type { SupportedLanguage } from "@/app/components/home/model/site-content";

type ClockState = {
  dateLabel: string;
  isNight: boolean;
  timeLabel: string;
};

function formatClock(language: SupportedLanguage, timestamp: number): ClockState {
  const locale = language === "ru" ? "ru-RU" : "en-US";
  const now = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "long",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  const parts = formatter.formatToParts(now);
  const hour = Number(parts.find(({ type }) => type === "hour")?.value ?? 0);
  const minute = Number(
    parts.find(({ type }) => type === "minute")?.value ?? 0,
  );
  const day = parts.find(({ type }) => type === "day")?.value ?? "";
  const month = parts.find(({ type }) => type === "month")?.value ?? "";
  const totalMinutes = hour * 60 + minute;

  return {
    dateLabel: `${day} ${month}`,
    isNight: totalMinutes >= 23 * 60 || totalMinutes < 6 * 60,
    timeLabel: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
  };
}

export function useClock(language: SupportedLanguage) {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  if (timestamp === 0) {
    return null;
  }

  return formatClock(language, timestamp);
}
