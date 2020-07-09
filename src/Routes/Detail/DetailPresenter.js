import React from "react";
import PropTypes, { symbol } from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  position: absolute;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.span`
  display: block;
  font-size: 35px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin: 15px 0px;
  font-size: 13px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0px 5px;
`;

const Overview = styled.p`
  font-size: 13px;
  color: white;
  opacity: 0.6;
  width: 55%;
  line-height: 1.5;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Mongfilx 😎</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Mongfilx 😎
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      ></Backdrop>
      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
        ></Cover>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time}분
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genres, index) =>
                  index + 1 === result.genres.length
                    ? genres.name
                    : `${genres.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.prototype = {
  // result.
  error: PropTypes.string,
  loading: PropTypes.boolean,
};

export default DetailPresenter;
