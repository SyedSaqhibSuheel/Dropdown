import { useState } from "react"


const countries = [
  {name:"India", value:"IN", cities:["Bangalore", "Mumbai", "Delhi"]},
  {name:"USA", value:"US", cities:["NewYork", "Los Angeles"] }
]


export default function App(){

  const[countryName, setCountryName] = useState("");
  const[cityNames, setCityName] = useState([]);

  const handleChange = (e) => {
    const selectCountry = e.target.value;
    setCountryName(selectCountry)

    const country = countries.find((c) => (c.name) === selectCountry)
    setCityName(country ? country.cities : [])
  }

  return(
   <div style={{textAlign: "center", marginTop:"20%"}}>
    <select
    value={countryName}
    onChange={handleChange}
    >
      <option>--select country--</option>
      {countries.map((country) => (
        <option key={country.value} value={country.name}>
          {country.name}
        </option>
      ) )}

    </select>

    <select style={{marginLeft:"10px"}}>
      <option>--city name--</option>
      {cityNames.map((city, index) =>(
        <option key={index} value={city}>
          {city}
        </option>

      ))}


    </select>
   </div>
  )
}