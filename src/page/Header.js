import React from "react";
import { a } from "react-router-dom";

// import {BsSearch} from 'react-icons/bs'
import Logo from 'https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png'

export function Header() {
    return (
        

        <div id="wraper" className="w-full pl-12 pr-12 h-28 ">
            <div className="h-40 w-full relative pt-2">
                <div className='absolute bg-banner-top opacity-40 bg-right-top p-0 m-0 bg-repeat-x top-0 left-0 h-full right-0 bottom-0'></div>
                <div className='flex max-w-screen-2xl h-full ml-auto mr-auto relative text-primary'>
                    <div className='absolute flex left-2'>
                        <div className='flex-none'>
                            <a href='/'><img src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" alt="logo" width="240px" height="100px" /></a>
                        </div>

                        <div className="flex-none text-lg h-auto font-bold ml-7  ">
                            <h1 className="mt-5">ĐẠI HỌC BÁCH KHOA HÀ NỘI
                                <br/>            TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</h1>
                              
                        </div>
                    </div>

                    <div className=' absolute right-2 h-full mt-4'>
                        <div className="flex ml-20 pb-3 ">
                            <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" alt="VN"/>
                            <img  className="ml-2" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" alt="EN"></img>
                        </div>

                        <div className="flex w-60 ml-auto mr-auto mt ">
                            <div className="flex-1 h-full">
                                <label className="">
                                    <div className="ml-1 flex h-full bg-white rounded-lg relative">
                                        <input className='pl-1 rounded-lg w-10/12 h-8 border-2 rounded-full' placeholder="Seach..." />
                                        <button className='mr-12 mt-2 absolute right-1'>
                                            {/* <BsSearch/> */}
                                        </button>
                                    </div>
                                </label>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
           
        </div>

    )
}

