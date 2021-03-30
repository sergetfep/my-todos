import React from 'react';
import styles from './Modal.module.css';

export class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>
        {this.state.isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalBody}>
              <h1>Modal title</h1>
              <p>I'm a modal!</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
