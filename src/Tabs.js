import { useState } from "react";
import "./App.css";
import BoardMeetings from "./BoardMeeting";
import AGM from "./AGM"
import Bonus from "./Bonus"
import Splits from "./Splits"
import Rights from "./Rights"
import Dividend from "./Dividend"


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div>
       <p class="gl_15 PT10" >
          <span class="b_20">
            <b>POWERED BY ELON NATIVE SYSTEMS </b>
          </span>
          @2023
        </p>
        </div>
      <div className="Board" style={{paddingTop:"20px"}}> </div>
       
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
         
          onClick={() => toggleTab(1)}
        >
          Board Meetings
        </button>
        
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          AGM/EGMs
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Bonus
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Splits
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Rights
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Dividend
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <BoardMeetings />
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
         <AGM />
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        > 
        <Bonus />
        </div>

        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        > 
        <Splits />
        </div>

        <div
          className={toggleState === 5 ? "content active-content" : "content"}
        > 
        <Rights />
        </div>

        <div
          className={toggleState === 6 ? "content active-content" : "content"}
        > 
        <Dividend />
        </div>

      </div>
    </div>
  );
}

export default Tabs;
