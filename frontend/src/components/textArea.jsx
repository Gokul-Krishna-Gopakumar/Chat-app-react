import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useFetchRecepientUser } from "../hooks/useFetchRecepientUser";
import InputEmoji from "react-input-emoji";

const TextArea = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, sendText } = useContext(ChatContext);
  const { recepientUser } = useFetchRecepientUser(currentChat, user);

  const [textMessage, setTextMessage] = useState("");

  console.log("text", textMessage);

  return (
    <div className=" flex bg-slate-700 px-2 py-3 ">
      <InputEmoji value={textMessage} onChange={setTextMessage} />

      {/*<input
        className="bg-slate-300  p-2 border-gray-700 border-2 rounded-xl w-full"
        type="text"
        placeholder="Enter message..."
      />*/}
      <button
        className="bg-yellow-500 p-1 border-gray-700 border-2 rounded-xl w-24"
        type="submit"
        alt="send button"
        onClick={() =>
          sendText(textMessage, user, currentChat._id, setTextMessage)
        }
      >
        <SendIcon />
      </button>
    </div>
  );
};

export default TextArea;
