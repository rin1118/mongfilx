import React from "react";
import TvPresenter from "./TvPresenter";
import { TVApi } from "api";

export default class extends React.Component {
  state = {
    airRingToday: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airRingToday },
      } = await TVApi.airRingToday();
      const {
        data: { results: topRated },
      } = await TVApi.topRated();
      const {
        data: { results: popular },
      } = await TVApi.popular();

      this.setState({
        airRingToday,
        topRated,
        popular,
      });
    } catch {
      this.setState({
        error: "tv프로그램 정보를 찾을 수 없습니다",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    console.log(this.state);
    const { airRingToday, topRated, popular, loading, error } = this.state;
    return (
      <TvPresenter
        nowPlaying={airRingToday}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
