import "./Loading.css";
export default function Loading() {
  return (
    <div className="loading fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
}
