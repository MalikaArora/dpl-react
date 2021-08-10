import React, { useRef, useEffect, useCallback, Children } from 'react';
// import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Logo from './images/logo.svg';
const Background = styled.div`
top: 0;
left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

 const ModalWrapper = styled.div`

  width: 600px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

 const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

 const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
      padding: 0.5rem;
    margin-bottom: 1rem;
    align-items: center;
    text-align: center;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

 const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal ({ showModal, setShowModal }, props) {
    console.log(showModal);

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <div>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper showModal={showModal}>
                        {/* <ShowModal></ShowModal> */}
                        <ModalImg src={Logo} alt='camera' />
              <ModalContent>
                <h3>We create a healthier world.</h3>
                <p>One insight, one connection, one person at a time.</p>
                <button>Join Now</button>
              </ModalContent>
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </Background>
            ) : null}
        </div>
    );
}
export default Modal;
export {ModalWrapper, ModalImg, ModalContent, CloseModalButton, Logo};
// export Modal;