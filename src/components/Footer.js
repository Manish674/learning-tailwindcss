import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white bg-gray-800 ">
      <h3 className="w-4/5 pt-8 mx-auto text-3xl text-center">
        Join the adventure newletter to recieve our best vacation deal
      </h3>
      <h4 className="w-2/3 mx-auto mt-8 mb-8 text-2xl text-center ">
        You can unsubscribe at any time
      </h4>
      <div className="flex flex-col items-center justify-center mx-auto lg:space-x-4 lg:flex-row lg:w-1/2">
        <input
          type="email"
          placeholder="Your mail"
          className="w-2/3 h-8 max-w-lg p-6 font-semibold text-black lg:max-w-sm"
        />
        <button className="w-2/3 max-w-lg p-3 mt-4 mb-4 bg-transparent border border-2 border-white hover:bg-white hover:text-black duration-300 lg:w-48">
          Sub
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-8 lg:flex-row lg:w-4/5 lg:max-w-3xl lg:mx-auto">
        {/*Main Container*/}
        <div className="flex justify-around w-full ">
          {/*Item holder 1*/}
          <div className="mb-mb-44">
            {/*Item 1*/}
            <h3 className="text-2xl font-bold">About us</h3>
            <ul>
              <li>How it works</li>
              <li>Testimonals</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="">
            {/*Item 2*/}
            <h3 className="text-2xl font-bold">Contact us</h3>
            <ul>
              <li>Contact us</li>
              <li>Support </li>
              <li>Destination</li>
              <li>Sponsership</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-around w-full">
          {/*Item holder 2*/}
          <div className="mb-4">
            {" "}
            {/*Item 1*/}
            <h3 className="text-2xl font-bold">Videos</h3>
            <ul>
              <li>Submit Video</li>
              <li>Amabassadors</li>
              <li>Agency</li>
              <li>Influencer</li>
            </ul>
          </div>
          <div className="">
            {/*Item 2*/}
            <h3 className="text-2xl font-bold">Social Media</h3>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 pb-8  space-y-2 max-w-screen-lg lg:justify-around lg:mx-auto md:flex-row">
        <h1 className="text-3xl font-black capitalize">TRVL</h1>
        <h4 className="font-semibold ">TRVL © 2021</h4>
        <div className="flex text-2xl space-x-4">
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillYoutube />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
