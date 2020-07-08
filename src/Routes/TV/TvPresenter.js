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

const TvPresenter = ({ nowPlaying, topRated, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
            ></Poster>
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="nowPlayings">
          {nowPlaying.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Error color="e74c3c" text={error} />}
    </Container>
  );

TvPresenter.prototype = {
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
