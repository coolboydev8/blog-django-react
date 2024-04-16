import React, { useEffect, useState } from "react";

const Footer = () => {
  const [actualYear, setActualYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setActualYear(year);
  }, []);

  return (
    <div className="p-4 bg-[#c0b2fa79] mt-16 fixed bottom-0 left-0 w-full">
      <p className="text-white text-sm">Full-stack Blog App © {actualYear}</p>
    </div>
  );
};

export default Footer;
