import { useState } from 'react'
import { InputBox } from './components'
import UseCurrencyinfo from './hooks/usercurrencyinfo';
import Image1 from './assets/Image1.jpg'


function App() {
const [amount , setamount] = useState(0);
 const [from ,setfrom] = useState("usd")
 const [to ,setTo] = useState("inr")
 const [convertedamount , setconvertedamount] = useState(0)
 const CurrencyInfo = UseCurrencyinfo(from)
 
 const swap = () =>{
    setfrom(to);
    setTo(from)
    setconvertedamount(amount);
    setamount(convertedamount);
 }
const convert =()=>{
    setconvertedamount(amount * CurrencyInfo[to])
}
 const options = Object.keys(CurrencyInfo);
 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:`url('${Image1}')`
            }}
        >
            <div className="w-full ">
                <div className="  w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <h1 className='text-center text-white text-xl mb-4'>Currency Convertor</h1>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOptions={options}
                                onCurrencyChange={(currency)=> setfrom(currency)}
                                 selectCurrency={from}
                                onAmountChange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedamount}
                                CurrencyOptions={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button onClick={convert}  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase() } to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App
