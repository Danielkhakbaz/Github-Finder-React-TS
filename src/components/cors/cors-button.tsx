const CorsButton = () => {
  return (
    <>
      <div className="text-center">
        <div
          className="tooltip"
          data-tip="In order to enable the CORS, Click on the button and then Click on the 'Request temporary access to the demo server' button">
          <button className="btn btn-primary btn-sm lg:btn-md">
            <a
              href="https://cors-anywhere.herokuapp.com/corsdemo"
              target="_blank"
              rel="noreferrer">
              Enable CORS
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CorsButton;
