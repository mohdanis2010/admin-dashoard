import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import PaginationFilter from "./PaginationFilter";

interface IState {
  customers: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { customers: [] };
  }

  public componentDidMount(): void {
    axios.get(`http://localhost:5000/customers`).then((data) => {
      this.setState({ customers: data.data });
    });
  }

  public deleteCustomer = (id: number) => {
    axios.delete(`http://localhost:5000/customers/${id}`).then((data) => {
      const index =
        this.state &&
        this.state.customers.findIndex((customer) => customer.id === id);
      this.state.customers.splice(index, 1);
      this.props.history.push("/");
    });
  };

  public render() {
    const customers = this.state.customers;

    return (
      <div>
        {customers.length === 0 && (
          <div className="text-center">
            <h2>No customer found at the moment</h2>
          </div>
        )}

        <div className="container">
          <div className="row">
            <PaginationFilter
              customers={customers}
              deleteCustomer={this.deleteCustomer}
            />
          </div>
        </div>
      </div>
    );
  }
}
