import PersonIcon from "@mui/icons-material/Person";
import { useFetchRecepientUser } from "../hooks/useFetchRecepientUser";

const UserList = ({ chat, user }) => {
  const { recepientUser } = useFetchRecepientUser(chat, user);

  return (
    <div className="hover:bg-emerald-900">
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
        </div>
      </div>
    </div>
  );
};

export default UserList;
