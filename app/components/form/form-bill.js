import React, { Component } from "react";
import { Container, Form, Divider, Table } from "semantic-ui-react";
import withModal from "./withModal";

class FormBill extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ name: "Test", amount: 1 }], name: "", amount: 0 };
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, amount } = this.state;
    this.setState({ data: [...this.state.data, { name, amount }] });
  };

  render() {
    const { name, amount, data } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Drug Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Amount"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
            <Form.Button content="Add" />
          </Form.Group>
        </Form>
        <Divider />
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Drug Name</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({ name, amount }) => {
              return (
                <Table.Row>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{amount}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default withModal(FormBill);
