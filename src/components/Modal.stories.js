import React from 'react';
import Modal from "@avrc/modal";
import Button from '@dpl/react-button';

export default {
    title: '@avrc - Modal'
}

export const ShowModal = () => {
  const [isOpen, setOpen] = React.useState(false);

  function toggleModal() {
      setOpen(!isOpen);
  }

  return (
      <div>
      <Button onClick={toggleModal}>Button</Button>
    <Modal onDismiss={() => setOpen(false)} open={isOpen} title="Title">
      Hello World
    </Modal>
    </div>
  );
}