import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({
  nowPlaying,
  upComing,
  topRated,
  popular,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playting">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing">
          {upComing.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="topRated">
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Error color="e74c3c" text={error} />}
    </Container>
  );

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
