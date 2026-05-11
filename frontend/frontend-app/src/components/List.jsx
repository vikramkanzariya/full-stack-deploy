import { useEffect, useState } from "react";
import api from "../api/api";

const List = () => {
  // const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  const fetchdata = async () => {
    try {
      const response = await api.get("http://localhost:8000/home");

      console.log("RESPONSE:", response)

      // setData(response.data);
      setMsg(response.data?.message);

    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <h4>LIST</h4>
      <p>{msg}</p>
    </>
  )
}


export default List;