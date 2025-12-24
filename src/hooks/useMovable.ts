import { useState } from 'react';

export const useMovable = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [hasStarted, setHasStarted] = useState(false);

  const moveButton = () => {
    if (!hasStarted) setHasStarted(true);

    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return { hasStarted, position, moveButton };
};