'use client';

import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  return null;
}
