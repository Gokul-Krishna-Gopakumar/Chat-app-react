import { useContext, useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import UserList from "../components/userList";
import UserChat from "../components/userChat";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import NewChat from "../components/newChat";

const MainChat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, updateCurrentChat, createChat, potentialChats } =
    useContext(ChatContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleStartChat = (userId) => {
    createChat(user._id, userId);
    handleCloseModal();
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-[calc(100vh-56px)]">
        <SideBar />
        <div className="flex flex-col bg-emerald-950 text-white min-h-72 relative">
          <h3 className="bg-gray-950 flex justify-center items-center p-7">
            Users
          </h3>
          <div className="flex flex-col justify-between flex-grow">
            <div className="overflow-y-auto">
              {userChats?.map((chat, index) => (
                <div
                  className="text-white cursor-pointer"
                  key={index}
                  onClick={() => updateCurrentChat(chat)}
                >
                  <UserList chat={chat} user={user} />
                </div>
              ))}
            </div>
            <button
              className="flex justify-center mx-3 mb-4 mt-auto rounded-xl bg-yellow-500 text-black font-semibold py-2 px-4"
              onClick={handleOpenModal}
            >
              Start New Chat
            </button>
          </div>
        </div>
        <UserChat />
        {isModalOpen && (
          <NewChat
            potentialChats={potentialChats}
            onClose={handleCloseModal}
            onSelectUser={handleStartChat}
          />
        )}
      </div>
    </div>
  );
};

export default MainChat;
