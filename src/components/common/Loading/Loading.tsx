import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  size?: number;
  color?: string;
}

export default function Loading({
  size = 50,
  color = "var(--color-amber-500)",
}: Props) {
  return (
    <div className="flex h-full items-center justify-center">
      <ClipLoader size={size} color={color} />
    </div>
  );
}
