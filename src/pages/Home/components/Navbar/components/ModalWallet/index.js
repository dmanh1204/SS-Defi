import React, { useCallback } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import assets from '../../../../../../assets';
import './style.scss';

const ModalConnectApp = ({ isShowing, hide }) => {
    const handleClose = () => {
        hide();
    };

    return isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className="modal-overlay" />
                  <div className="modal-wrapper-wallet" aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div
                          className="modal"
                          onClick={(event) => {
                              event.stopPropagation();
                          }}
                      >
                          <div className="modal-header">
                              <p className="fz-20 fw-7">Select App</p>

                              <div className="modal-close" onClick={handleClose}>
                                  <img src={assets.svg.iconClose} alt="close" style={{ height: 15, width: 15 }} />
                              </div>
                          </div>
                          <div className="modal-body row j-center g-50">
                              <a
                                  href="app.starksport.finance/exchange"
                                  target="_blank"
                                  className="wallet-icon-inactive a-center g-5"
                              >
                                  <p className="fz-18 fw-7">Exchange</p>
                              </a>
                              <a
                                  href="app.starksport.finance/marketplace"
                                  target="_blank"
                                  className="wallet-icon-inactive col a-center g-5"
                              >
                                  <p className="fz-18 fw-7">Marketplace</p>
                              </a>
                          </div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;
};

export default ModalConnectApp;
