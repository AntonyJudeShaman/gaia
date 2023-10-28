import React from "react";
import Link from "next/link";

interface ServiceProps {
  title: string;
  to: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ title, to, description }) => {
  return (
    <div className="max-w-[25rem] m-3 bg-slate-50 hover:bg-slate-100 border border-gray-400 p-4 rounded-lg shadow-lg">
      <Link href={to}>
        <div className="mt-5 p-5 mx-auto">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Service;
