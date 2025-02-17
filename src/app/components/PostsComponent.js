"use client";
import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const PostsComponent = ({
  imageUrl,
  title,
  subtitle,
  userImage,
  userName,
  date,
}) => {
  const description = subtitle;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative bg-[#F5F5F5] ml-[-10px] w-[370px] h-[400px] rounded-lg ">
      <div className="">
        <div className="flex justify-center items-center mt-2">
          <StorageImage
            className="w-[340px] h-[190px] mt-3 object-cover bg-transparent border rounded-md"
            imgKey={imageUrl || "UserAvatar.png"}
          />
          {/* <Image
                        src={imageUrl}
                        alt="Image Alt"
                        width={340}
                        height={190}
                        className="w-[340px] h-[190px] mt-3 object-cover bg-transparent border rounded-md"
                    /> */}
        </div>
      </div>
      <h1 className="text-left text-lg text-[#3E3232] ml-3 mt-4">{title}</h1>
      <h3 className="text-sm text-left text-gray-700 ml-3 mt-4">
        {truncateText(description, 70)}
      </h3>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl w-[95%] h-[67px] mt-6">
          <div className="flex">
            <StorageImage
              className="w-[44px] h-[44px] mt-3 ml-3 object-cover bg-transparent border rounded-xl"
              imgKey={userImage || "UserAvatar.png"}
            />
            {/* <Image
                            alt="User Image"
                            src={userImage}
                            width={50}
                            height={50}
                            className="w-[44px] h-[44px] mt-3 ml-3 object-cover bg-transparent border rounded-xl"
                        /> */}
            <div>
              <h1 className="text-left text-sm font-bold text-black ml-3 mt-3">
                {userName}
              </h1>
              <h1 className="text-left text-sm text-[#3E3232BF]/75 ml-3 mt-1">
                {date}
              </h1>
            </div>
            <ReactSVG
              className="mt-6 text-3xl stroke-[#3E323280] fill-[#3E323280] ml-32"
              src="/svgs/bookmarkicon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsComponent;
