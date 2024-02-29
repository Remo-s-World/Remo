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
      <div className="bgImg overflow-hidden">
        <img className="w-24 relative lg:left-10 left-5 top-1" src={RemoLogo} />
        <div className="lg:w-[80%] lg:ml-[10%]   lg:h-[60%]">
          <div className="lg:flex">
            <div className="text-xs">
              <div className="bg-white  bg-opacity-50 h-20 lg:w-96 w-[90%] ml-6 lg:ml-0 rounded-md p-3 pl-7 mb-5">
                <h2 className="font-bold text-2xl">STAKE YOUR REMO</h2>
                <p className="text-xs lg:mt-2">
                  STAKE YOUR REMO TO EARN <b>$REMO</b> & CLAIM REWARDS{" "}
                </p>
              </div>
              <div className="h-48 bg-white lg:w-[100%] w-[90%] ml-6 lg:ml-0 whitespace-nowrap p-3 pl-7 rounded-md bg-opacity-50 leading-7">
                <div className="flex space-x-[10%] lg:space-x-[20%] md:space-x-[58%] whitespace-nowrap">
                  <p>HOLDER CLAIMABLE REWARDS</p>
                  <p>
                    0.000  &nbsp;<b className="text-[#AE3836]">$ REMO</b>
                  </p>
                </div>
                <div className="flex lg:space-x-[23%] md:space-x-[60%] space-x-[15%]">
                  <p>HOLDER REWARD RATE</p>
                  <p>
                    <b className="text-[#AE3836]">0.500 $REMO / </b>DAY
                  </p>
                </div>

                <div className="flex space-x-[48%] md:space-x-[75.8%] lg:space-x-[55%]">
                  <p>HOLDER NFTS STAKED</p>
                  <p className="text-[#AE3836]">0</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[55%] w-[90%] bg-white bg-opacity-50 md:ml-6 lg:ml-[7%] ml-[6.5%] mt-7 lg:mt-0 p-3 pl-7">
              <h2 className="font-bold text-2xl">TOTAL STAKED</h2>
              <p className="text-xs lg:mt-3">
                3,888 REMOS STAKED BY 1,415 HOLDERS
              </p>

              <p className="text-[#AE3836] text-sm font-semibold bg-white rounded-lg relative top-12 md:left-[55%] lg:left-14 -left-[5%] z-50 w-28 pl-3 py-1">
                {progress} % STAKED
              </p>
              <CircularProgressBar progress={progress} />
              <br />
              <button className="" onClick={handleButtonClick}>
                Increase 
              </button>
            </div>
          </div>
          <div className="lg:flex bg-white bg-opacity-50 mt-4 rounded-md p-2 ml-6 pl-5 lg:ml-0 lg:pl-3 lg:h-56 w-[90%] lg:w-[97.2%] ">
            <div className="lg:flex ">
              <div className="text-center lg:block flex">
                <img className="w-40 h-40" src={Remo} />
                <div className="mt-[30%] lg:mt-0 md:mt-24 lg:ml-0 ml-[11%]">
                <p className="font-thin">REMO</p>
                <p>N0. 2920</p>
                </div>
              </div>
              <div className="text-center lg:block flex">
                <img className="w-40 h-40" src={Remo1} />
                <div className="mt-[30%] md:mt-24 lg:mt-0 lg:ml-0 ml-[11%]">
                <p className="font-thin">REMO</p>
                <p>N0. 2580</p>
                </div>
              </div>
            </div>
            <div className="-mt-1 relative left-[44%] md:left-[69.6%] lg:left-[50%]">
              <input
                className="w-44 h-12 rounded-lg font-semibold mt-5 cursor-pointer bg-gray-300"
                value="SELECT ALL"
                type="submit"
              />
              <br />
              <input
                className="w-44 h-12 rounded-lg font-semibold mt-5 cursor-pointer bg-[#AE3836] text-white"
                value="STAKED SELECTED"
                type="submit"
              />
              <br />
              <input
                className="w-44 h-12 rounded-lg font-semibold mt-5 cursor-pointer bg-gray-300"
                value="UNSELECT ALL"
                type="submit"
              />
              <br />
            </div>
          </div>
          <div className="lg:flex bg-white bg-opacity-50 mt-4 rounded-md p-2 pt-7 ml-6 lg:ml-0 lg:pl-3 lg:h-56 w-[90%] lg:w-[97.2%] ">
            <div>
              <h2 className="text-2xl font-bold">AVAILABLE REWARDS</h2>

              <input
                className="text-sm px-2 p-2 rounded-md text-wrap font-semibold lg:w-24 relative top-10 lg:top-0 mt-[40%] bg-gray-300 "
                value="CONNECT WALLET"
                type="submit"
              />
            </div>
            <div className="lg:-mt-5 relative -mt-40 left-[45.5%] md:left-[70%] lg:left-[57.4%]">
              <input
                className="w-44 h-12 rounded-lg font-semibold mt-5 bg-[#AE3836] cursor-pointer text-white"
                value="CLAIM REWARDS"
                type="submit"
              />
              <br />
              <input
                className="w-44 h-12 rounded-lg font-semibold mt-5 bg-gray-300 cursor-pointer"
                value="SELECT ALL"
                type="submit"
              />
              <br />
              <input
                className="w-44 h-12 rounded-lg font-semibold mt-5 bg-gray-300 cursor-pointer"
                value="UNSTAKE"
                type="submit"
              />
              <br />
            </div>
          </div>
          <div className="h-4"></div>
        </div>
      </div>
    </>
  );
}

export default Stakes;
