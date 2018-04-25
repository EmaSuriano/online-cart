import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  justify-items: center;
  grid: 1fr 1fr 60px/ 1fr;
  justify-content: center;
  max-width: 1500px;
  align-items: baseline;
  grid-gap: 20px;
  margin: auto;
  padding: 20px;
  padding-top: 0;
  height: 100%;
`;

HomeGrid.displayName = 'HomeGrid';

export default HomeGrid;
