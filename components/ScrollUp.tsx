'use client';

import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    document.getElementById('scroll')?.scrollTo(0, 0);
  }, []);

  return null;
}
