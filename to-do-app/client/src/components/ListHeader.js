import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName }) => {
  const [showModal, setShowModal] = useState(null);
  const signOut = () => {
    console.log("sign out");
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          Add New
        </button>
        <button className="signOut" onClick={signOut}>
          Sign Out
        </button>
        {showModal && <Modal mode={"create"} setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default ListHeader;
