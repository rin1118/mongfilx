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

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    this.setState({ loading: true });
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResult },
      } = await MoviesApi.search(searchTerm);
      const {
        data: { results: tvResult },
      } = await TVApi.search(searchTerm);
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
        updateTerm={this.updateTerm}
      />
    );
  }
}
