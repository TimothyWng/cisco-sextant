import { useEffect, useState } from "react"
import './IPDisplay.css'


const IPDisplay = ({ version }) => {
  const [ip, setIp] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchIP() {
      const url =
        version === "IPv4"
          ? "https://api.ipify.org?format=json"
          : "https://api64.ipify.org?format=json";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setIp(json.ip);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchIP();
  }, [version]);

  return (
    <div className="ip-display">
      <h2>Your {version} Address:</h2>
      {error ? <p>Error: {error}</p> : <p>{ip ? ip : "Loading..."}</p>}
    </div>
  );
};

export default IPDisplay;
