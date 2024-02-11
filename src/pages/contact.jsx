import React, { useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer2 from "../components/footer2/footer2";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function ClickableDiv({ text, isActive, onClick }) {
  const divClass = isActive ? "bg-[#DF2323] text-white" : "bg-white text-black";

  return (
    <div
      className={`pill lg:w-[320px] py-4 px-6 text-center rounded-full text-xl cursor-pointer ${divClass}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

function ClickableDiv2({ text, isActive, onClick }) {
  const divClass2 = isActive
    ? "bg-[#DF2323] text-white"
    : "bg-white text-black";

  return (
    <div
      className={`pill2 py-4 px-6 rounded-full text-xl text-center cursor-pointer ${divClass2}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const address = encodeURIComponent(
    "HUDBIL PRIVATE LIMITED, Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038"
  );
  const googleMapsUrlDesktop = `https://www.google.com/maps/search/?api=1&query=${address}`;
  const googleMapsUrlMobile = `geo:0,0?q=${address}`;

  const isMobileDevice = () => {
    const maxMobileWidth = 768; // Adjust this value as needed
    return window.innerWidth <= maxMobileWidth;
  };

  const openGoogleMaps = () => {
    const url = isMobileDevice() ? googleMapsUrlMobile : googleMapsUrlDesktop;
    window.open(url, "_blank");
  };

  const [status, setStatus] = useState("unchecked"); // 'unchecked', 'loading', 'verified'

  const handleVerification = () => {
    setStatus("loading");

    // Simulate a verification process (like an API call)
    setTimeout(() => {
      setStatus("verified");
    }, 2000); // 2 seconds delay for demo
  };

  const [hover, setHover] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTimeline, setSelectedTimeline] = useState(null);

  const [activeDiv, setActiveDiv] = useState(null);

  const handleClick = (divId) => {
    setActiveDiv(divId);
    const selectedBudget = divData.find((item) => item.id === divId);
    setSelectedBudget(selectedBudget);
  };

  const getDivClass = (divId) => {
    return activeDiv === divId
      ? " py-4 px-6 text-center rounded-full text-xl cursor-pointer bg-[#DF2323] text-white"
      : "py-4 px-6 text-center rounded-full text-xl cursor-pointer bg-white text-black";
  };

  const divData = [
    { id: 1, text: "Under 10.000 $" },
    { id: 2, text: "10.000 $ - 20.000 $" },
    { id: 3, text: "30.000 $ - 40.000 $" },
    { id: 4, text: "50.000 $ - 60.000 $" },
    { id: 5, text: "Not decided" },
  ];

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
    const selectedBudget = divData.find((item) => item.id === divId);
    setSelectedBudget(selectedBudget);
  };

  const [activeDiv2, setActiveDiv2] = useState(null);

  const divData2 = [
    { id: 1, text: "In next 2 month" },
    { id: 2, text: "In next 3 month" },
    { id: 3, text: "In next 4 month" },
    { id: 4, text: "No strict Timetable" },
  ];

  const handleDivClick2 = (divId) => {
    setActiveDiv2(divId);
    const selectedTimeline = divData2.find((item) => item.id === divId);
    setSelectedTimeline(selectedTimeline);
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

    const formData3 = {
      name,
      company,
      email,
      phone,
      project,
      selectedBudget: selectedBudget ? selectedBudget.text : null,
      issueDetails,
      fileName,
      attachment: fileBase64,
      selectedTimeline: selectedTimeline ? selectedTimeline.text : null,
    };

    console.log(formData3);
    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://coltfox-gamma.onrender.com/submit-project-details",
        JSON.stringify(formData3),
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
          Tell us about <br /> your next
        </h1>
      </div>
      <div className="redLine bg-[#DF2323] text-left rounded-full font-bold  my-8 mx-6 sm:mx-28 lg:mx-48 2xl:mx-64 text-3xl text-white p-4 md:p-8 sm:text-[4rem] w-min">
        Project
      </div>
      <div className="px-6 sm:px-48 lg:px-72 2xl:px-80 mb-20 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
        <svg
          className="ml-[14%] sm:ml-[11%] lg:ml-[4%] xl:ml-[2%] 2xl:ml-[5%]"
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

        <p className=" lg:w-2/5 2xl:w-1/4 text-lg font-medium text-start">
          Find out our project from below and let’s make your project dreams
          comes true!
        </p>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64">
        <div className="blackLine h-[1px] bg-black mb-10"></div>
      </div>

      <div className="form-1 px-6 sm:px-28 lg:px-48 2xl:px-64">
        <h1 className="text-3xl font-bold">Your Contact information</h1>
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

          <div className="mb-4">
            <input
              value={project}
              onChange={(e) => setProject(e.target.value)}
              type="text"
              id="field5"
              name="field5"
              placeholder="Your project name *"
              className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
            />
          </div>
        </form>
      </div>

      <div className="pt-12 pb-4 px-6 sm:px-28 lg:px-48 2xl:px-64">
        <div className="blackLine h-[1px] bg-black"></div>
      </div>

      <div className="form-2 px-6 sm:px-28 lg:px-48 2xl:px-64 my-10">
        <h1 className="text-3xl font-bold">Budget</h1>

        <div className="hidden xl:flex mt-5 gap-16 xl:pl-20 justify-center items-center">
          <div className="flex flex-col gap-8">
            <div
              className={`${getDivClass(1)} xl:w-[250px] 2xl:w-[320px]`}
              onClick={() => handleClick(1)}
            >
              Under 10.000 $
            </div>
            <div
              className={`${getDivClass(2)} xl:w-[250px] 2xl:w-[320px]`}
              onClick={() => handleClick(2)}
            >
              30.000 $ - 40.000 $
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div
              className={`${getDivClass(3)} xl:w-[250px] 2xl:w-[320px]`}
              onClick={() => handleClick(3)}
            >
              10.000 $ - 20.000 $
            </div>
            <div
              className={`${getDivClass(4)} xl:w-[250px] 2xl:w-[320px]`}
              onClick={() => handleClick(4)}
            >
              50.000 $ - 60.000 $
            </div>
          </div>
          <div>
            <div
              className={`${getDivClass(5)} xl:w-[200px]`}
              onClick={() => handleClick(5)}
            >
              Not decided
            </div>
          </div>
        </div>

        <div className="xl:hidden flex mt-8 md:mt-5 gap-8 lg:gap-12 flex-wrap md:px-20 lg:px-0 lg:pl-20 justify-center items-center">
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
            Tell us about your project in brief
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
            Attached files related to Project
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
        </div>
        <div className="text-left mt-8 text-xl font-normal text-black">
          Choose your timeline so that we understand your seriousness towards
          the project
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64">
        <div className="blackLine h-[1px] bg-black mb-10"></div>
      </div>

      <div className="form-3 flex my-8 gap-8 lg:gap-12 flex-wrap px-6 sm:px-28 lg:px-48 2xl:px-96 2xl:mx-20 justify-center items-center">
        {divData2.map(({ id, text }) => (
          <ClickableDiv2
            key={id}
            text={text}
            isActive={activeDiv2 === id}
            onClick={() => handleDivClick2(id)}
          />
        ))}
      </div>

      <div className="form-4 flex flex-col px-6 sm:px-28 lg:px-48 2xl:px-64 mb-8 gap-4">
        <div className="text-left text-black font-normal leading-normal md:leading-tight text-xl">
          By submitting this form you agree to{" "}
          <Link to="/privacy-policy" className="font-semibold underline">
            {" "}
            privacy policy{" "}
          </Link>{" "}
          of <strong className="font-semibold">HUDBIL PRIVATE LIMITED</strong>
        </div>
        <div
          onClick={() => status === "unchecked" && handleVerification()}
          className="w-fit rounded-full gap-3 md:gap-16 px-4 md:px-8 py-2 border-2 border-[#DF2323] text-[#DF2323] font-semibold text-base leading-7 flex items-center justify-center mt-8"
        >
          <div className="flex items-center gap-4">
            <div className="checkbox cursor-pointer w-5 h-5 border-2 bg-transparent z-10 border-[#DF2323] flex justify-center items-center">
              {status === "loading" && <FaSpinner className=" animate-spin" />}
              {status === "verified" && <FaCheckCircle />}
            </div>
            I’M NOT A ROBOT
          </div>
          <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.776 3.87224C12.4315 3.41202 14.1956 3.38554 15.8776 3.79565L15.8777 3.79567C16.9995 4.06917 18.0286 4.52004 18.9366 5.13577C19.6102 5.59256 20.5844 5.49046 21.1125 4.90762C21.6405 4.32482 21.5225 3.48205 20.8488 3.0252C19.6209 2.19257 18.2313 1.58339 16.7184 1.21452C14.4479 0.660933 12.0652 0.697122 9.82773 1.31913C8.04593 1.81446 6.43615 2.65624 5.11157 3.77779L5.78685 1.70485C6.01903 0.9921 5.53938 0.251488 4.71552 0.0506216C3.89163 -0.15027 3.0356 0.264717 2.80342 0.977466L1.21085 5.86642C0.978668 6.57917 1.45832 7.31978 2.28217 7.52065L7.85724 8.87992C7.99784 8.9142 8.13925 8.93054 8.27849 8.93052C8.95502 8.93049 9.57681 8.54418 9.7694 7.95308C10.0015 7.24033 9.5219 6.49972 8.69807 6.29885L7.04926 5.89686C8.07203 4.96442 9.34947 4.26881 10.776 3.87224Z"
              fill="url(#paint0_linear_1425_2479)"
            />
            <path
              d="M2.89867 17.5939C3.23128 17.9274 3.58972 18.2435 3.97263 18.5402C5.36655 19.6207 7.01932 20.3976 8.80714 20.8204L6.39803 21.3629C5.56968 21.5495 5.07297 22.2816 5.28862 22.9982C5.47017 23.6016 6.09881 24.0016 6.7874 24.0016C6.91662 24.0016 7.04798 23.9875 7.17888 23.958L12.8607 22.6784C13.2585 22.5889 13.5988 22.3663 13.8069 22.0596C14.0149 21.7529 14.0736 21.3873 13.9701 21.0431L12.5109 16.1936C12.2953 15.477 11.449 15.0473 10.6207 15.2339C9.79232 15.4204 9.29561 16.1526 9.51126 16.8692L9.94279 18.3034C8.49602 18.0105 7.15691 17.4078 6.04092 16.5429C4.7458 15.5391 3.82856 14.2352 3.38833 12.772C3.09471 11.7962 3.02484 10.8 3.18062 9.81106C3.29622 9.07734 2.70236 8.40149 1.85426 8.30151C1.00623 8.2015 0.224969 8.71524 0.109367 9.44899C-0.101292 10.7863 -0.00732793 12.1316 0.38866 13.4476C0.85287 14.9906 1.71085 16.4029 2.89867 17.5939Z"
              fill="url(#paint1_linear_1425_2479)"
            />
            <path
              d="M23.6033 5.86751C22.9945 5.34705 22.0132 5.35213 21.4116 5.87888L17.5765 9.23678C16.9749 9.76353 16.9807 10.6125 17.5896 11.133C18.1984 11.6534 19.1797 11.6483 19.7813 11.1216L20.9196 10.125C21.1293 10.7477 21.2464 11.3888 21.2691 12.0344C21.2771 12.2607 21.2734 12.4876 21.2582 12.7144C21.2521 12.8051 21.2441 12.8958 21.2343 12.9864C21.2048 13.2583 21.1585 13.5297 21.0953 13.7997C20.7502 15.2741 19.9146 16.6185 18.6789 17.6875C17.8548 18.4005 16.8971 18.9569 15.8323 19.3413C15.0424 19.6264 14.6692 20.4116 14.9988 21.095C15.2471 21.6097 15.8231 21.9199 16.4298 21.9199C16.6287 21.9199 16.831 21.8865 17.026 21.8161C18.4657 21.2964 19.7593 20.5453 20.8707 19.5838C22.5387 18.1407 23.6669 16.3247 24.1334 14.3319C24.2043 14.0286 24.2595 13.7238 24.2989 13.4184C24.3304 13.1742 24.3519 12.9295 24.3634 12.6848C24.3748 12.4401 24.3762 12.1954 24.3676 11.9512C24.3451 11.3151 24.2544 10.682 24.0971 10.0594L25.359 11.1382C25.6611 11.3964 26.0547 11.5252 26.4483 11.5252C26.848 11.5252 27.2476 11.3922 27.5508 11.1268C28.1524 10.6 28.1465 9.75109 27.5376 9.23062L23.6033 5.86751Z"
              fill="url(#paint2_linear_1425_2479)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1425_2479"
                x1="11.2975"
                y1="0"
                x2="11.2975"
                y2="8.93052"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE7272" />
                <stop offset="1" stop-color="#DF2323" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1425_2479"
                x1="7.01003"
                y1="8.28906"
                x2="7.01003"
                y2="24.0016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE7272" />
                <stop offset="1" stop-color="#DF2323" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1425_2479"
                x1="21.4385"
                y1="5.48047"
                x2="21.4385"
                y2="21.9199"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE7272" />
                <stop offset="1" stop-color="#DF2323" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="text-left my-4">
          <button
            onClick={handleSubmit}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            type="submit"
            class="inline-flex flex gap-6 text-left items-center justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-[#FCAB64] bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
          >
            SUBMIT
            <svg
              width="60"
              height="20"
              viewBox="0 0 70 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11.74H35H52H69M69 11.74L54.975 3M69 11.74L54.975 22"
                stroke={hover ? "white" : "#FCAB64"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="blackLine h-[1px] bg-black mt-8 lg:mt-12 mb-6"></div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64 mb-12">
        <div className="lg:px-6 flex flex-col xl:flex-row justify-between gap-10 xl:gap-6">
          <div className="flex flex-col gap-8">
            <div className="rounded-full bg-[#FCAB64] py-1 px-6 text-white font-normal text-base leading-7 w-fit">
              CALL US
            </div>
            <div className="flex gap-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8046 7.23673L33.4789 3.95813C33.142 3.14221 32.5136 2.53557 31.7509 2.3086C27.5157 0.977687 22.6559 0.157708 17.6434 0.0448847C12.521 0.134293 7.65702 0.926908 3.01238 2.34262C2.6512 2.46171 2.01977 3.06513 1.6853 3.86183L0.336197 7.15109C0.171194 7.53069 0.0738181 7.97797 0.0704227 8.4505L0.0648609 10.6256C0.0625971 10.6556 0.0625076 10.6906 0.0624117 10.7281C0.0599057 11.7082 0.753365 12.505 1.6107 12.5072C1.63476 12.5073 1.65882 12.5073 1.68288 12.5049L7.18996 12.519C8.0911 12.4963 8.81498 11.6581 8.81763 10.623C8.81774 10.578 8.81567 10.5355 8.81359 10.4905L8.81895 8.39536C8.81898 8.38536 8.819 8.37536 8.81903 8.36536C8.82049 7.79283 9.08204 7.29096 9.47427 7.00195C11.5487 5.73717 14.0045 4.9984 16.6093 5.00506C16.9505 5.00593 17.2873 5.01929 17.624 5.04516C17.8909 5.01834 18.254 5.00427 18.6214 5.00521C21.1978 5.01179 23.6214 5.74554 25.7484 7.03606C26.0605 7.28437 26.3195 7.78757 26.318 8.3601C26.318 8.3701 26.3179 8.3826 26.3179 8.3926L26.3124 10.5402C26.3102 10.5777 26.3078 10.6227 26.3077 10.6652C26.3051 11.6978 27.0247 12.5422 27.9235 12.5695L33.4371 12.5836C33.4568 12.5836 33.4809 12.5862 33.5049 12.5862C34.3623 12.5884 35.0598 11.7952 35.0623 10.8151C35.0624 10.7801 35.0625 10.7426 35.0604 10.7076L35.0659 8.53748C35.065 8.06495 34.9699 7.61717 34.8003 7.21921L34.8046 7.23673Z"
                  fill="#FCAB64"
                />
                <path
                  d="M26.2907 18.3159C24.9311 16.3198 24.1131 13.7725 24.1201 11.0099C24.1203 10.9399 24.1205 10.8699 24.1228 10.7999L24.1247 10.0598L21.9377 10.0542L21.9313 12.5544L13.1829 12.532L13.1893 10.0319L11.0022 10.0263L11.0001 10.8513C11 10.9113 11.002 10.9813 11.0018 11.0513C10.9947 13.814 10.1637 16.3545 8.77631 18.3711L2.20916 27.5049L2.18998 35.0054L32.8091 35.0837L32.8283 27.5832L26.2907 18.3159ZM17.5123 30.0442C13.8883 30.0349 10.9597 26.6697 10.9703 22.527C10.9809 18.3843 13.9267 15.0341 17.5507 15.0433C21.1747 15.0526 24.1034 18.4178 24.0928 22.5606C24.0822 26.7033 21.1363 30.0535 17.5123 30.0442Z"
                  fill="#FCAB64"
                />
                <path
                  d="M21.9035 22.5578C21.8965 25.3205 19.9333 27.5531 17.5166 27.5469C15.0998 27.5407 13.1481 25.2981 13.1552 22.5354C13.1622 19.7728 15.1254 17.5402 17.5421 17.5463C19.9589 17.5525 21.9106 19.7952 21.9035 22.5578Z"
                  fill="#FCAB64"
                />
              </svg>
              <p className="leading-tight text-lg md:text-2xl font-medium tracking-[4.5%] text-[#012033]">
                +91 88844-09369
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="rounded-full bg-[#FCAB64] py-1 px-6 text-white font-normal text-base leading-7 w-fit">
              EMAIL US
            </div>
            <div className="flex gap-4">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2 27.6608L15.322 32.6497L13.9429 32.8779L10.8566 19.8998L0 15.5479L33.4234 0L35 0.0430444L29.734 35L20.2 27.6608ZM28.5594 6.56868L13.2445 17.7734L15.0081 26.9549L15.4913 26.8214L17.3325 19.7362L29.5717 6.71503L28.5594 6.56868Z"
                  fill="#FCAB64"
                />
              </svg>
              <p className="leading-tight text-lg md:text-2xl font-medium tracking-[4.5%] text-[#012033]">
                info@hudbil.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-[#090909] font-medium text-2xl leading-9 w-fit">
              Our Clients Support
            </div>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="shadow-none"
            >
              <Link
                to="/support-us"
                class="hover:text-white w-fit inline-flex flex gap-6 text-left items-center justify-center py-2 px-6 md:px-6 border border-[#FCAB64] shadow-sm text-lg font-medium rounded-full text-[#FCAB64]"
              >
                Support Ticket
                <svg
                  width="60"
                  height="20"
                  viewBox="0 0 70 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11.74H35H52H69M69 11.74L54.975 3M69 11.74L54.975 22"
                    stroke={isHovered ? "white" : "#FCAB64"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64 mt-12 xl:mt-24 mb-20">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="lg:w-[345px] flex flex-col gap-8 items-left">
              <div className="flex flex-col gap-8 w-full w-fit">
                <div className="ml-[8%] rounded-full bg-[#FCAB64] tracking-[1px] py-1 px-6 text-white font-normal text-base leading-7 w-fit">
                  HEAD OFFICE
                </div>
                <div className="flex gap-4">
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.08942 5.30763C5.26097 5.31647 4.59649 5.97831 4.60511 6.78605C4.61372 7.59379 5.29217 8.2413 6.12062 8.23247C6.94907 8.22363 7.61355 7.56179 7.60493 6.75405C7.59632 5.94631 6.91787 5.2988 6.08942 5.30763ZM6.13102 9.20741C4.7506 9.22213 3.61952 8.14311 3.60516 6.79671C3.5908 5.45031 4.6986 4.34741 6.07902 4.33269C7.45944 4.31796 8.59052 5.39699 8.60488 6.74338C8.61924 8.08978 7.51144 9.19269 6.13102 9.20741ZM6.04263 0.920382C2.72932 0.955722 0.0709051 3.60356 0.105361 6.83404C0.131452 9.28018 5.21162 16.5355 6.20901 16.5195C7.19101 16.5144 12.1304 9.11904 12.1047 6.70606C12.0702 3.47558 9.35594 0.885043 6.04263 0.920382Z"
                      fill="#FCAB64"
                    />
                  </svg>
                  <p className="leading-6 text-lg font-semibold tracking-[4.5%] text-[#012033]">
                    235, 2nd & 3ed Floor, 13th Cross Rd, <br /> Indiranagar ||
                    Stage, Hoysala <br /> Nagar, Bangalore - 560038, <br />{" "}
                    Karnataka, India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 w-fit">
                <div className="ml-[8%] rounded-full bg-[#FCAB64] tracking-[1px] py-1 px-6 text-white font-normal text-base leading-7 w-fit">
                  BRANCH OFFICE
                </div>
                <div className="flex gap-4">
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.08942 5.30763C5.26097 5.31647 4.59649 5.97831 4.60511 6.78605C4.61372 7.59379 5.29217 8.2413 6.12062 8.23247C6.94907 8.22363 7.61355 7.56179 7.60493 6.75405C7.59632 5.94631 6.91787 5.2988 6.08942 5.30763ZM6.13102 9.20741C4.7506 9.22213 3.61952 8.14311 3.60516 6.79671C3.5908 5.45031 4.6986 4.34741 6.07902 4.33269C7.45944 4.31796 8.59052 5.39699 8.60488 6.74338C8.61924 8.08978 7.51144 9.19269 6.13102 9.20741ZM6.04263 0.920382C2.72932 0.955722 0.0709051 3.60356 0.105361 6.83404C0.131452 9.28018 5.21162 16.5355 6.20901 16.5195C7.19101 16.5144 12.1304 9.11904 12.1047 6.70606C12.0702 3.47558 9.35594 0.885043 6.04263 0.920382Z"
                      fill="#FCAB64"
                    />
                  </svg>
                  <p className="leading-6 text-lg font-semibold tracking-[4.5%] text-[#012033]">
                    74/II, “C” Cross Road, Opp Gate No <br /> 2, MIDC - 400093,
                    Seepz, <br /> Andheri East, Mumbai, <br /> Maharashtra.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 w-fit">
                <div className="ml-[8%] rounded-full bg-[#FCAB64] tracking-[1px] py-1 px-6 text-white font-normal text-base leading-7 w-fit">
                  BRANCH OFFICE
                </div>
                <div className="flex gap-4">
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.08942 5.30763C5.26097 5.31647 4.59649 5.97831 4.60511 6.78605C4.61372 7.59379 5.29217 8.2413 6.12062 8.23247C6.94907 8.22363 7.61355 7.56179 7.60493 6.75405C7.59632 5.94631 6.91787 5.2988 6.08942 5.30763ZM6.13102 9.20741C4.7506 9.22213 3.61952 8.14311 3.60516 6.79671C3.5908 5.45031 4.6986 4.34741 6.07902 4.33269C7.45944 4.31796 8.59052 5.39699 8.60488 6.74338C8.61924 8.08978 7.51144 9.19269 6.13102 9.20741ZM6.04263 0.920382C2.72932 0.955722 0.0709051 3.60356 0.105361 6.83404C0.131452 9.28018 5.21162 16.5355 6.20901 16.5195C7.19101 16.5144 12.1304 9.11904 12.1047 6.70606C12.0702 3.47558 9.35594 0.885043 6.04263 0.920382Z"
                      fill="#FCAB64"
                    />
                  </svg>
                  <p className="leading-6 text-lg font-semibold tracking-[4.5%] text-[#012033]">
                    90B, Delhi - Jaipur Expy, Udyog <br /> Vihar, Sector 18,
                    Gurugram, <br /> Sarhol, Haryana - 122008.
                  </p>
                </div>
              </div>
            </div>
            <div class="blackLine w-full h-[1px] lg:w-[1px] lg:h-full bg-black" />
          </div>

          <div className="flex flex-col gap-10 justify-center">
            <div className="rounded-full bg-[#FCAB64] tracking-[1px] py-1 px-6 text-white font-normal text-base leading-7 w-fit">
              CLICK BELOW TO REACH US !
            </div>
            <img
              onClick={openGoogleMaps}
              className="cursor-pointer"
              src="./map-img.png"
              alt="map"
            />
          </div>
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

export default Contact;
