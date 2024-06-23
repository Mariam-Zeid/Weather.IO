import "./Error.css";
import error from "../../assets/img/error.svg";
export default function Error() {
  return (
    <div className="error fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center gap-12 md:gap-20">
      <img src={error} alt="" className="w-1/5" />
      <h1 className="text-4xl font-semibold text-center">
        Location access needed for weather updates
      </h1>
    </div>
  );
}
