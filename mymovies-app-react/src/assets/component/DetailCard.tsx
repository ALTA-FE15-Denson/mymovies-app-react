import React, { Component } from "react";

interface DetailCardProps {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

class DetailCard extends Component<DetailCardProps> {
  render() {
    return (
      <>
        <div className="absolute w-[70vw] bottom-16 left-1/2 transform -translate-x-1/2 bg-black rounded-lg">
          <div className=" shadow-lg grid grid-cols-3 gap-4 ">
            <div className="col-span-1 h-80 ">
              <img
                src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-l-md"
              />
            </div>
            <div className="col-span-2 ">
              <div className="flex flex-col p-3">
                <h1 className="text-3xl text-red-600 font-[800] text-center mb-2">
                  {this.props.title}
                </h1>
                <p className="text-white">
                  Release Date : {this.props.release_date}
                </p>
                <p className="text-white">
                  Popularity : {this.props.popularity}
                </p>
                <p className="text-white">
                  Vote Average : {this.props.vote_average}
                </p>
                <p className="text-white">
                  Vote Count : {this.props.vote_count}
                </p>
                <p className="text-white">
                  Overview : <p>{this.props.overview}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DetailCard;
