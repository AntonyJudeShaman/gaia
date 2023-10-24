import React from "react";
import { LightBox } from "./light-box";

function Questions() {
  return (
    <div className="mb-10">
      <div className="relative overflow-hidden rounded-lg border bg-background p-2 mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[75rem] md:grid-cols-1">
        <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
          <div className="  mt-1 text-center mx-auto d-block">
            <p className="text-4xl font-heading font-semibold text-gradient" aria-label="Still have questions">
              Still have questions?
            </p>
            <LightBox className=" md:mt-5 mt-5" />
          </div>

          <p className=" md:text-lg text-md  text-center mt-5 mb-5 sub-gradient font-semibold">
            Unlock the door to your dream project today! Our experts are here to
            bring your vision to life. Reach out now and let&apos;s get started on
            your design journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
