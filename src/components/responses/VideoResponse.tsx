interface VideoResponseProps {
  value: string;
}

export function VideoResponse({ value }: VideoResponseProps) {
  const getVideoPath = () => {
    const videos: Record<string, any> = import.meta.glob(
      "/src/assets/response/*.{mp4,webm,ogg}",
      { eager: true }
    );

    const values = Object.values(videos);

    if (values.length === 0) return null;

    return values[0].default;
  };

  const videoSrc = getVideoPath();

  if (!videoSrc) {
    return <p className="text-red-500">Vídeo não encontrado</p>;
  }

  return (
    <div className="flex justify-center w-full">
      <video
        key={value}
        className="rounded-xl shadow-2xl max-w-full md:max-w-2xl"
        controls
        muted={false}
        playsInline
      >
        <source src={videoSrc} type={`video/${videoSrc.split(".").pop()}`} />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
}
