import Header from "@/components/Layout/Header";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Header Component

Layout의 상단 공통 헤더 컴포넌트입니다.
        `,
      },
    },
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
