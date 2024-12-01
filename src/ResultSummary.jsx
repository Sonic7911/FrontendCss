import React from "react";

import "./Scss2.css";

function ResultSummary() {
  return (
    <>
    <div id="Screen">
    <div id="Container">
        
        {/* Left Component about summary score */}
        
        <div id="leftComponent">
            <div id="result">Your Result</div>
            <div id="Score">
                <div id="Number">76</div>
                <div id="Total">of 100</div>
            </div>
            <div id="Great">Great</div>
            <div id="scoreDescription">You scored higher than 65% of the population and its not very good</div>
        </div>





        <div id="rightComponent">

        <div id="Summary">Summary</div>
            <div id="Reaction1"><div>Reaction</div>
            <div>94/100</div>
            </div>
            <div id="Reaction2"><div>Memory</div>
            <div>80/100</div></div>
            <div id="Reaction3"><div>Verbal</div>
            <div>85/100</div></div>
            
            <button>Continue</button>
        </div>

          
            


    </div>
    </div>
    </>
  );
}

export default ResultSummary;