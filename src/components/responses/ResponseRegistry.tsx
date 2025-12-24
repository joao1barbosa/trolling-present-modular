import { CodeResponse } from "./CodeResponse";
import { ImageResponse } from "./ImageResponse";
import { TextResponse } from "./TextResponse";
import { YouTubeResponse } from "./YouTubeResponse";
import { VideoResponse } from "./VideoResponse";

interface ResponseModuleProps {
  value: string;
}

export const RESPONSE_MAP: Record<string, React.FC<ResponseModuleProps>> = {
  CODE: CodeResponse,
  IMAGE: ImageResponse,
  TEXT: TextResponse,
  VIDEO: VideoResponse,
  YOUTUBE_VIDEO: YouTubeResponse,
};
