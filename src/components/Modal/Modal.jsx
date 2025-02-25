import "./Modal.css";
import {Button} from "../Button/Button";
import React, {useRef, useEffect} from 'react';

// 4. Modal Component
// Should support open/close state with animation.
// Allow custom header, body, and footer content.
// Close when clicking outside or pressing Esc.

export const ModalHeader = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['modal-header', className].filter(Boolean).join(' ');
    
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  };

  export const ModalTitle = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['modal-title', className].filter(Boolean).join(' ');
    
    return (
      <h3 className={classes} {...rest}>
        {children}
      </h3>
    );
  };

  export const ModalBody = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['modal-body', className].filter(Boolean).join(' ');
    
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  };

export const ModalFooter = ({
  children,
  className = '',
  ...rest
}) => {
  const classes = ['modal-footer', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
  
  export const ModalCloseButton = ({
    onClose,
    className = '',
    ...rest
  }) => {
    const classes = ['modal-close-button', className].filter(Boolean).join(' ');
    
    return (
      <button
        type="button"
        className={classes}
        onClick={onClose}
        aria-label="Close modal"
        style={{color: "white"}}
        {...rest}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    );
  };


export const Modal = ({
    isOpen,
    onClose,
    size = 'medium',
    closeOnOverlayClick = true,
    closeOnEscape = true,
    preventScroll = true,
    children,
    className = '',
    ...rest
  }, ref) => {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);
    
    // Handle click outside modal
    const handleOverlayClick = (e) => {
      if (closeOnOverlayClick && modalRef.current === e.target) {
        onClose();
      }
    };
    
    // Handle escape key press
    useEffect(() => {
      const handleEscapeKey = (e) => {
        if (closeOnEscape && e.key === 'Escape') {
          onClose();
        }
      };
      
      if (isOpen) {
        document.addEventListener('keydown', handleEscapeKey);
      }
      
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, [isOpen, closeOnEscape, onClose]);
    
    // Prevent body scrolling when modal is open
    useEffect(() => {
      if (preventScroll) {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
      
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen, preventScroll]);
    
    // Focus trap inside modal
    useEffect(() => {
      if (isOpen && modalContentRef.current) {
        // Focus the first focusable element inside the modal
        const focusableElements = modalContentRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    }, [isOpen]);
    
    // Construct class names based on props
    const modalClasses = [
      'modal',
      `modal-${size}`,
      className
    ].filter(Boolean).join(' ');
    
    if (!isOpen) {
      return null;
    }
    
    // Render directly without using createPortal
    return (
      <div 
        ref={modalRef}
        className="modal-overlay"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        <div 
          ref={modalContentRef}
          className={modalClasses}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  };