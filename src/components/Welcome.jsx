import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-welcome">
      <div className="flex flex-col items-center justify-center py-20 px-4">
        {/* New Header Section */}
        <h1 className="text-4xl sm:text-5xl py-2 text-gradient text-center">
          Donate The Smile, The Ethereum Powered Donation Platform
        </h1>
        <p className="text-left my-4 text-black font-light sm:w-8/12 w-11/12 text-base text-center">
          We provide a secure and transparent way to donate to NGOs directly using Ethereum.
        </p>

        {/* Platform Advantages Section */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-10">
          <div className="p-5 bg-white shadow-lg rounded-lg text-center mx-4 mb-4">
            <h3 className="font-semibold text-xl">Transparent Transactions</h3>
            <p className="mt-2">Track all donations on the blockchain for complete transparency.</p>
          </div>
          <div className="p-5 bg-white shadow-lg rounded-lg text-center mx-4 mb-4">
            <h3 className="font-semibold text-xl">Secure Donations</h3>
            <p className="mt-2">Your donations are secure with Ethereum, ensuring privacy and integrity.</p>
          </div>
          <div className="p-5 bg-white shadow-lg rounded-lg text-center mx-4 mb-4">
            <h3 className="font-semibold text-xl">Global Reach</h3>
            <p className="mt-2">Donate to NGOs across the world, directly through the Ethereum blockchain.</p>
          </div>
        </div>

        {/* Existing Content Below */}
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>

        {/* Ethereum Card */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#000" />
                </div>
                <BsInfoCircle fontSize={17} color="#000" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-black font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 text-black w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full bg-black mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
