import React from "react";
import { LightBox } from "./light-box";

function Questions() {
  return (
    <div className="mb-10">
      <div className="relative overflow-hidden rounded-lg border border-gray-400 mt-10 bg-gray-200 p-2 mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[75rem] md:grid-cols-1">
        <div className="flex h-[280px] flex-col mx-auto justify-between rounded-md p-6">
          <div className="  mt-1 text-center mx-auto d-block">
            <p className="text-4xl font-heading font-semibold " aria-label="Still have questions">
              Any questions?
            </p>
            <LightBox className=" md:mt-5 mt-5" />
            <p className=" md:text-lg text-md  text-center mt-8 text-muted-background  font-semibold">
            Reach out now and let&apos;s get started on
            your journey.
          </p>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Questions;
