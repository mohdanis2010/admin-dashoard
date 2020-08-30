import React from "react";
import { Link } from "react-router-dom";
import { Td, Th, TableContainer, Thead, SearchStatus } from "../../AppStyle";

const Table = ({ data, onHeaderClick, deleteCustomer }) => {
  if (!data.length) {
    return <SearchStatus>No matching customer.</SearchStatus>;
  }
  return (
    <TableContainer>
      <Thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <Th key={index} onClick={() => onHeaderClick(key)}>
              {key.toUpperCase()}
            </Th>
          ))}
          <Th>Actions</Th>
        </tr>
      </Thead>
      <tbody>
        {data.map((member) => {
          return (
            <>
              <tr key={member.id}>
                {Object.values(member).map((value) => (
                  <Td key={value}>{value}</Td>
                ))}
                <Td>
                  <div>
                    <Link to={`edit/${member.id}`}>
                      <button className="btn-small">Edit</button>
                    </Link>
                    <button
                      className="btn-small"
                      onClick={() => deleteCustomer(member.id)}
                    >
                      Delete
                    </button>
                  </div>
                </Td>
              </tr>
            </>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

export default Table;
