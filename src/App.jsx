// import { useRef, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Link } from "react-browser-router";
// import { useEffect } from "react";

// function App() {
//   let images = [
//     {
//       id: 1,
//       img: "https://images.unsplash.com/photo-1644167042631-a9fadfa7d747?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 2,
//       img: "https://images.unsplash.com/photo-1597407068889-782ba11fb621?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 3,
//       img: "https://images.unsplash.com/photo-1501963917309-56546c33e19d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   let [ButtonImg, setButtonImg] = useState(
//     "https://images.unsplash.com/photo-1523532372914-123737b90c6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   );
//   console.log(ButtonImg);
//   // useEffect(() => {
//   //   console.log(ButtonImg); // logs the updated state
//   // }, [ButtonImg]);

//   //form data handle
//   let Firstname = useRef();
//   let Lastname = useRef();
//   let Email = useRef();
//   let Password = useRef();
//   // ends form 


//   return (
//     <div
//       className={`w-full h-screen text-white bg-[#6e6d7a] flex justify-center items-center`}
//     >
//       <div
//         id="main"
//         className={`w-[80%] shadow-2xl  shadow-zinc-400 h-[80vh] bg-black rounded-lg p-6 m-auto flex  justify-between gap-5 items-center `}
//       >
//         <div
//           id="left"
//           className={`bg-[url${(ButtonImg) ? ButtonImg : ""}] bg-cover bg-center rounded-lg w-[40%] h-full relative`}
//         >
//           {/* left upper part */}
//           <nav className="flex justify-between items-center h-[15vh] px-6 ">
//             <img
//               className="w-20 rounded-full"
//               src="https://img.freepik.com/premium-vector/amu-letter-logo-design-with-polygon-shape-amu-polygon-cube-shape-logo-design-amu-hexagon-vector-logo-template-white-black-colors-amu-monogram-business-real-estate-logo_229120-36296.jpg"
//               alt="AMU Logo"
//             />
//             <div
//               id="navright"
//               className=" cursor-pointer flex justify-between items-center px-4  py-1 gap-4 text-xl rounded-full  border-zinc-200 bg-zinc-500"
//             >
//               <button>Back to website</button>
//               <i className="ri-arrow-right-line text-2xl"></i>
//             </div>
//           </nav>
//           {/* left upper part ends  */}

//           {/* left lower  part */}

//           <div
//             id="navLower"
//             className="w-full h-[40%] flex justify-center items-center gap-4 flex-col absolute bottom-0 text-center"
//           >
//             <h1 className="text-3xl">Capturing Moments</h1>
//             <h1 className="text-3xl">Creating Memories</h1>
//             <div
//               id="buttons"
//               className="flex justify-center items-center gap-3 mt-10"
//             >
//               <button
//                 onClick={() => {
//                   setButtonImg(
//                     "https://images.unsplash.com/photo-1644167042631-a9fadfa7d747?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   );
//                   console.log(ButtonImg);
//                 }}
//                 className="w-[70px] bg-white h-[6px] rounded-full"
//               ></button>
//               <button
//                 onClick={() => {
//                   setButtonImg(
//                     "https://images.unsplash.com/photo-1597407068889-782ba11fb621?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   );
//                   console.log(ButtonImg);
//                 }}
//                 className="w-[70px] bg-white h-[6px] rounded-full"
//               ></button>
//               <button
//                 onClick={() => {
//                   setButtonImg(
//                     "https://images.unsplash.com/photo-1501963917309-56546c33e19d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   );
//                   console.log(ButtonImg);
//                 }}
//                 className="w-[70px] bg-white h-[6px] rounded-full"
//               ></button>
//             </div>
//           </div>

//           {/* left upper part ends  */}
//         </div>

//         {/* left part ends  */}

//         {/* right part start  */}

//         <div id="right" className="w-[50%] h-full  text-white relative">
//           <div id="rightUpper" className="absolute top-[10%] ">
//             <h1 className="text-5xl">Create an account</h1>
//             <p className="text-lg mt-6">Already have an account? LogIn</p>
//           </div>
//           <div
//             id="rightMiddle"
//           >
//             <form
//               className="grid grid-cols-2 absolute top-[30%] w-[80%] gap-5"
//               action=""
//               onSubmit={(elem) => {
//                 elem.preventDefault();
//                 console.log(Firstname.current.value);
//                 console.log(Lastname.current.value);
//                 console.log(Email.current.value);
//                 console.log(Password.current.value);
//               }}
//             >
//               <input ref= {Firstname}
//                 type="text"
//                 placeholder="First Name"
//                 className=" bg-[#1e1e1e] border-2 border-[#433878] outline-none col-span-1 px-5 py-3 rounded-lg text-xl"
//               />
//               <input ref= {Lastname}
//                 type="text"
//                 placeholder="Last Name"
//                 className=" bg-[#1e1e1e] border-2 border-[#433878] outline-none col-span-1 px-5 py-3 rounded-lg text-xl"
//               />
//               <input ref= {Email}
//                 type="email"
//                 placeholder="Email"
//                 className=" bg-[#1e1e1e] border-2  border-[#433878] col-span-2 outline-none px-5 py-3 rounded-lg text-xl"
//               />
//               <input ref= {Password}
//                 type="password"
//                 placeholder="Password"
//                 className=" bg-[#1e1e1e] border-2  border-[#433878] outline-none  col-span-2 px-5 py-3 rounded-lg text-xl"
//               />
//               <div id="checkbox" className="flex justify-start gap-3  items-center">
//                 <input type="checkbox" className="w-5 h-5 mr-2" />
//                 <span>I agree to the terms and conditions</span>
//               </div>
//               <button className="col-span-2 py-3 text-xl font-medium hover:bg-[#7157f3] bg-[#433878] rounded-lg">
//                 Create account
//               </button>
//             </form>
//           </div>
//           <div
//             id="rigthLower"
//             className="grid grid-cols-2 gap-5 absolute top-[80%] text-center w-[80%] "
//           >
//             <h1 className="col-span-2 text-sm text-zinc-400">
//               Or register with
//             </h1>
//             <button className=" hover:bg-red-500 ease-in duration-200 transition-all border-zinc-600 border-2 flex gap-3 justify-center items-center font-medium px-5 py-3 rounded-lg text-xl">
//               <i className="ri-google-fill"></i> Google
//             </button>
//             <button className=" hover:bg-zinc-300 hover:text-black ease-in duration-200 transition-all border-zinc-600 border-2 flex gap-3 justify-center items-center font-medium px-5 py-3 rounded-lg text-xl">
//               <i className="ri-apple-fill"></i> Apple
//             </button>
//           </div>
//         </div>

//         {/* right part ends  */}
//       </div>
//     </div>
//   );
// }

// export default App;










// blackbox code 
import { useRef, useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom"; // corrected import statement
import From from "./Components/From";

function App() {
  // Image data
  

  return (
    <div
      className={`w-full h-screen text-white bg-[#6e6d7a] flex justify-center items-center`}
    >
     <From></From>
    </div>
  );
}

export default App;