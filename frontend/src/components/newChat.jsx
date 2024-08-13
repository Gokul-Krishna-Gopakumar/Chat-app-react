import React from "react";

const NewChat = ({ potentialChats, onClose, onSelectUser }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-600 text-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">
          Select a User to Chat With
        </h2>
        <ul className="space-y-2">
          {potentialChats.map((user) => (
            <li
              key={user._id}
              className=" transition duration-200 ease-in-out cursor-pointer hover:bg-gray-200 hover hover:text-black p-2 rounded"
              onClick={() => onSelectUser(user._id)}
            >
              {user.name}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NewChat;
