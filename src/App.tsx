import React, { useEffect } from "react";
import { Routes } from "@/routes";
import { GlobalStyles } from "@/static/stylesheets";
import { AppService } from "./service/AllApiData.service";


function App() {
  const getLogin = async () =>{
    const responseJson = await AppService.login('admin1','admin1');
   }
   useEffect(() => {
    getLogin();
  }, []);


  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
