// import { useState } from 'react'
import Layout from "./components/Layout"
import Navbar from './components/Navbar'
import Button from './components/ui/Button'
import Input from './components/ui/Input'

function App() {

  return (
    <>
      <Navbar />
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <section className="font-poppins flex flex-col w-[460px] items-center gap-4 px-10 bg-boxColor/70 rounded-xl py-12 border-1 border-light/50 border-t">
            <div className="flex justify-between w-full">
              <span className="font-light text-sm text-light">
                Current value
              </span>
              <span className="font-semibold text-2xl text-[#627EEA]">
                $ 24882
              </span>
            </div>
            <form className="flex flex-col gap-5 items-center">
              {/* <input type="text" value={`Ethereum`} className='w-full text-white py-4 px-6 rounded-lg bg-gray-800'/> */}

              <Input type="text" value="Ethereum" />

              <div className="">
                <label
                  htmlFor="invest"
                  className="font-light text-sm text-light 
            "
                >
                  Amount you want to invest
                </label>
                {/* <input type="number" placeholder='0.00' id='invest' className='w-full'/> */}
                <div className="relative w-full">
                  <span className="absolute inset-y-0 right-4 text-white text-base px-2  flex items-center mt-3">
                    INR
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    id="invest"
                    className="border-2 !bg-transparent mt-3 font-bold text-xl"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="eth"
                  className="font-light text-sm text-light mb-2
            "
                >
                  Estimate Number of ETH You will get
                </label>
                {/* <input type="number" placeholder='0.00' id='eth'  className='w-full'/> */}
                <Input
                  type="number"
                  placeholder="0.00"
                  id="eth"
                  className="font-bold text-xl mt-3 mb-8"
                  disabled={true}
                />
              </div>

              <Button text="Buy" className="" />
            </form>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default App
