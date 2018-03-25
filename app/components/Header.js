// @flow
import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import styles from "./Header.css";
import Bill from "./Bill";
const listTab = [
  {
    menuItem: "Hóa đơn",
    render: () => (
      <Tab.Pane as="div">
        <Bill />
      </Tab.Pane>
    )
  },
  { menuItem: "Thuốc", render: () => <Tab.Pane as="div">Content 2</Tab.Pane> },
  {
    menuItem: "Khách hàng",
    render: () => <Tab.Pane as="div">Content 3</Tab.Pane>
  }
];

class TabHeader extends Component {
  state = {};
  render() {
    return <Tab menu={{ pointing: true, secondary: true }} panes={listTab} />;
  }
}

export default TabHeader;
