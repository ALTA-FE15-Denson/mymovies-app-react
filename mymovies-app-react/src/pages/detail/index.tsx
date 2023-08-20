import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import axios from "axios";

import DetailCard from "../../assets/component/DetailCard";

interface DetailProps {
    location: any;
}

class Detail extends Component<DetailProps> {

  state = {
    movie: [],
    mode: false,
  };

  handleWhiteMode() {
    this.setState({
      mode: !this.state.mode,
    });
  }

  componentDidMount() {
    this.getNowPlayingMovies();
  }

  getNowPlayingMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5877b7c3810aa102db7142aac20e6405&language=en-US&page=3"
      )
      .then((res) => {
        this.setState({
          movie: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    const { location } = this.props;
    const { movie, mode } = this.state;
    
    const id = location.state.paramsValue;
    const selectedMovie = movie.find((item: any) => item.id === id);
    

    return (
      <>
      <nav className="bg-black border-gray-200  fixed z-50 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Netflix
            </span>
          </a>
          <button
            onClick={() => this.handleWhiteMode()}
            className="bg-transparent focus:outline-none hover:border-none p-0 transition-all"
          >
            <img
              src={`${
                mode === true ? "../public/night.png" : "../public/day.png"
              }`}
              alt=""
              className="w-9 h-9"
            />
          </button>
        </div>
      </nav>
      <section>
        {
          selectedMovie && (
            <div className="h-[100vh] w-full relative"> 
                <img src={`https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`}alt=""  className="h-[100vh] w-full  object-cover"/>
                <DetailCard 
                  title={selectedMovie?.title}
                  poster_path={selectedMovie?.poster_path}
                  overview={selectedMovie?.overview}
                  release_date={selectedMovie?.release_date}
                  vote_average={selectedMovie?.vote_average}
                  vote_count={selectedMovie?.vote_count}
                  popularity={selectedMovie?.popularity}
                />
            </div>
            )
        }
      </section>
      </>
      
    )
  }
}

export default withRouter(Detail);
