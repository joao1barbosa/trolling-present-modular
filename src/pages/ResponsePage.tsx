import { RESPONSE_MAP } from "../components/responses/ResponseRegistry";
import ReactPlayer from "react-player";

export const ResponsePage = () => {
  const type = import.meta.env.VITE_RESPONSE_TYPE;
  const value = import.meta.env.VITE_RESPONSE_VALUE as string;
  const videoUrl = import.meta.env.VITE_YOUTUBE_URL as string;

  const SelectedModule = RESPONSE_MAP[type] || RESPONSE_MAP["TEXT"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <h1 className="text-3xl font-bold mb-8">
        {import.meta.env.VITE_RESPONSE_TEXT}
      </h1>

      {/* <SelectedModule value={value} /> */}

      <div className="hidden">
        <ReactPlayer src={videoUrl} playing={true} loop={true} volume={0.5} />
      </div>
    </div>
  );
};
