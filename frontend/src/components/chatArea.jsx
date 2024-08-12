import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useFetchRecepientUser } from "../hooks/useFetchRecepientUser";
import moment from "moment";
import { deleteRequest } from "../utils/services";

const ChatArea = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, handleDeleteMessage } =
    useContext(ChatContext);
  const { recepientUser } = useFetchRecepientUser(currentChat, user);
  const [error, setError] = useState(null);
  //const [deletingMessageId, setDeletingMessageId] = useState(null);
  // Create a ref for the chat container
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages change
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!recepientUser)
    return (
      <p className="flex justify-center text-white font-bold">
        No Conversation has been opened yet..
      </p>
    );

  if (isMessagesLoading)
    return (
      <p className="flex justify-center text-white font-bold">Loading Chat..</p>
    );

  return (
    <div className="flex flex-col h-[calc(100vh-227px)] bg-emerald-950 m-2 p-2 rounded-lg text-white overflow-y-auto">
      {messages &&
        messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message?.senderId === user?._id
                ? "flex justify-end"
                : "flex justify-start"
            } mb-2`}
          >
            <div
              className={`${
                message?.senderId === user?._id
                  ? "bg-emerald-900 text-right"
                  : "bg-gray-700 text-left"
              } rounded-lg px-3 py-2 max-w-xs`}
            >
              <div className="flex flex-col text-slate-200">
                <span className="text-lg font-mono break-words">
                  {message.text}
                </span>
                <span className="flex font-thin text-xs mt-1 text-gray-400">
                  {moment(message.createdAt).calendar()}
                </span>
                {message.senderId === user?._id && (
                  <button
                    className="text-red-500 mt-2"
                    onClick={() => handleDeleteMessage(message._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      {/* Empty div to act as the scroll target */}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatArea;
