import { useContext } from "react";
import ContextDashboard from "../Context/Context.tsx";

export const useTheme = () => {
    return useContext(ContextDashboard)
}