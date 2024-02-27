/** @format */

import React from "react";

const UserCard = ({
  avatar_url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  name = "Ahmed",
  bio,
  html_url,
  public_repos,
  followers,
  following,
  location,
}) => {
  return (
    <div className=" h-auto max-w-sm  m-5 flex flex-col  drop-shadow-md   items-center rounded-lg border-2 border-transparent bg-white justify-center">
      <div className="p-5 flex flex-col items-center justify-around">
        <img src={avatar_url} className="rounded-full  w-32 h-32 m-5" alt={avatar_url} />
        <span className="text-lg">{name}</span>
        <span className="text-md  text-center text-gray-400">{bio}</span>
        <div className=" flex-col flex items-start">
          <span>
            GitHub Link:
            <a className="text-blue-400 hover:underline" href={html_url}>
              {html_url}
            </a>
          </span>
          <span>Number of repos:{public_repos}</span>
          <span>Followers:{followers}</span>
          <span>Following:{following}</span>
          <span>Location:{location}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
