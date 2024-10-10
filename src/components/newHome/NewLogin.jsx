import React from 'react'

const NewLogin = () => {
    return (
        <div>
            <section className="bg-[url('https://img.freepik.com/premium-photo/yellow-flower-with-word-dandelion-it_1191871-106712.jpg?w=900')] min-h-screen flex box-border justify-center items-center bg-cover" >
                <div className="bg-[#c39036] rounded-2xl flex max-w-3xl p-5 items-center opacity-90">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-medium text-2xl text-[#ffffff]">Get Instant Cash for Gold in <span className='flex justify-center font-medium'>30 min</span></h2>

                        <form action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-2xl border" type="email" name="email" placeholder="Name" />
                            <div className="relative">
                                <input className="p-2 rounded-2xl border w-full" type="number" name="password" placeholder="Mobile" />
                            </div>
                            <div>
                                <input className="p-2 rounded-2xl border w-full" type="location" name="location" placeholder="Location" />
                            </div>
                            <div>
                                <select className="p-2 rounded-2xl border w-full" name="goldStatus" id="goldStatus">
                                    <option value="" disabled selected hidden>Gold in Hands or Pledged</option>
                                    <option value="In Hand">In Hand</option>
                                    <option value="Pledged">Pledged</option>
                                </select>
                            </div>

                            <div>
                                <select className="p-2 rounded-2xl border w-full" name="goldGrams" id="goldGrams">
                                    <option value="" disabled selected hidden>Gold (in Grams)</option>
                                    <option value="In Hand">Upto 25 Grams</option>
                                    <option value="Pledged">26 to 50 Grams</option>
                                    <option value="Pledged">51 to 75 Grams</option>
                                    <option value="Pledged">75 to 100 Grams</option>
                                    <option value="Pledged">101 & Above Grams</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 gap-2 '>
                                <div>
                                    <h4 className="text-black font-bold mb-1">Captcha</h4>
                                    <input className="p-2 rounded-2xl border w-full " placeholder="3ZB5F" />
                                </div>
                                <div>
                                    <h3 className="text-black font-bold mb-1">Enter Captcha</h3>
                                    <input className="p-2 rounded-2xl border w-full"  />
                                </div>
                            </div>
                            <button className="bg-[#faf09e] text-black py-2 rounded-full hover:scale-105 duration-300 hover:bg-[#b05b03] hover:text-white font-medium" type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl max-h-[1600px]" src="https://img.freepik.com/premium-photo/flower-wallpaper-hd_1021219-1283.jpg?w=740" alt="login form image" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewLogin
