import React from "react";
import profilePicture from "../../img/docs/profile-picture.jpg";
import { ImHome } from 'react-icons/im'
import { IoIosPeople } from 'react-icons/io'
import { TiMessages } from 'react-icons/ti'
import { Link } from "react-router-dom";

export default function UserHomeBar() {
  return (
    <section className="ml-3">
      <div className="flex items-center space-x-4 m-2">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={profilePicture}
            alt="Profile"
          />
        </div>
        <div className="flex-1 m-2">
          <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
            Jane Dow
          </p>
          <p className="text-lg text-gray-500 truncate dark:text-white">
            test@test.com
          </p>
        </div>
      </div>
      <Link className="flex items-center space-x-4 m-2" to="/">
        <div className="">
            <ImHome className="h-12 w-12 fill-midnight dark:fill-white"/>
        </div>
        <div className="">
        <p className="text-lg font-medium text-gray-900 truncate dark:text-white">HOME</p>
        </div>
      </Link>
      <Link className="flex items-center space-x-4 m-2" to="/members">
        <div className="">
            <IoIosPeople className="h-12 w-12 fill-midnight dark:fill-white"/>
        </div>
        <div className="">
        <p className="text-lg font-medium text-gray-900 truncate dark:text-white">MEMBERS</p>
        </div>
      </Link>
      <Link className="flex items-center space-x-4 m-2" to="/messages">
        <div className="">
            <TiMessages className="h-12 w-12 fill-midnight dark:fill-white"/>
        </div>
        <div className="">
        <p className="text-lg font-medium text-gray-900 truncate dark:text-white">MESSAGES</p>
        </div>
      </Link>
    </section>
  );
}
