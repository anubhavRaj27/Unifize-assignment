import styled from "styled-components";
import Table from "./Table";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <OuterContainer>
      <Sidebar />
      <PageContainer>
        <MaxContainer>
          <Header />
          <Table />
        </MaxContainer>
      </PageContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const MaxContainer = styled.div`
  width: 70vw;
  overflow-y: scroll;
  height: 100%;
`;

export default App;
