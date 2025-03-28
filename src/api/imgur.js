import axios from "axios";
import qs from "qs";

const CLIENT_ID = "9cd162af7ebd72e";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  fetchImages(accessToken) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  uploadImages(images, accessToken) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();

      formData.append("image", image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    });

    return Promise.all(promises);
  },
};
