import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

interface CodeResponseProps {
  value: string;
}

export function CodeResponse({ value }: CodeResponseProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <>
      {/* Container do Input */}
      <div className="relative group">
        <input
          type="text"
          value={value}
          readOnly
          className="w-80 bg-zinc-200 border-2 border-zinc-400 text-gray-600 py-2 pl-4 pr-12 rounded-xl text-sm font-mono focus:outline-none focus:border-pink-300 transition-colors cursor-text"
          onClick={(e) => (e.target as HTMLInputElement).select()}
        />

        {/* Botão de Copiar */}
        <button
          onClick={handleCopy}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all active:scale-90"
          title="Copiar código"
        >
          {copied ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 animate-in zoom-in" />
          ) : (
            <Copy className="w-5 h-5 text-zinc-600" />
          )}
        </button>
      </div>

      {/* Label de feedback abaixo do input */}
      <div
        className={`text-center h-5 transition-opacity duration-300 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs font-semibold text-green-600 px-3 py-4 rounded-full">
          Código copiado com sucesso!
        </span>
      </div>
    </>
  );
}
