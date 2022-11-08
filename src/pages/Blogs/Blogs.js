import React from "react";

const Blogs = () => {
  return (
    <div className="py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-1 w-full">
          <div className="p-5 bg-emerald-100">
            <h1 className="text-xl font-bold">Frequently Asked Questions</h1>

            <ul className="my-3 text-sm flex flex-col gap-2">
              <li>✅Difference between SQL and NoSQL</li>
              <li>✅What is JWT, and how does it work?</li>
              <li>✅What is the difference between javascript and NodeJS?</li>
              <li>
                ✅How does NodeJS handle multiple requests at the same time?
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 w-full ">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 ">
              <h1 className="text-xl text-gray-800">
                What is JWT, and how does it work?
              </h1>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="p-5 ">
              <h1 className="text-xl text-gray-800">
                What is the difference between javascript and NodeJS?
              </h1>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue.
              </p>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                If NodeJS can process the request without I/O blocking then the
                event loop would itself process the request and sends the
                response back to the client by itself. But, it is possible to
                process multiple requests parallelly using the NodeJS cluster
                module or worker_threads module.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="p-5 ">
              <h1 className="text-xl text-gray-800">
                What is the difference between javascript and NodeJS?
              </h1>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                NodeJS is a cross-platform and opensource Javascript runtime
                environment that allows the javascript to be run on the
                server-side. Nodejs allows Javascript code to run outside the
                browser. Nodejs comes with a lot of modules and mostly used in
                web development.
              </p>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                Javascript is a Scripting language. It is mostly abbreviated as
                JS. It can be said that Javascript is the updated version of the
                ECMA script. Javascript is a high-level programming language
                that uses the concept of Oops but it is based on prototype
                inheritance.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="p-5 ">
              <h1 className="text-xl text-gray-800">
                Difference between SQL and NoSQL
              </h1>
              <p className=" text-sm mt-2 text-gray-500 max-w-lg">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
