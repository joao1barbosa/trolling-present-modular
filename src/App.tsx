import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionPage } from "./pages/QuestionPage";
import { ResponsePage } from "./pages/ResponsePage";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/response" element={<ResponsePage />} />

          {/* Redirecionar qualquer rota inexistente para a Home */}
          <Route path="*" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
