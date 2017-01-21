import axios from "axios";

function getLocaleStrings(locale) {
  return axios.get("/api/strings/" + locale)
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    throw err;
  });
}

export default {getLocaleStrings};
