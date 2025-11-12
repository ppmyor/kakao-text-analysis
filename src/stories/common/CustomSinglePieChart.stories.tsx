import { StoryObj } from "@storybook/nextjs-vite";
import CustomSinglePieChart from "@/components/common/CustomSinglePieChart";

const meta = {
  title: "common/CustomSinglePieChart",
  component: CustomSinglePieChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## CustomSinglePieChart Component

### 특징
- 싱글 데이터의 파이 차트 형태 컴포넌트
- 차트 내부에 퍼센테이지 형식으로 라벨 표시
  - textSize, textColor 속성을 통해 텍스트 스타일 조정 가능
        `,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: typeof CustomSinglePieChart) => (
      <div style={{ width: "500px", height: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      { name: "A1", value: 100 },
      { name: "A2", value: 300 },
      { name: "B1", value: 100 },
      { name: "B2", value: 80 },
      { name: "B3", value: 40 },
      { name: "B4", value: 30 },
      { name: "B5", value: 50 },
      { name: "C1", value: 100 },
      { name: "C2", value: 200 },
      { name: "D1", value: 150 },
      { name: "D2", value: 50 },
    ],
    dataKey: "value",
    cx: "50%",
    cy: "50%",
    innerRadius: "0%",
    outerRadius: "100%",
    fill: "var(--color-amber-500)",
  },
};
