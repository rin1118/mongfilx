import React from "react";
import HomePresenter from "./HomePresenter";
import { MoviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await MoviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await MoviesApi.upComing();
      const {
        data: { results: popular },
      } = await MoviesApi.popular();
      const {
        data: { results: topRated },
      } = await MoviesApi.topRated();

      this.setState({
        nowPlaying,
        upComing,
        popular,
        topRated,
      });
    } catch {
      this.setState({
        error: "영화를 찾을 수 없습니다",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    console.log(this.state);
    const {
      nowPlaying,
      upComing,
      topRated,
      popular,
      loading,
      error,
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
