import React, { Component } from "react";
import {
  Container,
  Segment,
  Header,
  Divider,
  Button,
  Pagination,
  Table
} from "semantic-ui-react";
import { data, dataSplit } from "./utils";
import styles from "./Bill.css";

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], activePage: 1 };
  }
  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });
  componentWillMount() {
    this.setState({ data: dataSplit(data, 4) });
  }
  render() {
    const { data, activePage } = this.state;
    return (
      <Container>
        <Header>Control Panel</Header>
        <Segment>
          <Button primary />
          <Button primary />
          <Button primary />
        </Segment>
        <Divider />
        <Header>Data content</Header>
        <Segment>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data[activePage - 1].map(({ id, name, total, date }) => {
                return (
                  <Table.Row>
                    <Table.Cell>{id}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{total}</Table.Cell>
                    <Table.Cell>{date}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Pagination
                    activePage={activePage}
                    onPageChange={this.handlePaginationChange}
                    totalPages={data.length}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Segment>
      </Container>
    );
  }
}
