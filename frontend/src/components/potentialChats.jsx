import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);

  return (
    <div>
      <div>
        {potentialChats &&
          potentialChats.map((u, index) => {
            return <div key={index}>{u.name}</div>;
          })}
      </div>
    </div>
  );
};

export default PotentialChats;
