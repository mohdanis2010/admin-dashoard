import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import axios from "axios";
import { SuccessMessage, Text } from "../../AppStyle";

export interface IValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

export interface IFormState {
  [key: string]: any;
  values: IValues[];
  submitSuccess: boolean;
  loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      values: [],
      loading: false,
      submitSuccess: false,
      errors: false,
    };
  }

  private processFormSubmission = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    this.setState({ loading: true });

    const formData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      description: this.state.description,
    };

    const checkInputs = Object.keys(formData)
      // @ts-ignore: Unreachable code error
      .map((item) => formData[item] !== "")
      .every((d) => d === true);

    this.setState({
      submitSuccess: true,
      values: [...this.state.values, formData],
      loading: false,
      errors: false,
    });

    if (!checkInputs) {
      this.setState({ errors: true });
    } else {
      axios.post(`http://localhost:5000/customers`, formData).then((data) => [
        setTimeout(() => {
          this.props.history.push("/");
        }, 1000),
      ]);
    }
  };

  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  public render() {
    const { submitSuccess, loading, errors } = this.state;
    return (
      <div>
        <div className={"form-wrapper"}>
          <h2> Create New Customer  </h2>
          
            <Text>
              All fields are mandatory*
            </Text>
         
          {!errors && submitSuccess && (
            <SuccessMessage>
              The form was successfully submitted!
            </SuccessMessage>
          )}

          <form
            id={"create-customer-form"}
            onSubmit={this.processFormSubmission}
            noValidate={true}
          >
            <label htmlFor="first_name"> First Name </label>
            <input
              type="text"
              id="first_name"
              onChange={(e) => this.handleInputChanges(e)}
              name="first_name"
              required
              placeholder="Enter customer's first name"
            />

            <label htmlFor="last_name"> Last Name </label>
            <input
              type="text"
              id="last_name"
              onChange={(e) => this.handleInputChanges(e)}
              name="last_name"
              required
              placeholder="Enter customer's last name"
            />

            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              onChange={(e) => this.handleInputChanges(e)}
              name="email"
              required
              placeholder="Enter customer's email address"
            />

            <label htmlFor="phone"> Phone </label>
            <input
              type="text"
              id="phone"
              onChange={(e) => this.handleInputChanges(e)}
              name="phone"
              required
              placeholder="Enter customer's phone number"
            />

            <label htmlFor="address"> Address </label>
            <input
              type="text"
              id="address"
              onChange={(e) => this.handleInputChanges(e)}
              name="address"
              required
              placeholder="Enter customer's address"
            />

            <label htmlFor="description"> Description </label>
            <input
              type="text"
              id="description"
              onChange={(e) => this.handleInputChanges(e)}
              name="description"
              required
              placeholder="Enter Description"
            />

            {errors && (
              <div className="error">Please fill all the required details</div>
            )}
            <button type="submit">Create Customer</button>
            {loading && <span>Loading...</span>}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Create);
