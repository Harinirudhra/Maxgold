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
            <section className=" min-h-screen flex justify-center items-center bg-cover bg-center p-4 md:p-8 lg:p-12"
                style={{ backgroundImage: 'url(./bgfaq.jpg)', }} >
                <div className="bg-[#550000] rounded-2xl flex flex-col md:flex-row max-w-4xl w-full p-6 md:p-10 lg:p-12 items-center opacity-90">
                    <div className="w-full  px-4 md:px-8 ">
                        <h2 className="font-medium text-xl md:text-2xl lg:text-3xl text-center md:text-left text-[#ffffff]">
                            Get Instant Cash for Gold in <span className='block md:inline'>30 min</span>
                        </h2>

                        <form action="" className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
                            <input
                                className="p-4 rounded-md"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <div className="relative">
                                <input
                                    className="p-4 rounded-md border w-full"
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    className="p-4 rounded-md border w-full"
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <select
                                    className="p-4 rounded-md w-full"
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
                                    className="p-4 rounded-md w-full"
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
                                    <h4 className="text-white font-bold mb-1">Captcha</h4>
                                    <input
                                        className="p-4 rounded-md border w-full  cursor-not-allowed text-center"
                                        value={captcha}
                                        placeholder="Captcha"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white font-bold mb-1">Enter Captcha</h3>
                                    <input
                                        className="p-4 rounded-md border w-full"
                                        name="captchaInput"
                                        value={formData.captchaInput}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button className="bg-[#ffd700]  py-2 rounded-lg  duration-300 hover:bg-[#e5b80b] text-black text-2xl font-semibold font-medium mt-4" type="submit">Submit</button>
                        </form>
                    </div>


                </div>
            </section>
        </div >
    );
}

export default NewLogin;
