import Loading from "@/components/common/Loading";
import { StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "common/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Loading Component

### 특징
- size, color 속성 사용 가능
  - size: 로딩 컴포넌트의 크기
  - color: 로딩 컴포넌트의 색상
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
    color: "var(--color-amber-500)",
  },
};
