import styled from "styled-components";

const MainContent = styled.div`
  flex-grow: 2;
  padding: 20px;
`;

const TableContainer = styled.table`
  table-layout: auto;
  width: 100%;
  margin: 20px 0 20px 0;
  border-collapse: collapse;
`;

const Caption = styled.caption`
  padding: 5px;
  caption-side: top;
  color: #666;
  text-align: left;
  letter-spacing: 1px;
`;
const Pagination = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  flex-basis: 40%;
  -ms-flex: auto;
  width: 500px;
    
`;

const Thead = styled.thead`
  background-color: #F0F0F0;
  font-size: 14px;
  padding: 8px;
  text-align: left;
  cursor:pointer;
  
`;

const Td = styled.td`
  border: 1px solid #E8E8E8;
  background-color: #FFFFFF;
  padding: 8px;
  text-align: left;
`;

const SearchStatus = styled.div`
  color: #282828;
  padding: 9px;
  text-align: left;
  border: 1px solid #BFEFFF;
  background-color: #F0F8FF;
`;

const Th = styled.th`
  border: 1px solid #DCDCDC;
  padding: 8px;
`;

const PaginationContent = styled.div`
  margin-left: 20px;
  margin-top:8px;
  font-size: 15px;
`;

const Text = styled.div`
  font-size: 16px;
  color: #68838B;
  padding:  0 0 10px 0;
  margin-bottom: 20px;
`;

const SuccessMessage = styled.div`
  width: 100%;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const styles = {
  table: {
    tableLlayout: "fixed",
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid"
  }
};

export {
  MainContent,
  TableContainer,
  Caption,
  Thead,
  Td,
  Th,
  Text,
  styles,
  Pagination,
  PaginationContent,
  SuccessMessage,
  SearchStatus
}