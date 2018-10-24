import axios from "axios";
import * as _ from "lodash";

const axios_instance = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1beta1/projects/twitch-project-2/databases/(default)/documents"
});

export let getStreams = () => {
  return axios_instance
    .get("/new-viewer-data", {
      params: {
        page_size: 99
      }
    })
    .then(res => {
      return res.data;
    })
    .then(data => {
      return data.documents;
    });
};

