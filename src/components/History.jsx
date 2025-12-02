import { useNavigate } from "react-router-dom";

export function useSmartNavigation(){
    const navigate = useNavigate()

    function smartNav(to){
        // first route to load
        const isFirstLoad = !sessionStorage.getItem("loaded")
        if (isFirstLoad){
            sessionStorage.setItem("loaded", "1");
            navigate(to, {replace : true});
        }else{
            navigate(to)
        }
    }
    return smartNav;
}