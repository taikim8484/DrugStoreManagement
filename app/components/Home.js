// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.css";
import { Button } from "semantic-ui-react";
type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Button primary />
      </div>
    );
  }
}
