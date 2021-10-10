import styled from '@emotion/styled';
import Loader from 'react-loader-spinner';

export const Wrapper = styled.div`
  position: relative;
  width: 25%;
  margin-left: 200px;

  opacity: ${props => (props.transparent ? 0.5 : 1)};
`;

export const StyledLoader = styled(Loader)`
  position: absolute;
  top: 100px;
  left: 100px;
`;
