"use client"; 

import React, { useState, useEffect } from 'react';

const NewLogin = () => {
    const [captcha, setCaptcha] = useState(''); 
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        location: '',
        goldStatus: '',
        goldGrams: '',
        captchaInput: '' 
    });

    
    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };


    useEffect(() => {
        setCaptcha(generateCaptcha());
    }, []);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault(); 

       
        if (formData.captchaInput === captcha) {
            console.log('Form submitted:', formData);
            alert('Form submitted Successfully');
           
        } else {
            alert('Captcha is incorrect. Please try again.');
            setCaptcha(generateCaptcha()); // 
            setFormData({ ...formData, captchaInput: '' }); 
        }
    };

    return (
        <div>
            <section className="bg-[url('https://img.freepik.com/premium-photo/yellow-flower-with-word-dandelion-it_1191871-106712.jpg?w=900')] min-h-screen flex justify-center items-center bg-cover bg-center p-4 md:p-8 lg:p-12">
                <div className="bg-[#c39036] rounded-2xl flex flex-col md:flex-row max-w-4xl w-full p-6 md:p-10 lg:p-12 items-center opacity-90">
                    <div className="w-full md:w-1/2 px-4 md:px-8">
                        <h2 className="font-medium text-xl md:text-2xl lg:text-3xl text-center md:text-left text-[#ffffff]">
                            Get Instant Cash for Gold in <span className='block md:inline'>30 min</span>
                        </h2>

                        <form action="" className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
                            <input
                                className="p-2 rounded-lg"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <div className="relative">
                                <input
                                    className="p-2 rounded-lg border w-full"
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    className="p-2 rounded-lg border w-full"
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <select
                                    className="p-2 rounded-lg w-full"
                                    name="goldStatus"
                                    value={formData.goldStatus}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>Gold in Hands or Pledged</option>
                                    <option value="In Hand">In Hand</option>
                                    <option value="Pledged">Pledged</option>
                                </select>
                            </div>

                            <div>
                                <select
                                    className="p-2 rounded-lg w-full"
                                    name="goldGrams"
                                    value={formData.goldGrams}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>Gold (in Grams)</option>
                                    <option value="Upto 25 Grams">Upto 25 Grams</option>
                                    <option value="26 to 50 Grams">26 to 50 Grams</option>
                                    <option value="51 to 75 Grams">51 to 75 Grams</option>
                                    <option value="75 to 100 Grams">75 to 100 Grams</option>
                                    <option value="101 & Above Grams">101 & Above Grams</option>
                                </select>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                <div>
                                    <h4 className="text-black font-bold mb-1">Captcha</h4>
                                    <input
                                        className="p-2 rounded-lg border w-full bg-gray-100 cursor-not-allowed text-center"
                                        value={captcha} 
                                        placeholder="Captcha"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <h3 className="text-black font-bold mb-1">Enter Captcha</h3>
                                    <input
                                        className="p-2 rounded-lg border w-full"
                                        name="captchaInput"
                                        value={formData.captchaInput}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button className="bg-[#faf09e] text-black py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#c0504e] hover:text-white font-medium mt-4" type="submit">Submit</button>
                        </form>
                    </div>

                    <div className="hidden md:block md:w-1/2 p-4">
                        <img className="rounded-2xl max-h-[300px] md:max-h-[600px] lg:max-h-[800px] w-full object-cover" src="https://img.freepik.com/premium-photo/flower-wallpaper-hd_1021219-1283.jpg?w=740" alt="login form image" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NewLogin;
