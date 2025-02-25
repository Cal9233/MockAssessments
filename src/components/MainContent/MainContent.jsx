import React, {useEffect, useRef} from 'react';
import { Modal, ModalHeader, ModalFooter, ModalCloseButton, ModalBody, ModalTitle } from '../Modal/Modal';
import { Button } from "../Button/Button";
import { useAppContext } from '../../Context/AppContext';
import { Card } from '../Card/Card';
import { Input } from '../Input/Input';
import OutputView from '../OutputView/OutputView';
import "./MainContent.css"

const MainContent = () => {
  const { 
    isOpen, 
    isModalOpen, 
    handleModalOpen, 
    handleModalClose,
    handleSubmit,
    setIsModalOpen,
    typeValue,
    handleTypeChange
  } = useAppContext();
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  const clickOutsideEvent = (e) => {
    if(modalRef.current && !modalRef.current.contains(e.target)) handleModalClose();
  }

  const handleClickOutside = (e) => {
    e.stopPropagation();
  }

  useEffect(() => {
    if(isModalOpen) document.addEventListener("mousedown", clickOutsideEvent);

    return () => document.removeEventListener("mousedown", clickOutsideEvent);
  }, [isModalOpen]);

  return (
    <div className={`content-container ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="component-container">
        {!isModalOpen && (<Button onClick={handleModalOpen}>Open Modal</Button>)}
        {isModalOpen && (
          <div className="modal-wrapper" ref={modalRef} onClick={handleClickOutside}>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              size="medium"
            >
              <ModalHeader>
                <ModalTitle>User Information</ModalTitle>
                <ModalCloseButton onClose={() => setIsModalOpen(false)} />
              </ModalHeader>
              
              <ModalBody>
                <Input
                  label="Name"
                  name="name"
                  value={typeValue.name}
                  onChange={handleTypeChange }
                  placeholder="Enter your name"
                  fullWidth
                  style={{ marginBottom: '1rem' }}
                />
                
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={typeValue.email}
                  onChange={handleTypeChange }
                  placeholder="Enter your email"
                  fullWidth
                />
              </ModalBody>
              
              <ModalFooter>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  id="id-button"
                  style={{color: "white"}}
                  variant="primary" 
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainContent