import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "box-border cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black",
  {
    variants: {
      size: {
        small: "px-4 py-1 text-caption-14",
        medium: "px-6 py-2 text-body-16",
        large: "px-10 py-3 text-body-20",
      },
      variant: {
        "fill-gray": "bg-gray-500 text-white",
        "fill-brown": "bg-brown-500 text-white",
        "fill-orange": "bg-orange-500 text-white",
        "fill-amber": "bg-amber-500 text-white",
        "fill-yellow": "bg-yellow-500 text-white",
        "fill-lime": "bg-lime-500 text-white",
        "fill-red": "bg-red-500 text-white",
        "fill-blue": "bg-blue-500 text-white",
        "fill-green": "bg-green-500 text-white",
        "outline-gray": "border border-gray-500",
        "outline-brown": "border border-brown-500",
        "outline-orange": "border border-orange-500",
        "outline-amber": "border border-amber-500",
        "outline-yellow": "border border-yellow-500",
        "outline-lime": "border border-lime-500",
        "outline-red": "border border-red-500",
        "outline-blue": "border border-blue-500",
        "outline-green": "border border-green-500",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        "4xl": "rounded-4xl",
      },
    },
  },
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  variant = "fill-amber",
  rounded = "lg",
  size = "medium",
  ...restProps
}: Props) {
  return (
    <button
      className={buttonVariants({ variant, rounded, size, className })}
      {...restProps}
    >
      {children}
    </button>
  );
}
