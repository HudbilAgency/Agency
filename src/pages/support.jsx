import React, { useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer2 from "../components/footer2/footer2";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function ClickableDiv({ text, isActive, onClick }) {
  const divClass = isActive ? "bg-[#DF2323] text-white" : "bg-white text-black";

  return (
    <div
      className={`pill lg:w-[320px] xl:w-[250px] 2xl:w-[320px] py-4 px-6 text-center rounded-full text-lg cursor-pointer ${divClass}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

function ClickableDiv2({ text, isActive, onClick }) {
  const divClass2 = isActive
    ? "bg-[#FCAB64] text-white"
    : "bg-white text-[#FCAB64]";

  return (
    <div
      className={`pill2 py-3 px-8 rounded-3xl text-base text-center cursor-pointer ${divClass2}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

const Support = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  const [activeDiv, setActiveDiv] = useState(null);

  const divData = [
    { id: 1, text: "SEO Service" },
    { id: 2, text: "SMM Service" },
    { id: 3, text: "SEO Technical Issue" },
    { id: 4, text: "Content Writing" },
  ];

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
    const selectedProject = divData.find((item) => item.id === divId);
    setSelectedProject(selectedProject);
  };

  const [activeDiv2, setActiveDiv2] = useState(null);

  const divData2 = [
    { id: 1, text: "4:30 PM" },
    { id: 2, text: "5:00 PM" },
    { id: 3, text: "5:30 PM" },
    { id: 4, text: "Live Chat" },
  ];

  const handleDivClick2 = (divId) => {
    setActiveDiv2(divId);
    const selectedTime = divData2.find((item) => item.id === divId);
    setSelectedTime(selectedTime);
  };

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    if (file) {
      // Update the file name in the state
      setFileName(file.name);
      setFile(file);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (event) => {
    event.preventDefault();

    let fileBase64 = file ? await toBase64(file) : null;

    const formData = {
      name,
      company,
      email,
      phone,
      issueDetails,
      fileName,
      selectedProject: selectedProject ? selectedProject.text : null,
      attachment: fileBase64,
    };

    console.log(formData);
    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://coltfox-gamma.onrender.com/submit-form",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();

    const formData2 = {
      firstname,
      lastname,
      email1,
      phone1,
      message,
      selectedTime: selectedTime ? selectedTime.text : null,
    };

    console.log(formData2);
    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://coltfox-gamma.onrender.com/submit-live-call",
        JSON.stringify(formData2),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="approachHead px-6 sm:px-28 lg:px-48 2xl:px-64 mt-8 text-4xl sm:text-[4rem] leading-[5rem] font-black text-[#000]  ">
        <h1>
          Tell us about <br /> your problem
        </h1>
      </div>
      <div className="redLine bg-[#DF2323] text-left rounded-full font-bold my-8 mx-6 sm:mx-28 lg:mx-48 2xl:mx-64 text-3xl text-white p-4 md:p-8 sm:text-[4rem] w-min">
        Ticket
      </div>
      <div className="px-6 sm:px-48 lg:px-72 2xl:px-80 mb-20 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
        <svg
          className="ml-[11%] sm:ml-[5.5%] lg:ml-[2%] xl:ml-[1%] 2xl:ml-[3.5%]"
          width="45"
          height="100"
          viewBox="0 0 45 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="animate-up-down" clip-path="url(#clip0_1171_1187)">
            <path
              d="M22.4575 30.0288L22.3896 86.0287M22.3896 86.0287L30.8972 79.789M22.3896 86.0287L13.8972 79.7684"
              stroke="#012033"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <rect
            x="43.8504"
            y="1.05347"
            width="109.856"
            height="42.7157"
            rx="21.3579"
            transform="rotate(90.0695 43.8504 1.05347)"
            stroke="#FE7272"
            stroke-width="2"
          />
          <defs>
            <clipPath id="clip0_1171_1187">
              <rect
                x="44.8516"
                y="0.0546875"
                width="111.856"
                height="44.7157"
                rx="22.3579"
                transform="rotate(90.0695 44.8516 0.0546875)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>

        <p className="lg:w-2/5 2xl:w-1/3 text-lg font-medium text-start">
          We are here to support, if you are onboard client kindly fill in the
          below problem you are facing we will answer in next 24 hours.{" "}
        </p>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64">
        <div className="blackLine h-[1px] bg-black mb-10"></div>
      </div>

      <div className="form px-6 sm:px-28 lg:px-48 2xl:px-64">
        <h1 className="text-3xl font-bold">Your information</h1>
        <form className="mt-8 md:mt-6 md:mx-12" action="#" method="post">
          <div className="mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="field1"
              name="field1"
              placeholder="Whats your name *"
              className="w-full shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
            />
          </div>

          <div className="mb-4">
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              id="field2"
              name="field2"
              placeholder="Whats your company *"
              className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
            />
          </div>

          <div className="mb-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="field3"
              name="field3"
              placeholder="Whats your official email *"
              className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
            />
          </div>

          <div className="mb-4">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="field4"
              name="field4"
              placeholder="Whats your Phone number *"
              className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
            />
          </div>
        </form>
      </div>

      <div className="pt-12 pb-4 px-6 sm:px-28 lg:px-48 2xl:px-64">
        <div className="blackLine h-[1px] bg-black"></div>
      </div>

      <div className="form-2 px-6 sm:px-28 lg:px-48 2xl:px-64 my-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 2xl:gap-12 xl:gap-8 lg:gap-4 relative">
          <h1 className="text-3xl font-bold lg:w-1/3">Your Project</h1>
          <div className="select font-medium text-lg leading-tight tracking-[-0.32px] text-[#090909] lg:w-full -mb-8 xl:-mb-2">
            Select your project below to understand your complaint and we will
            fix it
          </div>
        </div>
        <div className="flex 2xl:px-52 mt-16 gap-8 lg:gap-12 flex-wrap md:px-20 justify-center items-center">
          {divData.map(({ id, text }) => (
            <ClickableDiv
              key={id}
              text={text}
              isActive={activeDiv === id}
              onClick={() => handleDivClick(id)}
            />
          ))}
        </div>

        <div className="mt-16">
          <h1 className="text-3xl font-bold leading-tight">
            Tell us about your issue in brief
          </h1>
          <textarea
            value={issueDetails}
            onChange={(e) => setIssueDetails(e.target.value)}
            className="lg:ml-12 shadow-inner shadow-black/30 border-none w-full lg:w-[95%] mt-8 bg-white rounded-3xl p-5 text-xl"
            name=""
            id=""
            cols="30"
            placeholder="Brief us about your project *"
            rows="10"
          ></textarea>
          <p className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:gap-4 lg:ml-12 mt-4 text-base font-normal text-black">
            Attached a file or screenshot
            <svg
              className="attach-file cursor-pointer"
              onClick={handleFileInputClick}
              width="35"
              height="35"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="white" />
              <g clip-path="url(#clip0_1425_2382)">
                <path
                  d="M24.3955 50.4878C23.0395 50.4878 21.7365 49.9268 20.6985 48.8878C18.3975 46.5788 18.3975 42.8238 20.6975 40.5158L38.6435 21.4588C41.4435 18.6548 45.7325 18.9058 48.8625 22.0408C50.2645 23.4458 51.0515 25.4718 51.0225 27.5998C50.9935 29.7068 50.1705 31.7228 48.7635 33.1308L35.2005 47.5698C34.8235 47.9738 34.1895 47.9928 33.7875 47.6138C33.3855 47.2348 33.3665 46.5998 33.7445 46.1968L47.3285 31.7358C48.3915 30.6708 49.0005 29.1608 49.0235 27.5718C49.0465 25.9828 48.4715 24.4818 47.4495 23.4578C45.5295 21.5338 42.4035 20.5258 40.0795 22.8558L22.1345 41.9128C20.5915 43.4598 20.5925 45.9448 22.1145 47.4708C22.8285 48.1858 23.6765 48.5338 24.5785 48.4788C25.4715 48.4238 26.3895 47.9668 27.1635 47.1908L41.4425 31.9928C41.9595 31.4748 43.0005 30.2028 41.9415 29.1418C41.3425 28.5408 40.9215 28.5788 40.7825 28.5898C40.3875 28.6248 39.9245 28.8988 39.4455 29.3798L28.6975 40.8098C28.3175 41.2138 27.6845 41.2328 27.2835 40.8528C26.8815 40.4738 26.8625 39.8388 27.2415 39.4368L38.0085 27.9848C38.8545 27.1338 39.7205 26.6728 40.6015 26.5938C41.2895 26.5328 42.3115 26.6788 43.3545 27.7248C44.9025 29.2758 44.7095 31.5508 42.8775 33.3878L28.5985 48.5848C27.4585 49.7288 26.0815 50.3928 24.7005 50.4778C24.5995 50.4848 24.4965 50.4878 24.3955 50.4878Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1425_2382">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(19 19)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept=".jpg, .jpeg, .png, .pdf, .doc, .svg, .docx, .zip, .rar"
            />
            {fileName && (
              <span className="text-base font-normal text-black">
                {fileName}
              </span>
            )}
          </p>
          <div className="flex mt-10 items-center justify-center ">
            <Link
              onClick={handleSubmit}
              className="flex text-white inline-flex flex gap-6 text-center items-center justify-center py-2 px-12 border border-transparent shadow-sm text-base font-medium rounded-full bg-[#DF2323] hover:bg-white hover:text-[#DF2323] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DF2323]"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64 py-4 lg:pt-10 flex flex-col">
        <div className="font-semibold text-3xl leading-snug text-[#1F1F21] lg:w-3/4">
          Do you want to quickly get in touch with our representative on a live
          call ?
        </div>
        <div className="leading-9 font-normal text-lg text-[#1F1F21] mt-10 lg:w-3/4">
          Get in touch with us to discuss your issues related to your on going
          services, with on live call to discuss in detail
        </div>
        <div className="text-3xl leading-tight font-semibold text-[#1F1F21] my-8 md:my-12 lg:w-3/4 ">
          Fix a time
          <div className="leading-9 font-normal text-lg text-[#1F1F21] mt-6">
            Please note we will only take these live calls between 4:30 PM to
            6:00 PM Indian standard time, in order to serve you better, we need
            your patience and assistance to fix the issue at the earliest.
          </div>
          <form className="mt-6 md:mt-12 flex flex-col gap-2">
            <div class="flex flex-col md:flex-row gap-2 md:gap-6">
              <div class="flex-1 md:flex-[1.1]">
                <input
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="font-light text-black mt-1 pl-6 py-2 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                  placeholder="First Name"
                />
              </div>
              <div class="flex-1">
                <input
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="font-light text-black mt-1 pl-6 py-2 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <input
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
                type="email"
                id="email"
                name="email"
                class="font-light text-black mt-1 pl-6 py-2 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                value={phone1}
                onChange={(e) => setPhone1(e.target.value)}
                type="tel"
                id="phone"
                name="phone"
                class="font-light text-black mt-1 pl-6 py-2 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                placeholder="Phone number"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows="4"
                class="font-light text-black mt-1 pl-6 py-2 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64 2xl:w-[83%] mb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold w-full">Select Time</h1>
          </div>
          <div className="flex gap-8 flex-wrap justify-center items-center">
            {divData2.map(({ id, text }) => (
              <ClickableDiv2
                key={id}
                text={text}
                isActive={activeDiv2 === id}
                onClick={() => handleDivClick2(id)}
              />
            ))}
          </div>
        </div>
        <div class="text-left mt-10">
          <button
            onClick={handleSubmit2}
            type="submit"
            class="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-xl font-medium rounded-full text-[#FCAB64] bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Pop-up for form submission confirmation */}
      {showConfirmation && (
        <div className="fixed inset-0 w-auto mx-2 sm:mx-0 flex items-center justify-center">
          <div className=" bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay px-2 py-6 sm:px-6 sm:py-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center text-green-700">
              <FaCheckCircle className="mr-2" />
              <span className="font-medium text-xs sm:text-base">
                Your details have been sent.
              </span>
            </div>
            <p className="text-center text-xs sm:text-base mt-4">
              Please check your email for the confirmation.
            </p>
            <button
              className="ml-auto mt-6 text-xs sm:text-base text-[#FCAB64] bg-white shadow-none hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64] py-1 px-2 sm:py-2 sm:px-4 rounded-full border border-[#FCAB64]"
              onClick={toggleConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer2 />
    </div>
  );
};

export default Support;
