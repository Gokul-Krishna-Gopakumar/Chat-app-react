import { useContext } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import UserList from "../components/userList";
import UserChat from "../components/userChat";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import PotentialChats from "../components/potentialChats";

const MainChat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, updateCurrentChat } = useContext(ChatContext);

  return (
    <div>
      <Navbar />
      <body className="flex h-[calc(100vh-56px)]">
        <SideBar />
        <div className="flex flex-col bg-emerald-950 text-white min-h-72">
          <h3 className="bg-gray-950 flex justify-center items-center p-7">
            Users
          </h3>
          <div className=" flex flex-col justify-between">
            <div>
              {userChats?.map((chat, index) => {
                return (
                  <div
                    className="  text-white"
                    key={index}
                    onClick={() => updateCurrentChat(chat)}
                  >
                    <UserList chat={chat} user={user} />
                  </div>
                );
              })}
            </div>
            {/*<div>
              {PotentialChats && (
                <div className=" absolute bottom-0 ">
                  <StartNewChat />
                </div>
              )}
            </div> */}
          </div>
        </div>

        <UserChat />
      </body>
    </div>
  );
};

export default MainChat;
