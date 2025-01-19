import React, { useState } from "react";
import tick from "../../assets/email/Align to Text.svg";

const Email = () => {
  const [email, setEmail] = useState(""); // State to hold the email input
  const [message, setMessage] = useState(""); // State for success/error message

  const handleSubmit = () => {
    if (email.trim() === "") {
      setMessage("Please enter a valid email.");
      return;
    }

    // Example email validation (can be replaced with a more robust regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Invalid email format.");
      return;
    }

    // Simulate submission or API call
    setMessage("Thank you! Your email has been submitted.");
    setEmail(""); // Clear the input field after submission
  };

  return (
    <>
      <div
        className="h-[250px] md:h-[330px] flex flex-col items-center justify-center text-white text-center px-4 md:px-8"
        style={{
          background: "linear-gradient(-45deg, #1c4670 0%, #ffa229 100%)",
          fontFamily: '"Inter", serif',
        }}
      >
        <div className="font-semibold mb-2 md:mb-0 text-[12px] md:text-[14px]">
          1% OF THE INDUSTRY
        </div>
        <div className="font-bold text-[16px] md:text-[32px]">
          Welcome to your new digital reality. Now.
        </div>
        <div className="w-full max-w-[512px] rounded-lg mt-6">
          <div className="flex items-center">
            <input
              type="email"
              className="w-full p-3 px-5 rounded-l-[4px] focus:outline-none"
              placeholder="Enter your email"
              style={{
                fontWeight: "400",
                fontSize: "15px",
                color: "black", // Ensures text is visible
                backgroundColor: "white", // Optional, makes input field stand out
              }}
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
            <div
              className="bg-[#ffa229] font-semibold text-[15px] p-3 px-5 rounded-r-[4px] text-center cursor-pointer"
              onClick={handleSubmit} // Call handleSubmit on click
            >
              Submit
            </div>
          </div>
          {message && ( // Display success/error message
            <div
              className="mt-2 text-[12px] md:text-[14px]"
              style={{ color: message.includes("Thank you") ? "#0f0" : "#f00" }}
            >
              {message}
            </div>
          )}
        </div>

        <div className="mt-6">
          <div className="gap-4 md:gap-8 flex items-center flex-row md:justify-center">
            <div className="flex items-center gap-1 md:gap-4">
              <img src={tick} className="w-[12px] md:w-[20px]" alt="tick" />
              <div className="font-medium text-[8px] md:text-[16px]">
                Instant results
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-4">
              <img src={tick} className="w-[12px] md:w-[20px]" alt="tick" />
              <div className="font-medium text-[8px] md:text-[16px]">
                User-friendly interface
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-4">
              <img src={tick} className="w-[12px] md:w-[20px]" alt="tick" />
              <div className="font-medium text-[8px] md:text-[16px]">
                Personalized customization
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
