import { toast } from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { setLoading, setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
const {
  LOGIN_API,
} = endpoints;


export function login(username, password, rememberMe, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(true));
      try {
        const response = await apiConnector("POST", "http://localhost:5000/api/login", {
            username,
          password,
          rememberMe
        });
  
        console.log("LOGIN API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Login Successful");
        dispatch(setToken(response.data.token));
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
        dispatch(setUser({ ...response.data.user, image: userImage }));
  
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
          
  
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error(error.response.data.message);
      }
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    };
}
  
export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("AAYA")
        toast.success("Logged Out");
      navigate("/");
    };
  }