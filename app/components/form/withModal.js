import React from "react";
import { Button, Header, Image, Modal, Container } from "semantic-ui-react";

const withModal = Form => {
  class ModalWrapper extends React.PureComponent {
    render() {
      return (
        <Modal trigger={<Button>New</Button>}>
          <Modal.Header />
          <Modal.Content>
            <Form />
          </Modal.Content>
        </Modal>
      );
    }
  }
  return ModalWrapper;
};
export default withModal;
