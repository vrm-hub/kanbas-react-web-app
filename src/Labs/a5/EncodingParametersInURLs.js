import React, { useEffect, useState } from "react";
import axios from "axios";


function EncodingParametersInURLs() {
  const request = axios.create({
    withCredentials: true,
  });
  
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await request.get(`${process.env.REACT_APP_BASE_URL}/a5/welcome`);
    setWelcome(response.data);
  };
  const [result, setResult] = useState(0);
  const fetchSum = async (a, b) => {
    const response = await request.get(`${process.env.REACT_APP_BASE_URL}/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a, b) => {
    const response = await request.get(
      `${process.env.REACT_APP_BASE_URL}/a5/subtract/${a}/${b}`
    );
    setResult(response.data);
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />
      <h3>Path Parameters</h3>
      <a
        href={`${process.env.REACT_APP_BASE_URL}/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`${process.env.REACT_APP_BASE_URL}/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
      <input
        value={result}
        className="form-control mb-2"
        type="number"
        readOnly
      />
      <h3>Fetch Result</h3>
      <button
        onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100"
      >
        Fetch Sum of {a} + {b}
      </button>
      <button
        onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100"
      >
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Query Parameters</h3>
      <a
        href={`${process.env.REACT_APP_BASE_URL}/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`${process.env.REACT_APP_BASE_URL}/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
      <h1>Integrating React with APIs</h1>
      <h2>Fetching Welcome</h2>
      <h6>{welcome}</h6>
    </div>
  );
}
export default EncodingParametersInURLs;
