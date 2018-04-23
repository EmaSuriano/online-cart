import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  justify-items: center;
  grid: 300px 1fr 300px/ 1fr;
  justify-content: center;
  max-width: 1500px;
  align-items: center;
  margin: auto;
  padding: 20px;
  height: 100%;
`;

HomeGrid.displayName = 'HomeGrid';

export default HomeGrid;
