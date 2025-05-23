import styled from 'styled-components'
import Table from './Table';
import Header from './Header';

function App() {

  return (
    <OuterContainer>
      <Card>
        <Header />
        <Table />
      </Card>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  padding: 1rem 2rem;
  background-color: #FFFDF6;
`;

const Card = styled.div`
background-color: white;
  width: 100%;
  height: 95.5vh;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow-y: scroll;
`;

export default App
