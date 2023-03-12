import { useState } from "react";

const Modal = ({ mode, setShowModal }) => {
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="You're title goes here"
            name="title"
            value={data.title}
            onchange={handleChange}
          />
          <br />
          <label for="range">Drag to select your current progress</label>
          <input
            id="range"
            type="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onchange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
