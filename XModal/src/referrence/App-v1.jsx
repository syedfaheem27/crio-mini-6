import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import UserForm from "./components/UserForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const openModal = (e) => {
    e.stopPropagation()
    setIsOpen(true);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const parent = e.target.closest(".modal-content");

      if (parent === ref.current) return;

      setIsOpen(false);
    };

    if (!ref) return;

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  });

  return (
    <>
      <header>
        <h1>User Details Modal</h1>
      </header>
      <button onClick={openModal}>Open Form</button>
      {isOpen &&
        createPortal(
          <div className="modal">
            <div className="modal-content" ref={ref}>
              <UserForm />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default App;
