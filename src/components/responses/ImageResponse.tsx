interface ImageResponseProps {
  value: string;
}

export function ImageResponse({ value }: ImageResponseProps) {
  const getImagePath = () => {
    const images: Record<string, any> = import.meta.glob(
      "/src/assets/response/*.{png,jpg,jpeg,SVG,webp}",
      { eager: true }
    );
    const values = Object.values(images);

    if (values.length === 0) return "/src/assets/photos/error.png";

    return values[0].default;
  };

  return (
    <img key={value} src={getImagePath()} className="min-w-lg max-w-4xl" />
  );
}
