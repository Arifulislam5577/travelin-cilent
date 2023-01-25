import React from "react";

const Blog = () => {
  return (
    <section className="lg:py-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-10 max-w-[510px] text-center">
              <h2 className="text-3xl font-bold mb-2">Our Recent Blogs</h2>
              <p className="text-base text-gray-600 max-w-md mx-auto">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-4 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary inline-block rounded py-1 text-center text-xs font-semibold leading-loose text-emerald-900">
                  Dec 22, 2023
                </span>
                <h3>
                  <a
                    href="/"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Discovering Unique Culture on Tour
                  </a>
                </h3>
                <p className="text-body-color text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-4 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1482951486181-13a752dbbd52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary inline-block rounded py-1 text-center text-xs font-semibold leading-loose text-emerald-900">
                  Mar 15, 2023
                </span>
                <h3>
                  <a
                    href="/"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Adventurous Tour: A Life Changing Experience
                  </a>
                </h3>
                <p className="text-body-color text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-4 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1532904852347-f4e5e1d80751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary inline-block rounded py-1 text-center text-xs font-semibold leading-loose text-emerald-900">
                  Jan 05, 2023
                </span>
                <h3>
                  <a
                    href="/"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Tour Planning: Budgeting and Packing Tips
                  </a>
                </h3>
                <p className="text-body-color text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
