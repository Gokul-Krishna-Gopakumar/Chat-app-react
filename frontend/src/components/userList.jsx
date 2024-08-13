import PersonIcon from "@mui/icons-material/Person";
import { useFetchRecepientUser } from "../hooks/useFetchRecepientUser";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const UserList = ({ chat, user }) => {
  const { recepientUser } = useFetchRecepientUser(chat, user);

  const { handleDeleteChat } = useContext(ChatContext);
  const onDeleteChat = () => {
    handleDeleteChat(chat._id);
  };

  return (
    <div className="transition duration-200 ease-in-out hover:bg-emerald-900">
      <div className=" lg:min-w-96 md:min-w-64 min-w-52 p-2 border-b-2">
        <div className="flex grow justify-between ">
          <div className="flex grow">
            <div className=" mr-4 mt-2">
              <PersonIcon />
            </div>
            <div>
              <div>{recepientUser?.name}</div>
              <div>Text Message</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-2">05:30</div>
            <div className="bg-green-500 rounded-full size-2 mb-2 ml-4 "></div>
          </div>
          <button
            onClick={onDeleteChat}
            className=" transition duration-200 ease-in-out bg-red-500 text-white py-1 px-3 rounded ml-2 my-auto hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
