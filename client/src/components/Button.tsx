import React from "react";

type Props = {
  bg: string;
  text: string;
  text_color: string;
};

function Button({ bg, text, text_color }: Props) {
  return (
    <button className={`${bg} ${text_color} rounded h-full w-full`}>
      {text}
    </button>
  );
}

export default Button;
