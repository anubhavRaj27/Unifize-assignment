import styled from "styled-components";
import Table from "./components/Table";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TopActions from "./components/TopActions";

function App() {
  return (
    <OuterContainer>
      <Sidebar />
      <PageContainer>
        <MaxContainer>
          <TopActions />
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
