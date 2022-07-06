import { Builder } from "@builder.io/react";
import { Button } from 'glints-aries';
export const GlintsButton = (props) => <Button variant={props.color} >{props.title}</Button>;

Builder.registerComponent(GlintsButton, {
  name: "GlintsButton",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'BOOK A CALL'
    },
    {
      name: "color",
      type: "color",
      defaultValue: 'black'
    },
  ],
});
