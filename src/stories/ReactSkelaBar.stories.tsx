import React from "react";
import { Meta, Story } from "@storybook/react"
import {SkelaBar} from "../components";

const meta: Meta = {
  title: "React Skela Bar",
  component: SkelaBar,
  argTypes: {
    bars: {
      defaultValue: 4
    },
    barBaseWidth: {
      defaultValue: "300px"
    },
    barBaseHeight: {
      defaultValue: "300px"
    },
    barHeights:[],
    borderColor: {
      defaultValue: "#dddddd"
    },
    randomHeights: {
      defaultValue: false
    },
    animationType: {
      defaultValue: "wave"
    },
    color: {
      defaultValue: "#dddddd"
    }
  }
}

export default meta;

const Template: Story = (args) => <SkelaBar {...args} />

export const Default = Template.bind({})

export const MultipleBars = Template.bind({})
MultipleBars.args = {
  bars: 8,
  barBaseWidth:"600px",
  barBaseHeight:"400px"
}

export const coloredBars = Template.bind({})
coloredBars.args = {
  bars: 8,
  barBaseWidth:"600px",
  barBaseHeight:"400px",
  color:"#83d3b3"
}

export const animationBars = Template.bind({})
animationBars.args = {
  bars: 8,
  barBaseWidth:"600px",
  barBaseHeight:"400px",
  color:"#83d3b3",
  animationType:"pulse"
}