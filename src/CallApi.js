// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Home from "./Pages/Home";

// const CallApi = (userId) => {
// 	const [mainData, setMainData] = useState(false);
//   const navigate = useNavigate();

// 	const { id } = useParams();

// 	useEffect(() => {
//     // eslint-disable-next-line eqeqeq
//     if(id == 12 || id == 18) {
//       const getData = () =>  {
//         axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
//           setMainData(res.data);
//       })}; getData() 
//     } else {
//       navigate("/404");
//     }
// 	}, [id, navigate, userId]);

  
// };


// export default CallApi;
