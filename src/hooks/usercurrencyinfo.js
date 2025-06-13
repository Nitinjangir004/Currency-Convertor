import { useEffect ,useState } from "react";
import axios from 'axios';

 function UseCurrencyinfo(currency){
    const [data , setdata ] = useState({});
    useEffect(() => { 
        const fetchdata = async () => {
            const res = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            setdata(res.data[currency])
            console.log(data);
        };
        fetchdata();    
    } , [currency]);
    return data
};

export default UseCurrencyinfo ; 