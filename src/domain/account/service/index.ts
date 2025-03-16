import axios from "axios";

const accountLoginService = async () => {
  return axios
    .get("/1ca83a2b-44d4-4557-ad4d-3e650c057db4")
    .then((response) => response.data);
};

export { accountLoginService };
