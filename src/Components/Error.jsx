import "./Error.css";
const Error = ({ setIsError, errorMessage }) => {
  const handleCloseClick = () => {
    setIsError(false);
    errorMessage("");
  };

  return (
    <div className="error__modal">
      <div className="error__overlay"></div>
      <div className="error__ModalContainer">
        <div className="error__ModalContent">
          <h2>Error</h2>
          <p>We apologize for the interruption !!</p>
          <p>{errorMessage}</p>
          <button className="error__CloseModal" onClick={handleCloseClick}>
            {" "}
            x{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Error;
