import axios from "../axios";

const useRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh");

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    localStorage.removeItem("access");
    localStorage.setItem("access", response.data.accessToken);
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
