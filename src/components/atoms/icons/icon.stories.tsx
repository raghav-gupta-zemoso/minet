import Icon from "./icon"
import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
const img="../../../../public/assets/1.jpg"
export default {
    title: "Atoms/Icon",
    component: Icon,
  }as ComponentMeta<typeof Icon>;

  const ButtonTemplate:ComponentStory<typeof Icon> = () => (
    <Icon ></Icon>
  );
  
  export const icon = ButtonTemplate.bind({});