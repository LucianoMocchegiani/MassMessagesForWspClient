import React from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Loading =()=>{
    return (
      <div>
        <Spinner size={130} color={"gray"} speed={1}/>
      </div>
    )
}
export default Loading
