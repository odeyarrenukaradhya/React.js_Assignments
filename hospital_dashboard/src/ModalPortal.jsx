import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
export default function ModalPortal({ children, onClose, ariaLabel = 'dialog' }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  const modalContent = (
    <div className="modal-overlay" role={ariaLabel} aria-modal="true" style={{
      position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.4)', zIndex: 9999
    }}>
      <div style={{ background: '#97ccebff', borderRadius: 8, padding: 18, minWidth: 280, maxWidth: '90%' }}>
        {children}
      </div>
    </div>
  );
  const root = document.getElementById('modal-root');
  if (!root) return null;
  return ReactDOM.createPortal(modalContent, root);
}
