import Avatar from "./Avatar"
import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
export default {
    title: "Atoms/Avatar",
    component: Avatar,
  }as ComponentMeta<typeof Avatar>;

  const ButtonTemplate:ComponentStory<typeof Avatar> = () => (
    <Avatar ></Avatar>
  );
  
  export const avatar = ButtonTemplate.bind({});