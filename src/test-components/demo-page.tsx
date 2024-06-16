import React from "react";

export default function DemoPage({ label = "Demo Page" }) {
  const none = () => {
    return null;
  };

  return (
    <>
      {" "}
      <h1 className="text-2xl font-bold">{label}</h1>
      <div className="flex w-screen h-screen text-gray-700">
        <div className="flex flex-col items-center flex-shrink-0 w-16 py-3 bg-gray-200 border-r border-gray-300">
          <a
            className="w-10 h-10 bg-gray-400 rounded-lg hover:bg-gray-500"
            href="#"
          ></a>
          <a
            className="w-10 h-10 mt-4 bg-gray-400 border-4 border-gray-200 rounded-lg shadow-outline"
            href="#"
          ></a>
          <a
            className="relative w-10 h-10 mt-4 bg-gray-400 rounded-lg hover:bg-gray-500"
            href="#"
          >
            <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-blue-400 rounded-full"></span>
          </a>
          <a
            className="w-10 h-10 mt-4 bg-gray-400 rounded-lg hover:bg-gray-500"
            href="#"
          ></a>
          <a
            className="flex items-center justify-center w-10 h-10 mt-4 bg-transparent rounded-lg hover:bg-gray-400"
            href="#"
          >
            <svg
              className="w-6 h-6 fillCurrent"
              fill="currentcolor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col flex-shrink-0 w-64 bg-gray-100 border-r border-gray-300">
          <button className="relative flex-shrink-0 text-sm focus:outline-none group">
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
              <span className="font-medium">Dropdown</span>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-300"
                href="#"
              >
                Menu Item 1
              </a>
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-300"
                href="#"
              >
                Menu Item 1
              </a>
              <a
                className="w-full px-4 py-2 text-left hover:bg-gray-300"
                href="#"
              >
                Menu Item 1
              </a>
            </div>
          </button>
          <div className="flex-grow h-0 overflow-auto">
            <div className="mt-3">
              <a
                className="flex items-center h-8 px-3 text-sm hover:bg-gray-300"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span className="ml-2 leading-none">Threads</span>
              </a>
              <a
                className="flex items-center h-8 px-3 text-sm hover:bg-gray-300"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span className="ml-2 font-bold leading-none">All DMs</span>
              </a>
              <a
                className="flex items-center h-8 px-3 text-sm hover:bg-gray-300"
                href="#"
              >
                <span className="w-4 leading-none">@</span>
                <span className="ml-2 leading-none">Mentions & Reactions</span>
              </a>
              <a
                className="flex items-center h-8 px-3 text-sm hover:bg-gray-300"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span className="ml-2 leading-none">Saved Items</span>
              </a>
              <a
                className="flex items-center h-8 px-3 text-sm hover:bg-gray-300"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
                <span className="ml-2 leading-none">More</span>
              </a>
            </div>
            <div className="mt-4">
              <div className="flex items-center h-8 px-3 group">
                <button
                  id="channels_toggle"
                  className="flex items-center flex-grow focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium leading-none">
                    Channels
                  </span>
                </button>
                <button className="items-center justify-center hidden w-6 h-6 ml-auto rounded group-hover:flex hover:bg-gray-300">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center w-6 h-6 ml-1 rounded hover:bg-gray-300">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div id="channels_list">
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm bg-gray-300"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-bold leading-none">
                    council-of-elrond
                  </span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 leading-none">the-fellowship</span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 leading-none">and-another</span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-bold leading-none">
                    second-breakfast-fans
                  </span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 leading-none">anduril-smithy-club</span>
                </a>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center h-8 px-3 group">
                <button
                  id="messages_toggle"
                  className="flex items-center flex-grow focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium leading-none">
                    Direct Messages
                  </span>
                </button>
                <button className="items-center justify-center hidden w-6 h-6 ml-auto rounded group-hover:flex hover:bg-gray-300">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center w-6 h-6 ml-1 rounded hover:bg-gray-300">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div id="messages_list">
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <div className="flex justify-center w-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                  <span className="ml-2 font-bold leading-none">
                    Frodo Baggins
                  </span>
                  <span className="flex items-center justify-center h-5 px-2 ml-auto text-xs font-medium text-white bg-blue-500 rounded-full">
                    3
                  </span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <div className="flex justify-center w-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                  <span className="ml-2 leading-none">Gandalf The Grey</span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <div className="flex justify-center w-4">
                    <span className="w-2 h-2 border-2 border-gray-500 rounded-full"></span>
                  </div>
                  <span className="ml-2 leading-none text-gray-500">
                    Gimli son of Gloin
                  </span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <div className="flex items-center justify-center w-4 h-4 bg-gray-600 rounded">
                    <span className="text-xs text-white">2</span>
                  </div>
                  <span className="ml-2 font-bold leading-none">
                    Pippin, Merry
                  </span>
                  <span className="flex items-center justify-center h-5 px-2 ml-auto text-xs font-medium text-white bg-blue-500 rounded-full">
                    1
                  </span>
                </a>
                <a
                  className="flex items-center h-8 pl-8 pr-3 text-sm hover:bg-gray-300"
                  href="#"
                >
                  <div className="flex items-center justify-center w-4 h-4 bg-gray-600 rounded">
                    <span className="text-xs text-white">3</span>
                  </div>
                  <span className="ml-2 leading-none">
                    Galadriel, Elrond, Arwen
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-4 bg-white border-b border-gray-300">
            <div>
              <h1 className="text-sm font-bold leading-none">
                #council-of-elrond
              </h1>
              <span className="text-xs leading-none">
                Let's sort this ring thing out hey!?!
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-grow overflow-auto">
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Sam</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">Anyone know if Frodo is awake yet?</p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🤷</span>
                    <span className="ml-1 font-medium">2</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <hr className="w-full" />
              <span className="flex items-center justify-center h-6 px-3 mx-auto -mt-3 text-xs font-semibold bg-white border rounded-full">
                Today
              </span>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Elrond</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  Strangers from distant lands, friends of old. You have been
                  summoned here to answer the threat of Mordor. Middle-Earth
                  stands upon the brink of destruction. None can escape it. You
                  will unite or you will fall. Each race is bound to this
                  fate–this onE doom. (gestures to the pedestal) Bring forth the
                  Ring, Frodo.
                </p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>❤️</span>
                    <span className="ml-1 font-medium">5</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Boromir</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">So it is true…</p>
                <p className="text-sm">
                  It is a gift. A gift to the foes of Mordor. Why not use this
                  Ring? (paces) Long has my father, the Steward of Gondor, kept
                  the forces of Mordor at bay. By the blood of our people are
                  your lands kept safe! Give Gondor the weapon of the Enemy. Let
                  us use it against him!
                </p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>👎</span>
                    <span className="ml-1 font-medium">1</span>
                  </button>
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🤔</span>
                    <span className="ml-1 font-medium">3</span>
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="flex-shrink-0 w-6 h-6 ml-1 bg-gray-300 rounded"></div>
                  <a
                    className="ml-1 text-xs font-medium text-blue-600"
                    href="#"
                  >
                    4 replies
                  </a>
                  <span className="ml-1 text-xs text-gray-600">
                    Last reply today at 03:45
                  </span>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Aragorn</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  You cannot wield it! None of us can. The One Ring answers to
                  Sauron alone. It has no other master.
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Boromir</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  And what would a ranger know of this matter?
                </p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>😲</span>
                    <span className="ml-1 font-medium">2</span>
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="flex-shrink-0 w-6 h-6 ml-1 bg-gray-300 rounded"></div>
                  <a
                    className="ml-1 text-xs font-medium text-blue-600"
                    href="#"
                  >
                    4 replies
                  </a>
                  <span className="ml-1 text-xs text-gray-600">
                    Last reply today at 03:45
                  </span>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Legolas</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  This is no mere ranger. He is Aragorn, son of Arathorn. You
                  owe him your allegiance.
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Boromim</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">Aragorn? This… is Isildur’s heir?</p>
                <div className="flex items-center mt-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="flex-shrink-0 w-6 h-6 ml-1 bg-gray-300 rounded"></div>
                  <div className="flex-shrink-0 w-6 h-6 ml-1 bg-gray-300 rounded"></div>
                  <a
                    className="ml-1 text-xs font-medium text-blue-600"
                    href="#"
                  >
                    3 replies
                  </a>
                  <span className="ml-1 text-xs text-gray-600">
                    Last reply today at 03:45
                  </span>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Boromir</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  Gondor has no king. Gondor needs no king.
                </p>
                <div className="flex items-center mt-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="flex-shrink-0 w-6 h-6 ml-1 bg-gray-300 rounded"></div>
                  <a
                    className="ml-1 text-xs font-medium text-blue-600"
                    href="#"
                  >
                    4 replies
                  </a>
                  <span className="ml-1 text-xs text-gray-600">
                    Last reply today at 03:45
                  </span>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Gandalf</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">Aragorn is right. We cannot use it.</p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>👍</span>
                    <span className="ml-1 font-medium">6</span>
                  </button>
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🧙‍</span>
                    <span className="ml-1 font-medium">3</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Elrond</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  You have onLy onE choice. The Ring must be destroyed.
                </p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>💍</span>
                    <span className="ml-1 font-medium">1</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Gimli</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">What are we waiting for?</p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Elrond</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  The Ring cannot be destroyed, Gimli, son of Gloin by any craft
                  that we here possess. The Ring was made in the fires of Mount
                  Doom. Only there can it be unmade. It must be taken deep into
                  Mordor and cast back into the fiery chasm from whence it came.
                </p>
                <p className="text-sm">One of you must do this.</p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🗻</span>
                    <span className="ml-1 font-medium">2</span>
                  </button>
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🔥</span>
                    <span className="ml-1 font-medium">3</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Boromir</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">
                  One does not simply walk into Mordor. Its black gates are
                  guarded by more than just orcs. There is evil there that does
                  not sleep. And the great Eye is ever watchful. It is a barren
                  wasteland riddled with fire and ash and dust. The very air you
                  breathe is a poisonous fume. Not with ten thousand men could
                  you do this. It is folly!
                </p>
              </div>
            </div>
          </div>
          <div className="h-12 px-4 pb-4 bg-white">
            <div className="flex items-center p-1 border-2 border-gray-300 rounded-sm">
              <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
              <textarea
                className="flex-grow px-3 ml-1 text-sm border-l border-gray-300"
                placeholder="Message councilOfElrond"
                rows={1}
                cols={1}
              />
              <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                <span className="w-4 h-4 -mt-px leading-none">@</span>
              </button>
              <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                <svg
                  className="w-4 h-4 transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 w-1/4 max-w-xs bg-gray-100 border-l border-gray-300">
          <div className="flex items-center h-16 px-4 border-b border-gray-300">
            <div className="">
              <h2 className="text-sm font-semibold leading-none">Thread</h2>
              <a className="text-xs leading-none" href="#">
                council-of-elrond
              </a>
            </div>
            <button className="flex items-center justify-center w-6 h-6 ml-auto rounded hover:bg-gray-300">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col flex-grow overflow-auto">
            <div className="flex px-4 py-4 border-b border-gray-300">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Boromim</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">Aragorn? This… is Isildur’s heir?</p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Legolas</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">And heir to the throne of Gondor.</p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🤯</span>
                    <span className="ml-1 font-medium">7</span>
                  </button>
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🏰</span>
                    <span className="ml-1 font-medium">2</span>
                  </button>
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>👑</span>
                    <span className="ml-1 font-medium">3</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Aragorn</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">Havo dad Legolas.</p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>❓</span>
                    <span className="ml-1 font-medium">1</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-2">
                <div className="-mt-1">
                  <span className="text-sm font-semibold">Pippin</span>
                  <span className="ml-1 text-xs text-gray-500">01:26</span>
                </div>
                <p className="text-sm">Is that elvish for second breakfast?</p>
                <div className="flex mt-1 space-x-2">
                  <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
                    <span>🍳</span>
                    <span className="ml-1 font-medium">3</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 pb-3 mt-auto bg-gray-100">
              <div className="flex flex-col items-center p-1 border-2 border-gray-300 rounded-sm">
                <textarea
                  className="px-3 wFull textSm bgTransparent"
                  style={{ resize: none }}
                  placeholder="Reply…"
                  cols=""
                  rows="1"
                ></textarea>
                <div className="flex w-full mt-2">
                  <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center flex-shrink w-6 h-6 ml-auto rounded hover:bg-gray-200">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                    <span className="w-4 h-4 -mt-px leading-none">@</span>
                  </button>
                  <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:bg-gray-200">
                    <svg
                      className="w-4 h-4 transform rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
