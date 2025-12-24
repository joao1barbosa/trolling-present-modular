import { Link } from "react-router-dom";
import { useMovable } from "../hooks/useMovable";
import { FloatingBackground } from "../components/FloatingBackground";

export function QuestionPage() {
  const { hasStarted, position, moveButton } = useMovable();

  const imageModules = import.meta.glob(
    "/public/question/photos/*.{png,jpg,jpeg,SVG,webp}",
    { eager: true }
  );
  const imagesArray = Object.keys(imageModules).map((path) =>
    path.replace("/public", "")
  );

  const question = import.meta.env.VITE_QUESTION || "Você aceita?";

  return (
    <>
      <FloatingBackground images={imagesArray} />
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden p-4">
        {/* Pergunta */}
        <h1 className="z-10 text-3xl md:text-5xl font-bold text-center mb-12 text-zinc-200">
          {question}
        </h1>

        <div className="flex gap-12 items-center justify-center w-full">
          {/* Botão SIM */}
          <div className="flex flex-row justify-end w-1/2">
            <Link
              to="/response"
              className="w-24 h-12 no-underline bg-green-800 hover:bg-green-700 text-zinc-200 px-8 py-3 rounded-lg font-bold shadow-sm transition-transform active:scale-95"
            >
              Sim
            </Link>
          </div>

          {/* Botão NÃO */}
          <div className="flex flex-row justify-start w-1/2">
            <button
              onMouseEnter={moveButton}
              onClick={moveButton}
              style={
                hasStarted
                  ? {
                      position: "absolute",
                      top: position.top,
                      left: position.left,
                      transform: "translate(-50%, -50%)",
                      transition: "all 0.2s ease-out",
                    }
                  : {
                      position: "relative",
                      transition: "all 0.2s ease-out",
                    }
              }
              className="w-24 h-12 bg-red-800 text-zinc-200 px-8 py-3 rounded-lg font-bold shadow-sm"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
