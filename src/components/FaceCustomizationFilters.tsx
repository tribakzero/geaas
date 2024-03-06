import React, { ChangeEvent } from 'react';
import {
  StyledFieldset,
  StyledInputsWrapper,
  StyledHalfLabel,
  StyledThirdLabel,
  StyledInput,
  StyledBlockInput,
} from '../Styles';

interface FaceCustomizationFiltersProps {
  toggleGhost: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleGrayscale: (event: ChangeEvent<HTMLInputElement>) => void;
  setX: (value: number) => void;
  setY: (value: number) => void;
  setScale: (value: number) => void;
  x: number;
  y: number;
  scale: number;
  width: number;
  height: number;
}

const FaceCustomizationFilters: React.FC<FaceCustomizationFiltersProps> = ({
  toggleGhost,
  toggleGrayscale,
  setX,
  setY,
  setScale,
  x,
  y,
  scale,
  width,
  height,
}) => {
  return (
    <StyledFieldset>
      <legend>Step 2. Face customization</legend>
      <StyledInputsWrapper>
        <StyledHalfLabel>
          Ghost Face:
          <StyledInput type="checkbox" defaultChecked={true} onChange={toggleGhost} />
        </StyledHalfLabel>

        <StyledHalfLabel>
          Grayscale:
          <StyledInput type="checkbox" defaultChecked={false} onChange={toggleGrayscale} />
        </StyledHalfLabel>

        <StyledThirdLabel>
          Offset X:
          <StyledBlockInput
            type="range"
            min={-width}
            max={width}
            value={x}
            onChange={(event) => setX(parseInt(event.target.value))}
          />
        </StyledThirdLabel>

        <StyledThirdLabel>
          Offset Y:
          <StyledBlockInput
            type="range"
            min={-height}
            max={height}
            value={y}
            onChange={(event) => setY(parseInt(event.target.value))}
          />
        </StyledThirdLabel>

        <StyledThirdLabel>
          Scale:
          <StyledBlockInput
            type="range"
            min="0"
            max={1}
            step="0.01"
            value={scale}
            onChange={(event) => setScale(parseFloat(event.target.value))}
          />
        </StyledThirdLabel>
      </StyledInputsWrapper>
    </StyledFieldset>
  );
};

export default FaceCustomizationFilters;
