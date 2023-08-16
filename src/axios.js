import axios from "axios";
const instance = axios.create({
	// baseURL: "http://localhost:4500/api/",
	baseURL: "https://evangadi-forum-back-end.cyclic.app/api/",
});
export default instance;
