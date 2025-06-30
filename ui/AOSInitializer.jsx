// components/AOSInitializer.tsx
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      
      once: true,
    });
  }, []);

  return null; // no UI, just initializes AOS
}
