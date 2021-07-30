import React, { useRef, useEffect, useCallback } from 'react';
import Logo from './images/logo.svg';

// import {Modal, ModalWrapper, ModalImg, ModalContent, CloseModalButton, Logo} from './index';
import Modal from './index';
  import ModalWrapper from './index';
  import ModalImg from './index';
  import ModalContent from './index';
  import CloseModalButton from './index';
function RenderModal(props){
  

  return (
    <>
    show2
    <Modal  showModal={props.showModal} setShowModal={props.setShowModal}>
      show
              <ModalImg src={Logo} alt='camera' />
              <ModalContent>
                <h3>We create a healthier world.</h3>
                <p>One insight, one connection, one person at a time.</p>
                <button>Join Now</button>
              </ModalContent>
       </Modal> 
    </>
  );
};


export default RenderModal;