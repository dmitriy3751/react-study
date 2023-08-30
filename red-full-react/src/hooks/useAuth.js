import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";

// кастомный хук (предоставление инфы об авторизации пользователя)
export const useAuth = () => useContext(AuthContext)