import "./FutureWorks.css";
const FutureWorks = ({ setIsModalMenuOpen }) => {
  const handleCloseClick = () => {
    setIsModalMenuOpen(false);
  };

  return (
    <div className="futureWorks__modal">
      <div className="futureWorks__overlay"></div>
      <div className="futureWorks__ModalContainer">
        <div className="futureWorks__ModalContent">
          <h2>Coming Soon...</h2>
          <p>Please Visit Us Soon. Coding in Progress</p>
          <button
            className="futureWorks__CloseModal"
            onClick={handleCloseClick}
          >
            {" "}
            x{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default FutureWorks;
