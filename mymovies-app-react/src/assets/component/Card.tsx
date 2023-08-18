import React, { Component } from "react";

interface CardProps {
  id: number,
  image: string;
  mode: boolean;
  onClick: (id: number) => void;
}

class Card extends Component<CardProps> {
  render() {
    const { id, image,  onClick, mode } =
      this.props;

    return (
        <button onClick={() => onClick(id)} className={`p-0 transition-transform hover:border-red-600 hover:scale-105 ${mode === true ? "border-none" : ""}`}>
          <img
            className="rounded-md h-fit w-full object-cover p-0"
            src={image}
            alt=""
          />
        </button>
    );
  }
}

export default Card;
