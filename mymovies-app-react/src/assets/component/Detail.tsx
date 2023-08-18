import React, { Component } from "react";

interface DetailProps {
  isOpen: boolean;
  onClose: React.MouseEventHandler;
  children?: React.ReactNode;
}

class Detail extends Component<DetailProps> {
  render() {
    const { isOpen, onClose, children } = this.props;

    const preference = {
      modalOverlay: isOpen
        ? "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        : "hidden",
      modalContent: isOpen
        ? "bg-white p-4 rounded-md shadow-md grid justify-items-center"
        : "hidden",
    };

    return (
        <div className={preference.modalOverlay} onClick={onClose}>
          <div className={preference.modalContent}>{children}</div>
        </div>
    );
  }
}

export default Detail;
