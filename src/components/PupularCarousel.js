// import axios from "axios";
// import { setState } from "expect";
// import { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";

// export default () => {
//   const mostPopular = [
//     "hulk",
//     "spider",
//     "thanos",
//     "iron man",
//     "captain america",
//     "doctor strange",
//     "thor",
//     "deadpool",
//   ];
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const fetchData = () => {
//       // let array = [];
//       try {
//         mostPopular.forEach(async (elem) => {
//           const response = await axios.get(
//             `http://localhost:5000/characters?limit=5`,
//             { name: elem }
//           );
//           console.log(response.data.results);
//         });
//       } catch (err) {
//         console.log(err.message);
//       }
//       // setData(array);
//       // setIsLoading(false);
//       // console.log(data);
//     };
//     fetchData();
//   }, []);

//   return isLoading ? (
//     <div>Loading... </div>
//   ) : (
//     <Carousel autoPlay>
//       <div>
//         <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//         <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
//         <p className="legend">Legend 2</p>
//       </div>
//     </Carousel>
//   );
// };
