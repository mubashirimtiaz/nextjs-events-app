import Link from "next/link";

const ErrorAlert = ({ children }) => {
  return (
    <div className="text-center">
      <div className="w-full bg-gray-100 p-2 mb-5 text-center">
        <p>{children}</p>
      </div>
      <div>
        <Link href="/events">
          <a className=" p-2 rounded-md border border-gray-300 hover:bg-gray-300 hover:text-white">
            Go back to Events
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorAlert;
