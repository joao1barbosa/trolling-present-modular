import ReactPlayer from "react-player";

interface YouTubeResponseProps {
  value: string;
}

export function YouTubeResponse({ value }: YouTubeResponseProps) {
  return (
    <ReactPlayer src={value} playing={false} className="min-w-2xl min-h-96" />
  );
}
