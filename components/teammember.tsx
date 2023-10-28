import React from "react";

interface TeamMemberProps {
  name: string;
  imageSrc: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, imageSrc, description }) => {
  return (
    <div className="bg-gray-200  max-w-[78rem] border border-gray-400 p-4 rounded-lg shadow-lg ">
      <div className="mt-5 p-5 mx-auto">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-40 object-cover object-center rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
