import { useAlertContext } from "../../providers/alert/AlertContext";

const AlertError = () => {
  const { alert } = useAlertContext();

  return (
    <>
      {alert?.message && (
        <div className="alert alert-error visible">
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-2 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <label>{alert.message}</label>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertError;
