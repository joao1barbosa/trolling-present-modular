interface TextResponseProps {
  value: string;
}

export function TextResponse({ value }: TextResponseProps) {
  return <h3 className="text-2xl">{value}</h3>;
}
