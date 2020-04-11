import React from "react";
import DetailPresenter from "./DetailPresenter";
import { MoviesApi, TVApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    const { isMovie } = this.state;
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    if (isMovie) {
      try {
        if (isMovie) {
          const request = await MoviesApi.movieDetail(parsedId);
          result = request.data;
        } else {
          const request = await TVApi.tvDetail(parsedId);
          result = request.data;
        }
      } catch {
        this.setState({ error: "정보를 찾을 수 없습니다" });
      } finally {
        this.setState({ loading: false, result });
      }
    }
  }

  render() {
    console.log(this.state);
    const { loading, error, result } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
