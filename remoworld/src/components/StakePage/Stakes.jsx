import React, { useState } from "react";
import CircularProgressBar from "./CircularProgressBar";
import Remo from "../../assets/remo.png";
import Remo1 from "../../assets/remo1.png";
import Remobg from "../../assets/remobg.jpg";
import RemoLogo from "../../assets/remologo.png";

function Stakes() {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  return (
    <>
      <div className="bgImg">
        <img className="w-24 relative left-10 top-1" src={RemoLogo} />
        <div className="lg:w-[80%] lg:ml-[10%]  lg:h-[60%]">
          <div className="flex">
            <div className="text-xs">
              <div className="bg-white  bg-opacity-50 h-20 w-96 rounded-md p-3 pl-4 mb-5">
                <h2 className="font-bold text-xl">STAKE YOUR REMO</h2>
                <p className="text-xs lg:mt-3">
                  STAKE YOUR REMO TO EARN <b>$REMO</b> & CLAIM REWARDS{" "}
                </p>
              </div>
              <div className="h-48 bg-white  p-3 pl-4 rounded-md bg-opacity-50 leading-7">
                <div className="flex space-x-[30%]">
                  <p>HOLDER CLAIMABLE REWARDS</p>
                  <p>
                    0.000 <b className="text-[#AE3836]">$REMO</b>
                  </p>
                </div>
                <div className="flex space-x-28">
                  <p>HOLDER REWARD RATE</p>
                  <p>
                    <b className="text-[#AE3836]">0.500 $REMO / </b>DAY
                  </p> 
                </div>

                <div className="flex space-x-[62%]">
                  <p>HOLDER NFTS STAKED</p>
                  <p className="text-[#AE3836]">0</p>
                </div>
              </div>
            </div>
            <div className="w-[55%] bg-white bg-opacity-50 ml-[6.5%] p-3 pl-12">
              <h2 className="font-bold text-xl">TOTAL STAKED</h2>
              <p className="text-xs lg:mt-3">3,888 REMOS STAKED BY 1,415 HOLDERS</p>

                <p className="text-[#AE3836] text-sm font-semibold bg-white rounded-lg relative top-12 left-14 z-50 w-28 pl-3 py-1">{progress} % STAKED</p>
              <CircularProgressBar progress={progress}  />
              <br />
              <button
                className=""
                onClick={handleButtonClick}
              >
                Increase Progress
              </button>
            </div>
          </div>
          <div className="flex bg-white bg-opacity-50 mt-10 rounded-md p-2 pl-3 h-56 w-[97.2%] ">
            <div className="flex  " >
              <div className="text-center">
              <img className="w-40 h-40" src={Remo} />
              <p className="font-thin">REMO</p>
              <p>N0. 2920</p>
              </div>
              <div className="text-center">
              <img className="w-40 h-40" src={Remo1} />
              <p className="font-thin">REMO</p>
              <p>N0. 2580</p>
              </div>
            </div>
            <div className="-mt-1 relative left-[50%]">
              <input className="w-44 h-12 rounded-lg font-semibold mt-5 bg-gray-300" value="SELECT ALL" type="submit" />
              <br/>
              <input className="w-44 h-12 rounded-lg font-semibold mt-5 bg-[#AE3836] text-white" value="STAKED SELECTED" type="submit" />
              <br/>
              <input className="w-44 h-12 rounded-lg font-semibold mt-5 bg-gray-300" value="UNSELECT ALL" type="submit" />
              <br/>
            </div>
          </div>
          <div className="flex bg-white bg-opacity-50 mt-10 rounded-md p-2 pt-7 pl-4 h-56 w-[97.2%] ">
            <div>
              <h2 className="text-xl font-bold">AVAILABLE REWARDS</h2>

              <input className="text-sm px-2 p-2 rounded-md text-wrap font-semibold w-24 mt-[45%] bg-gray-300 " value="CONNECT WALLET" type="submit" />
            </div>
            <div className="-mt-1 relative left-[60.9%]">
              <input className="w-44 h-12 rounded-lg font-semibold mt-5 bg-[#AE3836] text-white" value="CLAIM REWARDS" type="submit" />
              <br/>
              <input className="w-44 h-12 rounded-lg font-semibold mt-5 bg-gray-300" value="SELECT ALL" type="submit" />
              <br/>
              <input className="w-44 h-12 rounded-lg font-semibold mt-5 bg-gray-300" value="UNSTAKE" type="submit" />
              <br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stakes;
