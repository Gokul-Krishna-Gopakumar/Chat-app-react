import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";
import { useFetchRecepientUser } from "../hooks/useFetchRecepientUser";
const ChatTop = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recepientUser } = useFetchRecepientUser(currentChat, user);

  return (
    <div className=" bg-slate-700 px-2 py-4">
      <div className="flex justify-between ">
        <div className="m-2 w-96 text-white font-bold">
          {recepientUser?.name}
        </div>
        <div className="w-24">
          <button
            className="bg-yellow-500 p-2 border-gray-700 border-2 rounded-xl "
            type="submit"
            alt="voice call"
          >
            <CallIcon />
          </button>
          <button
            className="bg-yellow-500 p-2 border-gray-700 border-2 rounded-xl"
            type="submit"
            alt="video call"
          >
            <VideocamIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatTop;
