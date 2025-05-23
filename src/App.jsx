import styled from 'styled-components'
import Table from './Table';

function App() {

  return (
    <OuterContainer>
      <Card>
        <Header>
          Transactions
        </Header>
        <Table />
      </Card>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  padding: 1rem;
`;

const Card = styled.div`
  width: 100%;
  height: 95.5vh;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: 1px solid black;
  border-radius: 4px;
`;

const Header = styled.div`
  text-align: left;
  display: flex;
  font-size: 24px;
  padding: 16px 24px;
`;

export default App
