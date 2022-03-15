/* eslint-disable react/require-default-props */
import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";
import { useSelector } from "../../store";
import WarningIcon from "../../public/static/svg/common/warning.svg";

const Container = styled.div<{ isValid: boolean; validateMode: boolean }>`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    font-size: 16px;
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background-image: url("/static/svg/common/selector/selector_down_arrow.svg");
    background-position: right 11px center;
    background-repeat: no-repeat;
    font-size: 16px;

    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
  select {
  ${({ validateMode, isValid }) => {
    if (validateMode) {
      if (!isValid) {
        return css`
          border-color: ${palette.tawny};
          background-color: ${palette.snow};
        `;
      }
      return css`
        border-color: ${palette.dark_cyan};
      `;
    }
    return undefined;
  }}
  }
  .selector-warning {
    margin-top: 8px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
    p {
      font-size: 12px;
      color: ${palette.davidson_orange};
    }
  }
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
  isValid?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
}

const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  isValid,
  useValidation = true,
  errorMessage = "옵션을 선택하세요.",
  ...props
}) => {
  const validateMode = useSelector((state) => state.common.validateMode);

  return (
    <Container isValid={!!isValid} validateMode={useValidation && validateMode}>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {useValidation && validateMode && !isValid && (
        <div className="selector-warning">
          <WarningIcon />
          <p>{errorMessage}</p>
        </div>
      )}
    </Container>
  );
};

export default React.memo(Selector);
