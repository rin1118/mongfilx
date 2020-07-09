import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Error from "Components/Error";
import Poster from "Components/Poster";

const Container = styled.div``;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
  padding: 20px;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <>
    <Helmet>
      <title>검색 | Mongfilx 😎</title>
    </Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="제목을 입력해 주세요."
          value={searchTerm}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResult && movieResult.length > 0 && (
            <Section title="movie results">
              {movieResult.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                ></Poster>
              ))}
            </Section>
          )}
          {tvResult && tvResult.length > 0 && (
            <Section title="tvResult">
              {tvResult.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  imageUrl={tv.poster_path}
                  rating={tv.vote_average}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                ></Poster>
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Error color="e74c3c" text={error} />}
      {tvResult &&
        tvResult.length === 0 &&
        movieResult &&
        movieResult.length === 0 && (
          <Error text={`검색 결과를 찾을 수 없습니다.😥`} color="e74c3c" />
        )}
    </Container>
  </>
);

SearchPresenter.prototype = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
