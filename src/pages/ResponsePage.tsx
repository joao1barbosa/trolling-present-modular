import { RESPONSE_MAP } from "../components/responses/ResponseRegistry";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

export const ResponsePage = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const type = import.meta.env.VITE_RESPONSE_TYPE;
  const value = import.meta.env.VITE_RESPONSE_VALUE as string;
  const musicUrl = import.meta.env.VITE_YOUTUBE_URL as string;

  const SelectedModule = RESPONSE_MAP[type] || RESPONSE_MAP["TEXT"];

  const response = import.meta.env.VITE_RESPONSE_TEXT || "Aqui está!";
  const sub = import.meta.env.VITE_RESPONSE_SUBTEXT || "";

  return (
    <>
      {musicUrl && (
        <div>
          <div className="hidden">
            <ReactPlayer
              src={musicUrl}
              playing={isPlaying}
              loop={true}
              volume={0.5}
            />
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 text-zinc-200 hover:cursor-pointer"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      )}

      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden p-4">
        <h1 className="text-5xl text-zinc-200 font-bold mb-4">{response}</h1>
        <h2 className="text-2xl text-zinc-200 font-bold mb-8">{sub}</h2>

        <SelectedModule value={value} />
      </div>
    </>
  );
};
