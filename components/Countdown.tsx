"use client"

import { useEffect, useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from './ui/input-otp'
import { Rows2 as Seperator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

function getRemainingTime(endDateStr: string) {
  const today = new Date();
  const end = new Date(endDateStr);

  let days = end.getDate() - today.getDate();
  let hours = end.getHours() - today.getHours();
  let minutes = end.getMinutes() - today.getMinutes();
  let seconds = end.getSeconds() - today.getSeconds();
  let milliseconds = end.getMilliseconds() - today.getMilliseconds();

  if (milliseconds < 0) {
    seconds--;
    milliseconds += 1000;
  }

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  return { days, hours, minutes, seconds, milliseconds };
}

function Box({ label, value }: { label: string, value: string }) {
  return <Card className="p-4 flex flex-col text-center">
    <CardTitle>{label}</CardTitle>
    <CardContent className="text-4xl">
      {value}
    </CardContent>
  </Card>
}

function leftPad(
  original: string,
  new_length: number,
  padder: string
) {
  let output = original;
  for (let _ = 0; _ < new_length - original.length; _++)
    output = padder + output;
  return output;
}

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const time = getRemainingTime("2026-01-18");
      setDays(time.days);
      setHours(time.hours);
      setMinutes(time.minutes);
      setSeconds(time.seconds);
      setMilliseconds(time.milliseconds);
    }, 10)
  }, [])

  return (
    <div className="flex gap-2">
      <Box label="Days" value={days.toString()} />
      <Box label="Hours" value={hours.toString()} />
      <Box label="Minutes" value={minutes.toString()} />
      <Box label="Seconds" value={leftPad(seconds.toString(), 2, "0")} />
      <Box label="Milliseconds" value={leftPad(milliseconds.toString(), 3, "0")} />
    </div>
  )
}
