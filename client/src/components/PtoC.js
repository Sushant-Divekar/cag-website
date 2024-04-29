// import { useState } from "react";
// import styles from "./PtoC.module.scss";
// import { Link } from "react-router-dom";

// function PredictionInfo() {
//   const [inputValue, setInputValue] = useState("");

//   function handleInputChange(e) {
//     setInputValue(e.target.value);
//   }

//   const [isOpen, setIsOpen] = useState(false);
//   function toggleDiv() {
//     setIsOpen(!isOpen);
//   }

//   const [checkedBranches, setCheckedBranches] = useState([]);
//   function handleCheckboxChange(e) {
//     const { name, checked } = e.target;
//     const branchIndex = parseInt(name, 10); // Convert branch name to index
//     console.log(checked);
//     // Check if the branchId is already in the checkedBranches array
//     if (checked) {
//       // setCheckedBranches((prevCheckedItems) => [...prevCheckedItems, name]);
//       setCheckedBranches((prevCheckedItems) => [...prevCheckedItems, branchIndex]);
//     } else {
//       setCheckedBranches((prevCheckedItems) =>
//         // prevCheckedItems.filter((item) => item !== name)
//         prevCheckedItems.filter((item) => item !== branchIndex)
//       );
//     }
//   }

//   const [selectedCategory, setSelectedCategory] = useState(
//     "Enter Your Category"
//   );

//   const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
//   function toggleDropdown() {
//     setIsDropDownOpen(!IsDropDownOpen);
//   }
//   function handleOptionClick(option) {
//     setSelectedCategory(option);
//     setIsDropDownOpen(false);
//   }

//   function getCategoryIndex(category) {
//     const categories = ["open", "ews", "tfws", "st", "sc", "obc", "vjnt", "nt1", "nt2", "nt3"];
//     return categories.indexOf(category);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const percentValue = parseFloat(inputValue); 
//     console.log("Input Percentile ==> ", inputValue);
//     console.log("Branches choosed ==> ", checkedBranches);
//     console.log("Category choosed ==> ", selectedCategory);
//   }

//   const [predictedCollege, setPredictedCollege] = useState("");
//   function handleSubmitpost(e) {
//     e.preventDefault();
//     fetch("http://127.0.0.1:5000/predict", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Category: selectedCategory,
//         Branch: checkedBranches,
//         Percentile: inputValue,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setPredictedCollege(data.prediction);
//       })
//       .catch((error) => console.error("Error:", error));
//   }


//   return (
//     <>
//       <div className={styles.circle}></div>
//       <div className={styles.rectangle}></div>
//       <form onSubmit={handleSubmitpost} className={styles.forms}>
//         <div className={styles.container}>
//           <div className={styles.percentile_section}>
//             <div className={styles.percentile}>
//               Predict Your College From Your Percentile
//             </div>
//             <input
//               className={styles.get_percentile}
//               placeholder="Enter Your Percentile"
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//             />
//             {/* <input className={styles.get_percentile} type="number" value={inputValue} onChange={handleInputChange} step="any" min="0" max="100"/> */}
//           </div>

//           <div className={styles.branch_section}>
//             <div className={styles.branch} onClick={toggleDiv}>
//               Enter your Branch
//             </div>
//             {isOpen && (
//               <div className={styles.branch_selection}>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="0"
//                     name="0"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="0">Computer</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="1"
//                     name="1"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="1">IT</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="2"
//                     name="2"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="3">Electrical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="3"
//                     name="3"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="3">Mechanical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="4"
//                     name="4"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="4">
//                     Electronics and Telecommunication
//                   </label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="5"
//                     name="5"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="5">Civil</label>
//                 </li>
//               </div>
//             )}
//           </div>
//           <div className={styles.category_section}>
//             <div>
//               <button
//                 className={styles.category_select}
//                 onClick={toggleDropdown}
//               >
//                 {selectedCategory}
//               </button>
//               {IsDropDownOpen && (
//                 <div className={styles.category_dropdown}>
//                   <button
//                     onClick={() => handleOptionClick("open")}
//                     className={styles.dropdown_option}
//                   >
//                     OPEN
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("ews")}
//                     className={styles.dropdown_option}
//                   >
//                     EWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("tfws")}
//                     className={styles.dropdown_option}
//                   >
//                     TFWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("st")}
//                     className={styles.dropdown_option}
//                   >
//                     ST
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("sc")}
//                     className={styles.dropdown_option}
//                   >
//                     SC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("obc")}
//                     className={styles.dropdown_option}
//                   >
//                     OBC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("vjnt")}
//                     className={styles.dropdown_option}
//                   >
//                     VJNT
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt1")}
//                     className={styles.dropdown_option}
//                   >
//                     NT1
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt2")}
//                     className={styles.dropdown_option}
//                   >
//                     NT2
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt3")}
//                     className={styles.dropdown_option}
//                   >
//                     NT3
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* <Link to = "/result"> */}
//               <button
//                 type="submit"
//                 className={styles.proceedButton}
//                 onClick={handleSubmit}
//               >
//                 <Link to = "/result">Proceed</Link>
//               </button>
//             {/* </Link> */}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default PredictionInfo;

// import { useState } from "react";
// import styles from "./PtoC.module.scss";
// import { Link } from "react-router-dom";

// function PtoC() {
//   const [inputValue, setInputValue] = useState("");

//   function handleInputChange(e) {
//     setInputValue(e.target.value);
//   }

//   const [isOpen, setIsOpen] = useState(false);
//   function toggleDiv() {
//     setIsOpen(!isOpen);
//   }

//   const [checkedBranches, setCheckedBranches] = useState([]);
//   function handleCheckboxChange(e) {
//     const { name, checked } = e.target;
//     const branchIndex = parseInt(name, 10); // Convert branch name to index
//     console.log(checked);
//     // Check if the branchId is already in the checkedBranches array
//     if (checked) {
//       setCheckedBranches((prevCheckedItems) => [...prevCheckedItems, branchIndex]);
//     } else {
//       setCheckedBranches((prevCheckedItems) =>
//         prevCheckedItems.filter((item) => item !== branchIndex)
//       );
//     }
//   }

//   const [selectedCategory, setSelectedCategory] = useState(
//     "Enter Your Category"
//   );

//   const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
//   function toggleDropdown() {
//     setIsDropDownOpen(!IsDropDownOpen);
//   }
//   function handleOptionClick(option) {
//     setSelectedCategory(option);
//     setIsDropDownOpen(false);
//   }

//   function getCategoryIndex(category) {
//     const categories = ["open", "ews", "tfws", "st", "sc", "obc", "vjnt", "nt1", "nt2", "nt3"];
//     return categories.indexOf(category);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const categoryIndex = getCategoryIndex(selectedCategory);
//     const percentValue = parseFloat(inputValue); 
//     console.log("Input Percentile ==> ", percentValue);
//     console.log("Branches choosed ==> ", checkedBranches);
//     console.log("Category choosed ==> ", selectedCategory , categoryIndex);
//   }

//   //const [predictedCollege, setPredictedCollege] = useState("");
//   function handleSubmitpost(e) {
//     e.preventDefault();
//     const categoryIndex = getCategoryIndex(selectedCategory);
//     const percentValue = parseFloat(inputValue); 
//     fetch("http://127.0.0.1:5000/predict", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Category: categoryIndex,
//         Branch: checkedBranches,
//         Percentile: percentValue,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         //setPredictedCollege(data.prediction);
//         console.log(data.prediction)
//       })
//       .catch((error) => console.error("Error:", error));
//   }


//   return (
//     <>
//       <div className={styles.circle}></div>
//       <div className={styles.rectangle}></div>
//       <form onSubmit={handleSubmitpost} className={styles.forms}>
//         <div className={styles.container}>
//           <div className={styles.percentile_section}>
//             <div className={styles.percentile}>
//               Predict Your College From Your Percentile
//             </div>
//             <input
//               className={styles.get_percentile}
//               placeholder="Enter Your Percentile"
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.branch_section}>
//             <div className={styles.branch} onClick={toggleDiv}>
//               Enter your Branch
//             </div>
//             {isOpen && (
//               <div className={styles.branch_selection}>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="0"
//                     name="0"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="0">Computer</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="1"
//                     name="1"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="1">IT</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="2"
//                     name="2"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="2">Electrical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="3"
//                     name="3"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="3">Mechanical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="4"
//                     name="4"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="4">
//                     Electronics and Telecommunication
//                   </label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="5"
//                     name="5"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="5">Civil</label>
//                 </li>
//               </div>
//             )}
//           </div>
//           <div className={styles.category_section}>
//             <div>
//               <button
//                 className={styles.category_select}
//                 onClick={toggleDropdown}
//               >
//                 {selectedCategory}
//               </button>
//               {IsDropDownOpen && (
//                 <div className={styles.category_dropdown}>
//                   <button
//                     onClick={() => handleOptionClick("open")}
//                     className={styles.dropdown_option}
//                   >
//                     OPEN
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("ews")}
//                     className={styles.dropdown_option}
//                   >
//                     EWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("tfws")}
//                     className={styles.dropdown_option}
//                   >
//                     TFWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("st")}
//                     className={styles.dropdown_option}
//                   >
//                     ST
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("sc")}
//                     className={styles.dropdown_option}
//                   >
//                     SC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("obc")}
//                     className={styles.dropdown_option}
//                   >
//                     OBC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("vjnt")}
//                     className={styles.dropdown_option}
//                   >
//                     VJNT
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt1")}
//                     className={styles.dropdown_option}
//                   >
//                     NT1
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt2")}
//                     className={styles.dropdown_option}
//                   >
//                     NT2
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt3")}
//                     className={styles.dropdown_option}
//                   >
//                     NT3
//                   </button>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className={styles.proceedButton}
//               onClick={handleSubmit}
//             >
//               <Link >Proceed</Link>
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default PtoC;


// import { useState } from "react";
// import styles from "./PtoC.module.scss";
// import collegeMapping from './collegeMapping.js';

// function PtoC() {
//   const [inputValue, setInputValue] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [checkedBranches, setCheckedBranches] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Enter Your Category");
//   const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [collegeName, setCollegeName] = useState("");
//   const [collegeId, setCollegeId] = useState("");

//   function handleInputChange(e) {
//     setInputValue(e.target.value);
//   }

//   function toggleDiv() {
//     setIsOpen(!isOpen);
//   }

//   function handleCheckboxChange(e) {
//     const { name, checked } = e.target;
//     const branchIndex = parseInt(name, 10); // Convert branch name to index
//     if (checked) {
//       setCheckedBranches((prevCheckedItems) => [...prevCheckedItems, branchIndex]);
//     } else {
//       setCheckedBranches((prevCheckedItems) =>
//         prevCheckedItems.filter((item) => item !== branchIndex)
//       );
//     }
//   }

//   function toggleDropdown() {
//     setIsDropDownOpen(!IsDropDownOpen);
//   }

//   function handleOptionClick(option) {
//     setSelectedCategory(option);
//     setIsDropDownOpen(false);
//   }

//   function getCategoryIndex(category) {
//     const categories = ["open", "ews", "tfws", "st", "sc", "obc", "vjnt", "nt1", "nt2", "nt3"];
//     return categories.indexOf(category);
//   }

//   function handleClick() {
//     const categoryIndex = getCategoryIndex(selectedCategory);
//     const percentValue = parseFloat(inputValue); 
//     return fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             Category: categoryIndex,
//             Branch: checkedBranches,
//             Percentile: percentValue,
//         }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         return data.prediction;
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//         throw error;
//     });
// }

// function handleCollegeName() {
//     handleClick()
//     .then((collegeID) => {

//       if (collegeMapping.hasOwnProperty(collegeID)) {
//         const collegeName = collegeMapping[parseInt(collegeID)];
//         console.log(collegeName)
//         console.log(collegeID)
//         setCollegeId(collegeID);
//         setCollegeName(collegeName);
//         setShowPopup(true);
//       }
//       else {
//         console.log("College ID not found in mapping.");
//       }
        
        
//     })
//     .catch((error) => {
//         // Handle error if needed
//         console.error("Error:", error);
//     });
// }

//   function Popup({ collegeId , collegeName, onClose }) {
//     return (
//       <div className={styles.popupBackground} onClick={onClose}>
//         <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
//           <span className={styles.close} onClick={onClose}>&times;</span> {/* Close button */}
//           <div className={styles.popupContent}>
//             <h2>Predicted College</h2>
//             <p>{collegeId}<br/>{collegeName}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className={styles.circle}></div>
//       <div className={styles.rectangle}></div>
//       <form onSubmit={e => e.preventDefault()} className={styles.forms}>
//         <div className={styles.container}>
//           <div className={styles.percentile_section}>
//             <div className={styles.percentile}>
//               Predict Your College From Your Percentile
//             </div>
//             <input
//               className={styles.get_percentile}
//               placeholder="Enter Your Percentile"
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.branch_section}>
//             <div className={styles.branch} onClick={toggleDiv}>
//               Enter your Branch
//             </div>
//             {isOpen && (
//               <div className={styles.branch_selection}>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="0"
//                     name="0"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="0">Computer</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="1"
//                     name="1"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="1">IT</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="2"
//                     name="2"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="2">Electrical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="3"
//                     name="3"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="3">Mechanical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="4"
//                     name="4"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="4">
//                     Electronics and Telecommunication
//                   </label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="5"
//                     name="5"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="5">Civil</label>
//                 </li>
//               </div>
//             )}
//           </div>
//           <div className={styles.category_section}>
//             <div>
//               <button
//                 className={styles.category_select}
//                 onClick={toggleDropdown}
//               >
//                 {selectedCategory}
//               </button>
//               {IsDropDownOpen && (
//                 <div className={styles.category_dropdown}>
//                   <button
//                     onClick={() => handleOptionClick("open")}
//                     className={styles.dropdown_option}
//                   >
//                     OPEN
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("ews")}
//                     className={styles.dropdown_option}
//                   >
//                     EWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("tfws")}
//                     className={styles.dropdown_option}
//                   >
//                     TFWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("st")}
//                     className={styles.dropdown_option}
//                   >
//                     ST
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("sc")}
//                     className={styles.dropdown_option}
//                   >
//                     SC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("obc")}
//                     className={styles.dropdown_option}
//                   >
//                     OBC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("vjnt")}
//                     className={styles.dropdown_option}
//                   >
//                     VJNT
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt1")}
//                     className={styles.dropdown_option}
//                   >
//                     NT1
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt2")}
//                     className={styles.dropdown_option}
//                   >
//                     NT2
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt3")}
//                     className={styles.dropdown_option}
//                   >
//                     NT3
//                   </button>
//                 </div>
//               )}
//             </div>

//             <button
//               type="button"
//               className={styles.proceedButton}
//               onClick={handleCollegeName}
//             >
//               Proceed
//             </button>
//           </div>
//         </div>
//       </form>
//       {showPopup && (
//         <Popup collegeName={collegeName} collegeId = {collegeId} onClose={() => setShowPopup(false)} />
//       )}
//     </>
//   );
// }

// export default PtoC;


import { useState } from "react";
import styles from "./PtoC.module.scss";
import collegeMapping from './collegeMapping.js';

function PtoC() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [checkedBranches, setCheckedBranches] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Enter Your Category");
  const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [collegeName, setCollegeName] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [collegesAbove, setCollegesAbove] = useState([]);
  const [collegesBelow, setCollegesBelow] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function toggleDiv() {
    setIsOpen(!isOpen);
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    const branchIndex = parseInt(name, 10); // Convert branch name to index
    if (checked) {
      setCheckedBranches((prevCheckedItems) => [...prevCheckedItems, branchIndex]);
    } else {
      setCheckedBranches((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== branchIndex)
      );
    }
  }

  function toggleDropdown() {
    setIsDropDownOpen(!IsDropDownOpen);
  }

  function handleOptionClick(option) {
    setSelectedCategory(option);
    setIsDropDownOpen(false);
  }

  function getCategoryIndex(category) {
    const categories = ["open", "ews", "tfws", "st", "sc", "obc", "vjnt", "nt1", "nt2", "nt3"];
    return categories.indexOf(category);
  }

  function handleClick() {
    const categoryIndex = getCategoryIndex(selectedCategory);
    const percentValue = parseFloat(inputValue); 
    return fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Category: categoryIndex,
            Branch: checkedBranches,
            Percentile: percentValue,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        return data.prediction;
    })
    .catch((error) => {
        console.error("Error:", error);
        throw error;
    });
}

function handleCollegeName() {
  handleClick()
  .then((collegeID) => {

    if (collegeMapping.hasOwnProperty(collegeID)) {
      const collegeName = collegeMapping[parseInt(collegeID)];
      setCollegeId(collegeID);
      setCollegeName(collegeName);

      console.log("College ID:", collegeID, "College Name:", collegeName);

      console.log("collegeID:" , collegeID);
      console.log("collegeID type:", typeof collegeID);
     
      const collegeKeys = Object.keys(collegeMapping);
      const index = collegeKeys.indexOf(collegeID.toString());
      

      const mappingLength = Object.keys(collegeMapping).length;
      console.log("index : " , index);
      console.log("mappingLength : " , mappingLength);
      

      // Initialize arrays to store colleges above and below the predicted college
      let collegesAbove = [];
      let collegesBelow = [];

      // Check if there are colleges present above the predicted college
      if (index === 0) {
        collegesBelow = collegeKeys.slice(1, 6); // Take 4 colleges below
      } else if (index === 1) {
        collegesAbove = collegeKeys.slice(0, 1); // Take 1 college above
        collegesBelow = collegeKeys.slice(2, 5); // Take 3 colleges below
      } else if (index === mappingLength - 1) {
        collegesAbove = collegeKeys.slice(mappingLength - 5, mappingLength - 1); // Take 4 colleges above
      } else if (index === mappingLength - 2) {
        collegesBelow = collegeKeys.slice(mappingLength - 4, mappingLength - 1); // Take 3 colleges below
        collegesAbove = collegeKeys.slice(mappingLength - 5, mappingLength - 2); // Take 1 college above
      } else {
        // Extract the colleges above and below the predicted college
        collegesAbove = collegeKeys.slice(index - 1, index);
        collegesBelow = collegeKeys.slice(index + 1, index + 4);
      }

      // Update state with the selected colleges
      setCollegesAbove(collegesAbove);
      setCollegesBelow(collegesBelow);

      setShowPopup(true);
    }
    else {
      console.log("College ID not found in mapping.");
    }
  })
  .catch((error) => {
      // Handle error if needed
      console.error("Error:", error);
  });
}


  function Popup({ collegeId , collegeName, collegesAbove, collegesBelow, onClose }) {
    return (
      <div className={styles.popupBackground} onClick={onClose}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <span className={styles.close} onClick={onClose}>&times;</span> {/* Close button */}
          <div className={styles.popupContent}>
            <h2>Predicted College</h2>
            <p>{collegeId}<br/>{collegeName}</p>
            <h2>Colleges Above</h2>
            {collegesAbove.map(collegeID => <p key={collegeID}>{collegeID}: {collegeMapping[collegeID]}</p>)}
            <h2>Colleges Below</h2>
            {collegesBelow.map(collegeID => <p key={collegeID}>{collegeID}: {collegeMapping[collegeID]}</p>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.rectangle}></div>
      <form onSubmit={e => e.preventDefault()} className={styles.forms}>
        <div className={styles.container}>
          <div className={styles.percentile_section}>
            <div className={styles.percentile}>
              Predict Your College From Your Percentile
            </div>
            <input
              className={styles.get_percentile}
              placeholder="Enter Your Percentile"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.branch_section}>
            <div className={styles.branch} onClick={toggleDiv}>
              Enter your Branch
            </div>
            {isOpen && (
              <div className={styles.branch_selection}>
                <li>
                  <input
                    type="checkbox"
                    id="0"
                    name="0"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="0">Computer</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="1"
                    name="1"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="1">IT</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="2"
                    name="2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="2">Electrical</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="3"
                    name="3"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="3">Mechanical</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="4"
                    name="4"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="4">
                    Electronics and Telecommunication
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="5"
                    name="5"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="5">Civil</label>
                </li>
              </div>
            )}
          </div>
          <div className={styles.category_section}>
            <div>
              <button
                className={styles.category_select}
                onClick={toggleDropdown}
              >
                {selectedCategory}
              </button>
              {IsDropDownOpen && (
                <div className={styles.category_dropdown}>
                  <button
                    onClick={() => handleOptionClick("open")}
                    className={styles.dropdown_option}
                  >
                    OPEN
                  </button>
                  <button
                    onClick={() => handleOptionClick("ews")}
                    className={styles.dropdown_option}
                  >
                    EWS
                  </button>
                  <button
                    onClick={() => handleOptionClick("tfws")}
                    className={styles.dropdown_option}
                  >
                    TFWS
                  </button>
                  <button
                    onClick={() => handleOptionClick("st")}
                    className={styles.dropdown_option}
                  >
                    ST
                  </button>
                  <button
                    onClick={() => handleOptionClick("sc")}
                    className={styles.dropdown_option}
                  >
                    SC
                  </button>
                  <button
                    onClick={() => handleOptionClick("obc")}
                    className={styles.dropdown_option}
                  >
                    OBC
                  </button>
                  <button
                    onClick={() => handleOptionClick("vjnt")}
                    className={styles.dropdown_option}
                  >
                    VJNT
                  </button>
                  <button
                    onClick={() => handleOptionClick("nt1")}
                    className={styles.dropdown_option}
                  >
                    NT1
                  </button>
                  <button
                    onClick={() => handleOptionClick("nt2")}
                    className={styles.dropdown_option}
                  >
                    NT2
                  </button>
                  <button
                    onClick={() => handleOptionClick("nt3")}
                    className={styles.dropdown_option}
                  >
                    NT3
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              className={styles.proceedButton}
              onClick={handleCollegeName}
            >
              Proceed
            </button>
          </div>
        </div>
      </form>
      {showPopup && (
        <Popup collegeName={collegeName} collegeId = {collegeId} collegesAbove={collegesAbove} collegesBelow={collegesBelow} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}

export default PtoC;
