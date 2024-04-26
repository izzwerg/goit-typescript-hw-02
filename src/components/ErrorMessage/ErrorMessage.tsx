import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "" }) => {
  return (
    <div className={css.message}>
      <p>
        {message.length > 0
          ? message
          : "Whoops, something went wrong! Please try reloading this page!"}
      </p>
    </div>
  );
};

export default ErrorMessage;