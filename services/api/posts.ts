import apiClient from "../../config/AxiosConfig";

export const postsApi = {
  getPosts: async () => {
    const { data } = await apiClient.get("/posts");
    return data;
  },
};
