import React from "react";

const Card = ({ img, title, big }) => {
  const maxWidthValue = big ? "lg:max-w-lg" : "lg:max-w-xs";
  return (
    <div
      className={`${maxWidthValue} flex flex-col items-center object-fill w-full mt-8 rounded-tl-lg rounded-tr-lg shadow-2xl lg:mr-4 h-80`}
    >
      <img
        src={img}
        className="w-full rounded-tl-lg rounded-tr-lg h-5/6 object-cover"
      />

      <h3 className="font-bold text-black">{title}</h3>
    </div>
  );
};

export default Card;
