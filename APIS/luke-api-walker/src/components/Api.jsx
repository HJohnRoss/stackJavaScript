import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Api = (props) => {
  const [data, setData] = useState([]);
  const { category, id } = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      .then(response => {
        console.log(response.data)
        let arr = Object.entries(response.data);
        setData(arr);
        console.log(arr)
      })
  }, [category, id])
  return (
    <>
      {
        data.map((item, i) =>
          <div key={i}>
            <p>{item[0]} : {item[1]}</p>
          </div>
        )
      }
    </>
  )
}

export default Api 