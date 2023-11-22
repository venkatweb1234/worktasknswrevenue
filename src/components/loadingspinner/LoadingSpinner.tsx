import React from "react";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/react";
import { MainLoadSpinner } from "./LoadingSpinnerStyles";

const override = css`
  display: block;
  margin: 0 auto;
`;

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
  return (
    <MainLoadSpinner className="sweet-loading">
      <FadeLoader color="#36D7B7" loading={loading} css={override} />
    </MainLoadSpinner>
  );
};

export default LoadingSpinner;
