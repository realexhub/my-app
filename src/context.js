import { useState,useContext,createContext } from "react";

const AppContext = createContext();

const AppProvider =({children})=>{
    const [isSideBarOpen,setisSideBarOpen]=useState(false);

    const openSideBar=()=>{
        setisSideBarOpen(true);
    };  
    const closeSideBar=()=>{
        setisSideBarOpen(false);
    };


    return <AppContext.Provider 
    value={{
        isSideBarOpen
        ,openSideBar
        ,closeSideBar
    }}>
        {children}
        </AppContext.Provider>
};
const useGlobalContext=()=>{
    return useContext(AppContext);
};
export {AppProvider,useGlobalContext};