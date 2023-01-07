import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
	// baseURL: "https://user-365th-project.herokuapp.com/api/v1",
	baseURL: "http://localhost:8000/api/v1",
	withCredentials: true,
	// baseURL: "https://gcrf.herokuapp.com/api/v1",
});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
export const loginAuth = (payload) => api.post('./auth/login', payload);
export const signupAuth = (payload) => api.post("./auth/signup", payload);
export const logoutAuth = () => api.post("./auth/logout");

export const getUserData = () => api.get("/user");
// export const getAllUsers = () => api.get("/user/admin/");
// export const deleteUser = (id) => api.delete(`/user/admin?id=${id}`);