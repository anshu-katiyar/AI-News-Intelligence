// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://ai-news-intelligence-8h9z.onrender.com",
// });

// api.interceptors.request.use((config) => {

//   const token = localStorage.getItem("token");

//   if (token) {

//     config.headers.Authorization = `Bearer ${token}`;

//   }

//   return config;

// });

// export default api;


// only test use 

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// export default api;


// 2nd test use 
import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://ai-news-intelligence-1.onrender.com",
});

export default api;