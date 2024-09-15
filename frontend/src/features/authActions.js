import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout, getMe } from "../features/authSlice";

// Custom hook for logging out
export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(Logout());
    navigate("/"); // Navigate to login or home page on logout
  };

  return logout;
};

// Custom hook for checking user authentication and admin access
export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/"); // Redirect to login if there's an error
    }
  }, [isError, navigate]);
};

export const useCheckAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError || (user && user.role !== "Admin")) {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
};
