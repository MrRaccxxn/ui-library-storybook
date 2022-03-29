import styled from 'styled-components';
import React, { HTMLAttributes, ReactNode } from 'react';
import { theme } from '../../Theme';
import { css } from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant: string;
  readonly disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IVariantOption {
  readonly color: string;
  readonly backgroundColor: string;
}

interface IVariant {
  readonly [key: string]: IVariantOption;
}

const variantButtons: IVariant = {
  default: {
    color: theme.colors.brand.default,
    backgroundColor:
      'linear-gradient(to bottom right, #176FEB 0%, #FF80FF 100%)',
  },
  processing: {
    color: 'white',
    backgroundColor:
      'linear-gradient(to bottom right, #176FEB 0%, #FF80FF 100%)',
  },
  disable: {
    color: '#7C899C',
    backgroundColor: '#E6EDF7',
  },
};

const ButtonContainer = styled.button<{
  variant: string;
}>`
  border: none;
  border-radius: 16px;
  height: 59px;
  margin: 0;
  padding: 16px 57px;
  background: ${theme.colors.brand.default};
  color: white;
  cursor: pointer;

  ${({ variant }) =>
    variant &&
    variantButtons[variant] &&
    css`
      background: ${variantButtons[variant].backgroundColor};
      color: ${variantButtons[variant].color};
      &:hover {
        background: ${theme.colors.brand.hover};
      }

      &:disabled {
        cursor: not-allowed;
        background: ${theme.colors.neutral[200]};
        color: ${theme.colors.neutral[600]};
      }
    `}
`;

export const Button = ({
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer {...props} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};
