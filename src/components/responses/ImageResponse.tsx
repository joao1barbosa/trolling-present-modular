interface ImageResponseProps {
  value: string;
}

export function ImageResponse({ value }: ImageResponseProps) {
  const getImagePath = () => {
    const images: object = import.meta.glob(
      "/public/response/*.{png,jpg,jpeg,SVG,webp}",
      { eager: true }
    );

    const imagesArray = Object.keys(images);

    if (imagesArray.length === 0) return "photos/error.png";

    // retorna o caminho final da imagem
    return imagesArray[0].replace("/public", "");
  };

  return (
    <img key={value} src={getImagePath()} className="min-w-lg max-w-4xl" />
  );
}
