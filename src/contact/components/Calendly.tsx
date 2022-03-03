import { FC } from "react";
import { InlineWidget } from "react-calendly";

export const Calendly: FC = () => (
  <div className="container">
    <InlineWidget url="https://calendly.com/agerard57" />
  </div>
);
