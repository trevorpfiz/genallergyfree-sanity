'use client';

import { useEffect } from 'react';

export default function ScrollUpBody() {
  useEffect(() => document.body?.scrollTo(0, 0), []);

  return null;
}
