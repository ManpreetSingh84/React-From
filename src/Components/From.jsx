import { useRef, useState } from "react";
import { Link } from "react-browser-router";
import { useEffect } from "react";

export default function From() {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1644167042631-a9fadfa7d747?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1597407068889-782ba11fb621?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1501963917309-56546c33e19d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // State for button image
  let DefaultImg =
    "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [buttonImg, setButtonImg] = useState(DefaultImg);

  // Refs for form data
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstnameRef.current.value);
    console.log(lastnameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  // Update button image on click
  const handleButtonImgChange = (imgUrl) => {
    setButtonImg(imgUrl);
  };
  return (
    <div
      id="main"
      className={`w-[80%] shadow-2xl overflow-hidden shadow-zinc-400 h-[80vh] bg-black rounded-lg p-6 m-auto flex  justify-between gap-5 items-center `}
    >
      <div
        id="left"
        className={` bg-cover bg-center rounded-lg w-[40%] h-full relative overflow-hidden hover:scale-110 transition-all ease duration-150   `}
        style={{ backgroundImage: `url(${buttonImg})` }}
      >
        {/* left upper part */}
        <nav className="flex justify-between items-center h-[15vh] px-6 ">
          <img
            className="w-14 rounded-full"
            src="https://img.freepik.com/premium-vector/amu-letter-logo-design-with-polygon-shape-amu-polygon-cube-shape-logo-design-amu-hexagon-vector-logo-template-white-black-colors-amu-monogram-business-real-estate-logo_229120-36296.jpg"
            alt="AMU Logo"
          />
          <div
            id="navright"
            className=" cursor-pointer flex justify-between items-center px-4  py-1 gap-4 text-sm rounded-full  border-zinc-200 bg-zinc-500"
          >
            <button>Back to website</button>
            <i className="ri-arrow-right-line text-2xl"></i>
          </div>
        </nav>
        {/* left upper part ends  */}

        {/* left lower  part */}

        <div
          id="navLower"
          className="w-full h-[40%] overflow-hidden flex justify-center items-center gap-4 flex-col absolute bottom-0 text-center"
        >
          <h1 className="text-xl">Capturing Moments</h1>
          <h1 className="text-xl">Creating Memories</h1>
          <div
            id="buttons"
            className="flex justify-center items-center gap-3 mt-5"
          >
            {images.map((image) => (
              <button
                key={image.id}
                onMouseEnter={() => handleButtonImgChange(image.img)}
                className="w-[65px] bg-white h-[10px] p-1  rounded-full "
              ></button>
            ))}
          </div>
        </div>

        {/* left upper part ends  */}
      </div>

      {/* left part ends  */}

      {/* right part start  */}

      <div id="right" className="w-[50%] h-full  text-white relative">
        <div id="rightUpper" className="absolute top-[2%] ">
          <h1 className="text-2xl">Create an account</h1>
          <p className="text-sm mt-2">Already have an account? LogIn</p>
        </div>
        <div id="rightMiddle">
          <form
            className="grid grid-cols-2 absolute top-[17%] w-[80%] gap-5"
            onSubmit={handleSubmit}
          >
            <input
              ref={firstnameRef}
              type="text"
              placeholder="First Name"
              className=" bg-[#1e1e1e] border-2 border-[#433878] outline-none col-span-1 px-5 py-3 rounded-lg text-sm"
            />
            <input
              ref={lastnameRef}
              type="text"
              placeholder="Last Name"
              className=" bg-[#1e1e1e] border-2 border-[#433878] outline-none col-span-1 px-5 py-3 rounded-lg text-sm"
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className=" bg-[#1e1e1e] border-2  border-[#433878] col-span-2 outline-none px-5 py-3 rounded-lg text-sm"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className=" bg-[#1e1e1e] border-2  border-[#433878] outline-none  col-span-2 px-5 py-3 rounded-lg text-sm"
            />
            <div
              id="checkbox"
              className="flex mt-1 justify-start gap-3  items-center w-full"
            >
              <input type="checkbox" className="w-3 h-3 mr-2" />
                <span  className="text-[10px]  flex">I agree to the terms and conditions</span>
            </div>
            <button className="col-span-2 py-3 text-sm font-medium hover:bg-[#7157f3] bg-[#433878] rounded-lg">
              Create account
            </button>
          </form>
        </div>
        <div
          id="rigthLower"
          className="grid grid-cols-2 gap-5 absolute top-[60%] xl:top-[80%] text-center w-[80%] "
        >
          <h1 className="col-span-2 text-sm text-zinc-400">Or register with</h1>
          <button className=" hover:bg-red-500 ease-in duration-200 transition-all border-zinc-600 border-2 flex gap-3 justify-center items-center font-medium px-5 py-3 rounded-lg text-sm">
            <i className="ri-google-fill"></i> Google
          </button>
          <button className=" hover:bg-zinc-300 hover:text-black ease-in duration-200 transition-all border-zinc-600 border-2 flex gap-3 justify-center items-center font-medium px-5 py-3 rounded-lg text-sm">
            <i className="ri-apple-fill"></i> Apple
          </button>
        </div>
      </div>

      {/* right part ends  */}
    </div>
  );
}
