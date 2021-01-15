import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6AEuR6TF94H-7rUF95wLR7xz7H4K63d91nAQRz7wV8E",
  },
});
