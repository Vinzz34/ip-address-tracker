import Input from "./components/Input"
import { useState,useEffect } from "react";
import Map from "./components/Map";
import Info from "./components/Info";


const App = () => {

  const [parameter,setParameter] = useState("");
  const [data,setData] = useState();
  const [isIp,setIsIp] = useState();
  const [isValid,setIsValid] = useState(true);

  useEffect(() => {
    async function fetchData(){

      try{
          const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&${isIp ? "ipAddress" : "domain"}=${parameter}`);

          if(!response.ok){
            setIsValid(false);
            throw new Error("Domain does not exist");
          }

          const data = await response.json();

          if(data.location.lat === 0 && data.location.lng === 0){
            setIsValid(false);
            throw new Error("IP address does not exist");
          }

          setData(data);

      }
      catch(error){
          console.error(error);
      }
  }

  fetchData();
  },[parameter,isIp]);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[35vh] bg-mobile sm:bg-desktop bg-no-repeat bg-[length:100vw_100%] px-6 pt-7 sm:pt-8 text-center">
        <h1 className="text-white text-2xl sm:text-3xl mb-7 sm:mb-8">IP Address Tracker</h1>
        <Input setParameter={setParameter} setIsIp={setIsIp} isValid={isValid} setIsValid={setIsValid} />
        <Info data={data} />
      </div>
      <Map data={data} />
    </div>
  )
}

export default App