import axios from "axios";
const apiUrl = "https://api.instagram.com/v1";

const instagramService = {
  async getRecentImages() {
    return axios.get(
      `${apiUrl}/users/self/media/recent?access_token=5869991859.1677ed0.1fbe02bc5f2741e28b6be03489bbd7fd`
    );
  }
};

export default instagramService;
