// import { PixResponse } from "./PixResponse";
// import { ImageResponse } from "./ImageResponse";
// import { TextResponse } from "./TextResponse";

interface ResponseModuleProps {
  value: string;
}

// O "Dicionário" de componentes
export const RESPONSE_MAP: Record<string, React.FC<ResponseModuleProps>> = {
  //   PIX: PixResponse,
  //   IMAGE: ImageResponse,
  //   TEXT: TextResponse,
};
