"use client"

import React, { useState } from "react";
import Cookies from "js-cookie";

interface CookieHeader {'setCookie'?: boolean[]; }

function CookieBar() {
  const [isCookieSet, setCookie] = useState(Cookies.get("cookieConsent"));
  const [isContainerActive, setIsContainerActive] = useState<string>("true")

  // Function to handle accepting cookies
  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", false);
    setCookie(true);
    setIsContainerActive("false");
  };

  // Function to handle rejecting cookies
  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent");
    setCookie(false);
    setIsContainerActive("false");
  };

  return (
    <div className={isContainerActive === "true" ? "block" : "hidden"}>
    <div className="flex justify-between items-center gap-2 bg-gray-100 px-4 py-2 fixed bottom-0 left-0 w-full">
      <div className="flex-1">
        <p className="text-sm text-gray-700">
          This website uses cookies to improve your experience. Do you accept
          cookies?
        </p>
      </div>
      <div className="flex gap-2">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded grow" onClick={handleAcceptCookies}>Accept</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded grow" onClick={handleRejectCookies}>Reject</button>
      </div>
      {/* <sub className="hidden">Cookie set: {isCookieSet ? <b>Yes</b> : <b>No</b>}</sub> */}
    </div>
    </div>
  );
}

export default CookieBar;