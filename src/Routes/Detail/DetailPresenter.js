import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => null;

DetailPresenter.prototype = {
  // result.
  error: PropTypes.string,
  loading: PropTypes.boolean,
};

export default DetailPresenter;
