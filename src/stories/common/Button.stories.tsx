import Button from "@/components/common/Button";
import { StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Button Component

### 특징
- 크기, 색상, 모양 등의 variant 존재
- native button 속성 사용 가능
- className 속성 사용 가능

---

### variants
#### size
- small
- medium
- large

#### variant
- fill-gray
- fill-brown
- fill-orange
- fill-amber
- fill-yellow
- fill-lime
- fill-red
- fill-blue
- fill-green
- outline-gray
- outline-brown
- outline-orange
- outline-amber
- outline-yellow
- outline-lime
- outline-red
- outline-blue
- outline-green

#### rounded
- sm
- md
- lg
- xl
- 2xl
- 3xl
- 4xl
  
  `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "fill-gray",
        "fill-brown",
        "fill-orange",
        "fill-amber",
        "fill-yellow",
        "fill-lime",
        "fill-red",
        "fill-blue",
        "fill-green",
        "outline-gray",
        "outline-brown",
        "outline-orange",
        "outline-amber",
        "outline-yellow",
        "outline-lime",
        "outline-red",
        "outline-blue",
        "outline-green",
      ],
    },
    rounded: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
  },
};

export const SizeVariants: Story = {
  args: {
    children: "버튼",
  },
  render: (args) => (
    <div className="space-x-4">
      <Button size="small" {...args} />
      <Button size="medium" {...args} />
      <Button size="large" {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "크기 variant 예시",
      },
    },
  },
};

export const ColorVariants: Story = {
  args: {
    children: "버튼",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <h2 className="text-body-24-b mb-2 text-center">Fill Variants</h2>
      <div className="grid grid-cols-3 items-center gap-2">
        <Button variant="fill-gray" {...args} />
        <Button variant="fill-brown" {...args} />
        <Button variant="fill-orange" {...args} />
        <Button variant="fill-amber" {...args} />
        <Button variant="fill-yellow" {...args} />
        <Button variant="fill-lime" {...args} />
        <Button variant="fill-red" {...args} />
        <Button variant="fill-blue" {...args} />
        <Button variant="fill-green" {...args} />
      </div>
      <h2 className="text-body-24-b mb-2 text-center">Outline Variants</h2>
      <div className="grid grid-cols-3 items-center gap-2">
        <Button variant="outline-gray" {...args} />
        <Button variant="outline-brown" {...args} />
        <Button variant="outline-orange" {...args} />
        <Button variant="outline-amber" {...args} />
        <Button variant="outline-yellow" {...args} />
        <Button variant="outline-lime" {...args} />
        <Button variant="outline-red" {...args} />
        <Button variant="outline-blue" {...args} />
        <Button variant="outline-green" {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "색상 variant 예시",
      },
    },
  },
};

export const RoundedVariants: Story = {
  args: {
    children: "버튼",
  },
  render: (args) => (
    <div className="space-x-4">
      <Button rounded="sm" {...args} />
      <Button rounded="md" {...args} />
      <Button rounded="lg" {...args} />
      <Button rounded="xl" {...args} />
      <Button rounded="2xl" {...args} />
      <Button rounded="3xl" {...args} />
      <Button rounded="4xl" {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "라운드 variant 예시",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "버튼",
  },
  render: (args) => (
    <div className="space-x-4">
      <Button {...args} />
      <Button variant="outline-amber" {...args} />
      <Button disabled {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "disabled 예시",
      },
    },
  },
};
