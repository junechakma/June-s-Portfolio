"use client";

import {
  Clock1Icon, Clock2Icon, Clock3Icon, Clock4Icon,
  Clock5Icon, Clock6Icon, Clock7Icon, Clock8Icon,
  Clock9Icon, Clock10Icon, Clock11Icon, Clock12Icon,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item";

const CLOCK_ICONS: Record<number, LucideIcon> = {
  1: Clock1Icon, 2: Clock2Icon, 3: Clock3Icon, 4: Clock4Icon,
  5: Clock5Icon, 6: Clock6Icon, 7: Clock7Icon, 8: Clock8Icon,
  9: Clock9Icon, 10: Clock10Icon, 11: Clock11Icon, 12: Clock12Icon,
};

const TIME_ZONE = "Asia/Dhaka";

export function LocalTimeItem() {
  const [timeString, setTimeString] = useState("");
  const [diffText, setDiffText] = useState("");
  const [ClockIcon, setClockIcon] = useState<LucideIcon>(Clock12Icon);

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const formatted = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit", minute: "2-digit", hour12: false, timeZone: TIME_ZONE,
      }).format(now);
      setTimeString(formatted);

      const hour = parseInt(
        new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, timeZone: TIME_ZONE }).format(now)
      );
      setClockIcon(CLOCK_ICONS[hour % 12 || 12]);

      const viewerOffset = -now.getTimezoneOffset();
      const targetOffset = 6 * 60; // Asia/Dhaka is UTC+6
      const diff = Math.round((targetOffset - viewerOffset) / 60);

      if (diff === 0) setDiffText(" // same time");
      else setDiffText(` // ${Math.abs(diff)}h ${diff > 0 ? "ahead" : "behind"}`);
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <IntroItem>
      <IntroItemIcon>
        <ClockIcon />
      </IntroItemIcon>
      <IntroItemContent aria-label={`Current local time: ${timeString}`}>
        <span>{timeString || "00:00"}</span>
        <span className="text-muted-foreground" aria-hidden="true">{diffText}</span>
      </IntroItemContent>
    </IntroItem>
  );
}
