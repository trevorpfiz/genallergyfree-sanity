'use client';

import { useEffect } from 'react';

export default function ScrollUpLearn() {
  useEffect(() => {
    // seems I have to match transition time
    setTimeout(() => {
      document.getElementById('scroll')?.scrollTo(0, 0);
    }, 301);
  }, []);

  return null;
}
