import React from "react";

const Testimonial = () => {
  return (
    <div className="py-10">
      <div className="xl:container m-auto text-gray-600  md:px-12 xl:px-6">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-10 max-w-[510px] text-center">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">
                Customer Says
              </h2>
              <p className="text-base text-gray-600 max-w-md mx-auto">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 rounded-3xl   bg-white p-8 text-center shadow-2xl shadow-gray-600/10">
            <div className="flex h-full flex-col justify-center space-y-4">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <p className="md:text-xl">
                <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat repellat perspiciatis
                excepturi est. Non ipsum iusto aliquam consequatur repellat
                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                repudiandae ad doloribus. <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl sm:flex sm:space-x-8  bg-white  p-8 text-center shadow-2xl shadow-gray-600/10 ">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://randomuser.me/api/portraits/men/18.jpg"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
              <p>
                <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat repellat perspiciatis
                excepturi est. Non ipsum iusto aliquam consequatur repellat
                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                repudiandae ad doloribus. <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl sm:flex sm:space-x-8  bg-white  p-8 text-center shadow-2xl shadow-gray-600/10 ">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
              <p>
                <span className="font-serif">"</span> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat repellat perspiciatis
                excepturi est. Non ipsum iusto aliquam consequatur repellat
                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                repudiandae ad doloribus. <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
