import { useEffect, useState } from "react"


//return data
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    //call an api when the hook is loaded / used then we will call this hook or we call that api
    //so which hook we can invoke when we want to mount or unmount the component. when the component is mount its lifestyle event is triggered 
    useEffect(() => {
        //call api and convert output from this url is in string format and convert it to json 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;