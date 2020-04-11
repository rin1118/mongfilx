import React from "react";
import SearchPresenter from "./SearchPresenter";
import { MoviesApi, TVApi } from "api";

export default class extends React.Component {
  state = {
    error: null,
    loading: false,
    movieResult: null,
    tvResult: null,
    searchTerm: "",
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    this.setState({ loading: true });
    const { searchByTerm } = this.state;
    try {
      const {
        data: { results: movieResult },
      } = await MoviesApi.search(searchByTerm);
      const {
        data: { results: tvResult },
      } = await TVApi.search(searchByTerm);
      this.setState({ movieResult, tvResult });
    } catch {
      this.setState({
        error: "정보를 찾을 수 없습니다",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { loading, error, movieResult, tvResult, searchTerm } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
