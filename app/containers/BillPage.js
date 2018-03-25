// @flow
import React, { Component } from "react";
import Bill from "../components/Bill";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import purple from "material-ui/colors/purple";

const muiTheme = createMuiTheme({
  palette: {
    accent1Color: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    }
  }
});
type Props = {};

export default class BillPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Bill />
      </MuiThemeProvider>
    );
  }
}
