'use client';

import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    alert('test');
    window.scrollTo(0, 0);
  }, []);

  return null;
}
