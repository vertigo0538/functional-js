import axios from "axios";
export const profile = async () => {
  const url = "my-json-server.typicode.com/ston0538/my-json-server/profile";
  const response = await axios.get(url);
  return response;
};
