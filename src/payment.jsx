import React, { useState } from "react";

const Payment = () => {
    const addresses = [
        {
            id: 1,
            name: "HOME",
            address: "RAVI SOCIETY DEVLALI CAMP NASHIK",
            city: "NASHIK",
            state: "MAHARASHTRA",
            pincode: "422401",
            phone: "1234567890"
        },
        {
            id: 2,
            name: "WORK",
            address: "GARVA HOSTEL",
            city: "PUNE",
            state: "MAHARASHTRA",
            pincode: "422303",
            phone: "12345365567890"
        }
    ];

    const payments = [
        { id: 1, name: "CREDIT CARD", icon: "fa-credit-card" },
        { id: 2, name: "DEBIT CARD", icon: "fa-credit-card" },
        { id: 3, name: "NET BANKING", icon: "fa-university" },
        { id: 4, name: "PAYPAL", icon: "fa-paypal" }
    ];
    const [selectAddress, setSelectAddress] = useState(addresses[0]?.id || null);
    const [payment, setPayment] = useState(payments[0]?.id || null);

    

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
       
            <div className="flex items-center justify-center mb-6">
                <p className="text-3xl font-bold text-gray-500">CHECKOUT</p>
            </div>

           
            <div>
                <p className="text-xl font-bold p-5">SHIPPING ADDRESS</p>
                {addresses.map((address) => (
                    <div
                        key={address.id}
                        className={`h-[100px] w-full rounded-xl bg-white m-4 flex items-center gap-10 
                                    border-2 cursor-pointer transition-all hover:shadow-lg 
                                    ${selectAddress === address.id ? "border-orange-500 shadow-md" : "border-gray-300"}`}
                        onClick={() => setSelectAddress(address.id)}
                    >
                      
                        <div className="flex items-center p-5">
                            <div
                                className={`h-[20px] w-[20px] rounded-full border-4 transition-all
                                            ${selectAddress === address.id ? "border-orange-500 bg-orange-500" : "border-gray-500 bg-white"}`}
                            ></div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex gap-10">
                                <p className="text-gray-500 font-bold">{address.name}</p>
                                <p className="text-gray-500 font-bold">{address.address}</p>
                            </div>
                            <div className="flex gap-10">
                                <p className="text-gray-500 font-bold">{address.city}</p>
                                <p className="text-gray-500 font-bold">{address.pincode}</p>
                            </div>
                            <p className="text-gray-500 font-bold">Phone no: {address.phone}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className="flex items-center justify-center">
                    <p className="text-2xl font-bold text-gray-700">PAYMENT OPTIONS</p>
                </div>

                {payments.map((pay) => (
                    <div
                        key={pay.id}
                        className={`flex items-center justify-between p-5 bg-white rounded-xl m-4 cursor-pointer border-2 
                                    transition-all hover:shadow-lg 
                                    ${payment === pay.id ? "border-orange-500 shadow-md" : "border-gray-300"}`}
                        onClick={() => setPayment(pay.id)}
                    >
                      
                        <div className="flex items-center gap-5">
                            <i className={`fas ${pay.icon} text-3xl ${payment === pay.id ? "text-orange-500" : "text-gray-500"}`}></i>
                            <p className="text-gray-500 font-bold">{pay.name}</p>
                        </div>

                        <i className="fas fa-chevron-right text-gray-500"></i>
                    </div>
                ))}
            </div>
            <div>
                <p className="flex items-center justify-center text-2xl font-bold text-gray-500 hover:text-black  cursor-pointer">Proceed to pay</p>
            </div>
        </div>
    );
};

export default Payment;
