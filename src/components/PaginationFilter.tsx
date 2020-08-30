import React, { useState, useEffect } from "react";
import Table from "./customer/Table";
import { MainContent, Pagination, PaginationContent } from "../AppStyle";

export default function PaginationFilter({ customers, deleteCustomer }: any) {
  const [members, setMembers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortKey, setSortKey] = useState("");
  const [isSortAscending, setIsSortAscending] = useState(true);
  const [pageSize] = useState(6);

  useEffect(() => {
    setMembers(customers);
  }, [customers]);

  function getFilteredMembers() {
    if (!members) {
      return [];
    }
    // @ts-ignore: Unreachable code error
    let membersList = Object.values(members);
    if (filter) {
      membersList = membersList.filter(
        (member: any) => member.first_name === filter
      );
    }

    if (searchTerm) {
      membersList = membersList.filter((member) => {
        // @ts-ignore: Unreachable code error
        return Object.values(member).some((value) =>
          (value + "").toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    if (sortKey) {
      membersList.sort((a: any, b: any) => {
        let result = 0;
        if (a[sortKey] < b[sortKey]) {
          result = -1;
        } else if (a[sortKey] > b[sortKey]) {
          result = 1;
        }
        if (!isSortAscending) {
          result = -result;
        }
        return result;
      });
    }

    return membersList.slice(
      pageNumber * pageSize,
      pageNumber * pageSize + pageSize
    );
  }

  const filteredMembers = getFilteredMembers();
  const pageCount = Math.ceil(customers.length / pageSize);
  return (
    <MainContent>
      <label className="search-text">
        Search Customer:
        <input
          name="search"
          type="search"
          value={searchTerm || ""}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPageNumber(0);
          }}
        />
      </label>
      <Table
        data={filteredMembers}
        deleteCustomer={deleteCustomer}
        onHeaderClick={(columnName: string) => {
          if (columnName === sortKey) {
            setIsSortAscending(!isSortAscending);
          } else {
            setSortKey(columnName);
            setIsSortAscending(true);
          }
        }}
      />

      {!!filteredMembers.length && (
        <Pagination>
          <button
            className={`${
              pageNumber === 0 ? "pagination-btn-disabled" : "pagination-btn"
            }`}
            disabled={pageNumber === 0}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>

          <div className="col-md-1">
            <button
              className={`${
                pageNumber == pageCount - 1
                  ? "pagination-btn-disabled"
                  : "pagination-btn"
              }`}
              disabled={pageNumber == pageCount - 1}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>

          <PaginationContent>
            Total pages: <strong>{pageCount}</strong>
          </PaginationContent>
        </Pagination>
      )}
    </MainContent>
  );
}
