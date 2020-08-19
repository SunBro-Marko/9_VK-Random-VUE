// https://api.vk.com/method/METHOD_NAME?PARAMETERS&access_token=ACCESS_TOKEN&v=5.122
const axios = require("../node_modules/axios");

function getpostdata(url) {
  let arr = url.split("w=wall");
  let data = arr[1].split("_");
  return { group_id: data[0], post_id: data[1] };
}

async function call(token, method, data) {
  data = objInStr(data);
  let url = urlcompile(token, method, data);
  let postinfo = await axios.get(url);
  return postinfo.data.response;
}

function objInStr(obj) {
  let str = "";

  for (key in obj) {
    if (str === "") {
      str += key + "=" + obj[key];
    } else {
      str += "&" + key + "=" + obj[key];
    }
  }
  return str;
}

function urlcompile(token, method, data) {
  return (
    "https://api.vk.com/method/" +
    method +
    "?" +
    data +
    "&access_token=" +
    token +
    "&v=5.122"
  );
}

module.exports = {
  getpostdata,
  call,
};
