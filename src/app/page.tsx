import React from "react";
import Headercomp from "./components/header";
import Maincomp from "./components/main";
import Footercomp from "./components/footer";

export default function Page (){
  return(
    <div>
      <Headercomp/>
      <Maincomp/>
      <Footercomp/>
    </div>
  );
}