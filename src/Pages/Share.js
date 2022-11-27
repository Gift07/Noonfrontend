import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { GetAccount } from "../Features/Account/Action";
import { AiOutlineArrowLeft } from "react-icons/ai";
import QRCode from "react-qr-code";

const Share = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const [isCopied, setIsCopied] = useState(false);
  const { accountLoading, accountError, account } = useSelector(
    (state) => state.account
  );
  useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);
  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Share</h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-green-500 p-4 rounded-lg">
          <QRCode
            title="Invite Link"
            value={`http://localhost:3000/sign-up/${account.user_code}`}
            bgColor={"#fff"}
            fgColor={"#000"}
            size={256}
          />
          <div className="w-full flex items-center justify-center py-4">
            <button className="bg-blue-700 text-white rounded-xl px-8 py-2 text-xs">
              Share
            </button>
          </div>
        </div>
        <div className="w-full px-9 lg:px-28">
          <div className="flex items-center justify-between py-3">
            <h1>Extension Code</h1>
            <h1 className="px-3 py-2 text-white bg-green-500 rounded-xl">
              {account.user_code}
            </h1>
          </div>
          <div>
            <div className="text-xs ">
              <h1 className="p-2 bg-green-500 rounded-lg">
                http://localhost:3000/sign-up/{account.user_code}
              </h1>
              <CopyToClipboard
                text={`http://localhost:3000/sign-up/${account.user_code}`}
                onCopy={() => {
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 1000);
                }}
              >
                <button className="bg-blue-700 px-8 py-2 text-xs rounded-xl my-2 text-white">
                  Copy
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
