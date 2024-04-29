// import React, { useState } from "react";
// import collegeData from "./college.json";

// function Diary() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCity("");
//   };

//   const handleFilterByCity = (city) => {
//     setSearchTerm("");
//     setSelectedCity(city);
//   };

//   const filteredColleges = collegeData.filter((item) => {
//     const matchesSearchTerm = item.college.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesSelectedCity = selectedCity === "" || item.city.toLowerCase() === selectedCity.toLowerCase();
//     return matchesSearchTerm && matchesSelectedCity;
//   });

//   // Extracting unique cities from the data
//   const uniqueCities = Array.from(new Set(collegeData.map((item) => item.city)));

//   function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   }

//   return (
//     <>

//       <div style={{ maxWidth: 600, margin: "0 auto" }}>
//         <div style={{ marginBottom: 10 }}>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by institute name..."
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginTop:"20%"
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: 10 }}>
//           {uniqueCities.map((city, index) => (
//             <button key={index} onClick={() => handleFilterByCity(city)} style={{ marginRight: 10 }}>
//               {toTitleCase(city)}
//             </button>
//           ))}
//           <button onClick={() => setSelectedCity("")}>Clear Filter</button>
//         </div>

//         <div className="card-container" style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center"
//         }}>
//           {filteredColleges.map((item, index) => (
//             <div className="card" key={index} style={{
//               position: "relative",
//               width: 200,
//               height: "auto",
//               margin: 10,
//               borderRadius: 10,
//               backgroundColor: "#f7f7f7",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               overflow: "hidden"
//             }}>
//               <div style={{ padding: 15 }}>
//                 <div style={{
//                   fontSize: 24,
//                   fontWeight: "bold",
//                   color: "#333"
//                 }}>
//                   {item.rank}
//                 </div>
//                 <div style={{
//                   marginTop: 10,
//                   fontSize: 18,
//                   color: "#666"
//                 }}>
//                   {item.college}
//                 </div>
//               </div>
//               <div className="city" style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 backgroundColor: "rgba(0, 0, 0, 0.7)",
//                 color: "#fff",
//                 padding: "5px",
//                 fontSize: "14px",
//                 transition: "opacity 0.3s",
//                 opacity: 0,
//                 pointerEvents: "none"
//               }}>
//                 {item.city}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Diary;


// import React, { useState } from "react";
// import collegeData from "./college.json";

// function Diary() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [showCityBox, setShowCityBox] = useState(false);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCity("");
//     setShowCityBox(true); // Show city box when search bar is clicked
//   };

//   const handleFilterByCity = (city) => {
//     setSearchTerm("");
//     setSelectedCity(city);
//     setShowCityBox(false); // Hide city box after selecting a city
//   };

//   // Extracting unique cities from the data
//   const uniqueCities = Array.from(new Set(collegeData.map((item) => item.city)));

//   function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   }

//   return (
//     <>
//       <div style={{ maxWidth: 600, margin: "0 auto" }}>
//         <div style={{ marginBottom: 10 }}>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by institute name..."
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginTop:"20%"
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: 10 }}>
//           <input
//             type="text"
//             value={selectedCity}
//             placeholder="Search by city..."
//             onClick={() => setShowCityBox(true)} // Show city box when search bar is clicked
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginBottom: "5px"
//             }}
//             readOnly // Make the city search bar read-only to prevent typing
//           />
//           {showCityBox && (
//             <div style={{ marginTop: 5, border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
//               {uniqueCities.map((city, index) => (
//                 <button key={index} onClick={() => handleFilterByCity(city)} style={{ marginRight: 10 }}>
//                   {toTitleCase(city)}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="card-container" style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center"
//         }}>
//           {collegeData
//             .filter((item) => {
//               const matchesSearchTerm = item.college.toLowerCase().includes(searchTerm.toLowerCase());
//               const matchesSelectedCity = selectedCity === "" || item.city.toLowerCase() === selectedCity.toLowerCase();
//               return matchesSearchTerm && matchesSelectedCity;
//             })
//             .map((item, index) => (
//               <div className="card" key={index} style={{
//                 position: "relative",
//                 width: 200,
//                 height: "auto",
//                 margin: 10,
//                 borderRadius: 10,
//                 backgroundColor: "#f7f7f7",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 overflow: "hidden"
//               }}>
//                 <div style={{ padding: 15 }}>
//                   <div style={{
//                     fontSize: 24,
//                     fontWeight: "bold",
//                     color: "#333"
//                   }}>
//                     {item.rank}
//                   </div>
//                   <div style={{
//                     marginTop: 10,
//                     fontSize: 18,
//                     color: "#666"
//                   }}>
//                     {item.college}
//                   </div>
//                 </div>
//                 <div className="city" style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                   backgroundColor: "rgba(0, 0, 0, 0.7)",
//                   color: "#fff",
//                   padding: "5px",
//                   fontSize: "14px",
//                   transition: "opacity 0.3s",
//                   opacity: 0,
//                   pointerEvents: "none"
//                 }}>
//                   {item.city}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Diary;


import React, { useState } from "react";
import collegeData from "./college.json";

function Diary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showCityBox, setShowCityBox] = useState(false);

  const handleSearchByInstitute = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCity("");
    setShowCityBox(false); // Hide city box when searching by institute name
  };

  const handleSearchByCity = (city) => {
    setSelectedCity(city);
    setShowCityBox(false); // Hide city box after selecting a city
  };

  // Extracting unique cities from the data
  const uniqueCities = Array.from(new Set(collegeData.map((item) => item.city)));

  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  // Filter colleges based on search term and selected city
  const filteredColleges = collegeData.filter((item) => {
    const matchesSearchTerm = item.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedCity = selectedCity === "" || item.city.toLowerCase() === selectedCity.toLowerCase();
    return matchesSearchTerm && matchesSelectedCity;
  });

  return (
    <>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchByInstitute}
            placeholder="Search by institute name..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop:"20%"
            }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            value={selectedCity}
            placeholder="Search by city..."
            onClick={() => setShowCityBox(true)} // Show city box when search bar is clicked
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "5px"
            }}
            readOnly // Make the city search bar read-only to prevent typing
          />
          {showCityBox && (
            <div style={{ marginTop: 5, border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
              {uniqueCities.map((city, index) => (
                <button key={index} onClick={() => handleSearchByCity(city)} style={{ marginRight: 10 }}>
                  {toTitleCase(city)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="card-container" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {filteredColleges.map((item, index) => (
            <div className="card" key={index} style={{
              position: "relative",
              width: 200,
              height: "auto",
              margin: 10,
              borderRadius: 10,
              backgroundColor: "#f7f7f7",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden"
            }}>
              <div style={{ padding: 15 }}>
                <div style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#333"
                }}>
                  {item.rank}
                </div>
                <div style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: "#666"
                }}>
                  {item.college}
                </div>
              </div>
              <div className="city" style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                padding: "5px",
                fontSize: "14px",
                transition: "opacity 0.3s",
                opacity: 0,
                pointerEvents: "none"
              }}>
                {item.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Diary;
