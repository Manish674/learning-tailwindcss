import React from "react";
import Card from "../Card";
import waterfall from "../../assets/images/img-9.jpg";
import islands from "../../assets/images/img-2.jpg";
import sail from "../../assets/images/img-3.jpg";
import ground from "../../assets/images/img-4.jpg";
import desert from "../../assets/images/img-8.jpg";

const bCardData = [
  {
    img: waterfall,
    title: "Explore the hidden waterfall inside the amazon jungle.",
  },
  {
    img: islands,
    title: "Travel through the island of bali in a private cruise.",
  },
];
const cardData = [
  {
    img: sail,
    title: "Set sail in the Atlantic ocean visiting Uncharted water.",
  },
  {
    img: ground,
    title: "Experience footbal on the top of Himalyan mountains",
  },
  {
    img: desert,
    title: "Ride through the Sahara desert on the guided camel tour.",
  },
];
const DestinationPage = () => {
  return (
    <div className="w-full bg-white">
      <h1 className="mt-1 text-3xl font-bold text-center ">
        Check out these EPIC Destinations
      </h1>
      <div className="lg:w-full flex flex-col items-center w-4/5 mx-auto lg:w-3/5">
        <div className="flex flex-col w-full  lg:flex-row lg:w-4/5 justify-center">
          {bCardData.map((el, i) => {
            return <Card key={i} title={el.title} img={el.img} big />;
          })}
        </div>
        <div className="flex flex-col justify-center w-full mb-12 lg:w-4/5 lg:flex-row ">
          {cardData.map((el, i) => {
            return <Card key={i} title={el.title} img={el.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
