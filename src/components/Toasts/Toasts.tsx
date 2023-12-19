import "./Toast.scss";
type ToastsProp = {
  toast: string;
};
export default function Toasts({ toast }: ToastsProp) {
  return (
    <>
      <div className="toasts">
        <div className="toast-body">{toast}</div>
      </div>
    </>
  );
}
