/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="flex items-center h-screen p-16  dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-[#187E89]">
                        <span className="sr-only ">Error</span>404
                    </h2>
                    <p className="text-2xl text-[#aaaaaa] font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">Back to homepage.</p>
                    <Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-[#187E89] hover:bg-[#0f575f] text-white">Homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;