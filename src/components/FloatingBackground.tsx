import { useEffect, useState, useRef } from "react";

interface FloatingItem {
  id: number;
  src: string;
  top: string;
  left: string;
  size: number;
  isVisible: boolean;
}

export function FloatingBackground() {
  const [items, setItems] = useState<FloatingItem[]>([]);
  const idCounter = useRef(0);

    const getImagesPath = () => {
      // 1. O caminho agora aponta para src/assets
      const imageModules: Record<string, { default: string }> = import.meta.glob(
        "/src/assets/question/photos/*.{png,jpg,jpeg,SVG,webp}",
        { eager: true }
      );
      
      return Object.values(imageModules).map((mod) => mod.default);
    };

  useEffect(() => {
    const images = getImagesPath();

    if (images.length === 0) return;

    const spawnItem = () => {
      const id = idCounter.current++;

      const newItem: FloatingItem = {
        id,
        src: images[Math.floor(Math.random() * images.length)],
        top: Math.floor(Math.random() * 80 + 10) + "%",
        left: Math.floor(Math.random() * 80 + 10) + "%",
        size: Math.floor(Math.random() * 60 + 100),
        isVisible: false,
      };

      setItems((prev) => [...prev, newItem]);

      setTimeout(() => {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, isVisible: true } : item
          )
        );
      }, 50);

      const VISIBLE_DURATION = 3000;
      setTimeout(() => {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, isVisible: false } : item
          )
        );
      }, VISIBLE_DURATION);

      // Tem que bater com o duration-1500 do Tailwind abaixo
      const FADE_DURATION = 1500;
      setTimeout(() => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      }, VISIBLE_DURATION + FADE_DURATION);
    };

    // Cria uma nova imagem a cada X milissegundos
    const intervalId = setInterval(spawnItem, 800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {items.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt=""
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
            transform: "translate(-50%, -50%)",
          }}
          className={`
            transition-opacity ease-in-out duration-1500 
            ${item.isVisible ? "opacity-60" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}
