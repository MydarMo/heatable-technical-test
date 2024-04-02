import {
  Action,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from "@radix-ui/react-toast";
import { FC } from "react";
import { ToastProps } from "../_types/toast";

export const Toast: FC<ToastProps> = (props) => {
  const { open, setOpen, title, description, action } = props;

  return (
    <Provider swipeDirection="right">
      <Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Title className="ToastTitle">{title}</Title>
        <Description className="ToastDescription" asChild>
          {description}
        </Description>
        <Action className="ToastAction" asChild altText={title}>
          {action}
        </Action>
      </Root>
      <Viewport className="ToastViewport" />
    </Provider>
  );
};
