import { Component } from "react";
import Card from "../../assets/component/Card";
import Detail from "../../assets/component/Detail";
import { NavigateFunction } from "react-router-dom";

import datas from "../../assets/data/movieList.json";

import axios from "axios";

import NowPlayingCard from "../../assets/component/NowPlayingCard";
import { withRouter } from "../../withRouter";

interface Details {
  popup: boolean;
  movie: any;
  mode: boolean;
  navigate: NavigateFunction;
}

class App extends Component<Details> {
  state = {
    popup: false,
    selectedMovieId: null,
    mode: false,
    movie: [],
  };

  showDetail = (id: number) => {
    this.setState({
      popup: true,
      selectedMovieId: id,
    });
  };

  detailMovies(id: number) {
    const { navigate } = this.props;

    navigate(`/detail/${id}`, {
      state: {
        paramsValue: id,
      },
    });
  }

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
        // console.log(res.data.results);
        this.setState({
          movie: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { popup, selectedMovieId, mode, movie } = this.state;

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
        <section className={`h-[100vh]`}>
          <div className="w-full h-[100vh] relative">
            <img
              src="https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg"
              alt=""
              className="object-cover w-full h-[100vh] opacity-40"
            />
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full">
              <p className="text-[30px]">Welcome Back !</p>
              <p className="text-[50px] font-[800] tracking-wide font-['Bree Serif']">
                Unlimited movies, TV shows, and more
              </p>
              <p className="text-[16px] pb-4 font-[400]">
                Watch anywhere. Cancel anytime.
              </p>
              <button className="bg-red-600 font-[7500]">See All Movie</button>
            </div>
          </div>
        </section>

        <section className="">
          <h1
            className={`text-center mt-20 mb-6 ${
              mode === true ? "text-red-600 bg-white" : "text-white bg-black"
            } font-[600]`}
          >
            Now Playing
          </h1>
          <div className="grid grid-cols-4 gap-3 container mx-auto px-6 pb-5">
            {movie &&
              movie?.map((item: any, index) => {
                return (
                  <div>
                    <NowPlayingCard
                      key={index}
                      id={item?.id}
                      image={item?.poster_path}
                      mode={mode}
                      onClick={() => this.detailMovies(item?.id)}
                    />
                  </div>
                );
              })}
          </div>
        </section>

        <section
          className={`${mode === true ? "bg-white" : "bg-black"} app-container`}
        >
          <h1
            className={`text-center mt-20 mb-6 ${
              mode === true ? "text-red-600 bg-white" : "text-white bg-black"
            } font-[600]`}
          >
            Movie List
          </h1>
          <div className="grid grid-cols-4 gap-3 container mx-auto px-6 pb-5">
            {datas.map((item, index) => {
              return (
                <div className="">
                  <Card
                    key={index}
                    id={item.id}
                    image={item.image}
                    mode={mode}
                    onClick={() => this.showDetail(item.id)} // Pass id film ke showDetail
                  />
                  <Detail
                    isOpen={popup && selectedMovieId === item.id} // Tampilkan popup jika id film cocok
                    onClose={() =>
                      this.setState({ popup: false, selectedMovieId: null })
                    }
                  >
                    <div className="grid grid-cols-2 h-[90vh] w-[70vw]">
                      <div className="image">
                        <img src={item.image} alt="" className="h-[90vh]" />
                      </div>
                      <div className="content text-black text-[16px] font-[600] font-['Bree Serif'] leading-8">
                        <p className="text-center text-[40px] font-[700] font-['Bree Serif'] p-3">
                          {item.title}
                        </p>
                        <p className="mt-3">
                          Runtime :{" "}
                          <span className="font-[400]">
                            {item.duration} minutes
                          </span>
                        </p>
                        <p>
                          Release :{" "}
                          <span className="font-[400]">{item.release}</span>
                        </p>
                        <p>
                          Overview :{" "}
                          <p className="font-[400]">{item.description}</p>
                        </p>
                      </div>
                    </div>
                  </Detail>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(App);
