'use client';

import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    // Schedule the scroll to be executed after the route transition is finished
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return null;
}
