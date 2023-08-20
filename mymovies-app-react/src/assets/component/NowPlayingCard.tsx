import React, { Component } from "react";

interface NowPlayingCardProps {
  id: number,
  image: string;
  mode: boolean;
  onClick: (id: number) => void;
}

class NowPlayingCard extends Component<NowPlayingCardProps> {
  render() {
    const { id, image, onClick, mode } = this.props;

    return (
        <button onClick={() => onClick(id)} className={`p-0 transition-transform hover:border-red-600 hover:scale-105 ${mode === true ? "border-none" : ""}`}>
          <img
            className="rounded-md h-full w-full object-cover p-0"
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt=""
          />
        </button>
    );
  }
}

export default NowPlayingCard;
