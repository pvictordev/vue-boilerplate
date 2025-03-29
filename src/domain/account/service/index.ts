import axios from "axios"

const accountLoginService = async () => {
  return axios
    .get("/8a9d2de1-33cc-43e7-887e-39f9671a8462")
    .then((response) => response.data)
}

export { accountLoginService }
