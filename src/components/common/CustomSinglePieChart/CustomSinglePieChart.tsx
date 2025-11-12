import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
} from "recharts";

const RADIAN = Math.PI / 180;

const TEXT_SIZE_MAP = {
  sm: "text-caption-12",
  md: "text-caption-14",
  lg: "text-body-16",
  xl: "text-body-20",
  "2xl": "text-body-24",
  "3xl": "text-headline-32",
  "4xl": "text-headline-36",
  "5xl": "text-headline-48",
} as const;

type TTextSize = keyof typeof TEXT_SIZE_MAP;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
  textColor,
  textSize,
}: PieLabelRenderProps & {
  textColor?: string;
  textSize?: TTextSize;
}) => {
  if (
    cx === null ||
    cy === null ||
    innerRadius === null ||
    outerRadius === null
  ) {
    return null;
  }

  const radius =
    Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={textColor ?? "white"}
      textAnchor="middle"
      dominantBaseline="central"
      className={TEXT_SIZE_MAP[textSize ?? "md"]}
    >
      <tspan>{`${name} (${(Number(percent ?? 1) * 100).toFixed(0)}%)`}</tspan>
    </text>
  );
};

interface Props extends React.ComponentProps<typeof Pie> {
  isAnimationActive?: boolean;
}

export default function CustomSinglePieChart({
  isAnimationActive = true,
  ...rest
}: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          isAnimationActive={isAnimationActive}
          {...rest}
          label={renderCustomizedLabel}
          labelLine={false}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
