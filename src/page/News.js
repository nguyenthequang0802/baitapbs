import React from "react";
import Panner from '../img/banner.jpg'
import './News.css';

export function News() {
    return (


        <div className="w-full relative pt-12">

            <div id="top" className="text-center bg-red-600 p-1 ">
                <a className="text-white">Xem thêm tin tức</a>
            </div>

            <div id="mid" className="relative">
                <section className="bg-black py-24 px-4 ">
                    <div className="z-20 relative text-white container mx-auto">
                        <div class="flex justify-center gap-5 pl-24 pr-24">
                            <div class=" shadow-lg bg-white max-w-xs relative" style={{ width: 290, height: 302 }}>
                                <a href="#!">
                                    <img class="rounded-t-lg w-full h-36" src="https://soict.hust.edu.vn/wp-content/uploads/Khai-Truong-EdTech.jpg" alt="" />
                                </a>
                                <div className="absolute left-6 top-28 bg-slate-700">
                                    <p className=" text-white uppercase font-bold text-xs p-4 ">01 <br /> TH 06</p>
                                </div>
                                <div class="p-4">

                                    <h5 class="text-gray-900 text-lg  mb-2 h-12 pt-3 font-bold" >
                                        Lễ ra mắt  “Trung tâm Công nghệ và Giải pháp Chuyển đổi</h5>
                                    <p class="text-gray-700 text-xs pt-8 ">
                                        Thời gian: 9:45 AM - 01/06/2022
                                    </p>
                                    <p class="text-gray-700 text-xs ">
                                        Địa điểm: Phòng 404, Nhà B1, Trường Đại học
                                    </p>
                                    {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                                </div>
                            </div>
                            <div class=" shadow-lg bg-white max-w-sm relative" style={{ width: 290, height: 302 }}>
                                <a href="#!">
                                    <img class="rounded-t-lg h-36 w-full" src="https://soict.hust.edu.vn/wp-content/uploads/STUDENT-CREATIVE-IDEAS-CHALLENGE-2022.jpg" alt="" />
                                </a>
                                <div className="absolute left-6 top-28 bg-slate-700">
                                    <p className=" text-white uppercase font-bold text-xs p-4 ">01 <br /> TH 06</p>
                                </div>
                                <div class="p-4">
                                    <h5 class="text-gray-900 text-lg  mb-2 h-12 pt-7 font-bold" >

                                        INNOVATION DAY 2022                            </h5>
                                    <p class="text-gray-700 text-xs pt-8 ">
                                        Thời gian: 9:45 AM - 01/06/2022
                                    </p>
                                    <p class="text-gray-700 text-xs ">
                                        Địa điểm: Phòng 404, Nhà B1, Trường Đại học
                                    </p>
                                </div>
                            </div>
                            <div class="rounded-lg shadow-lg bg-white max-w-sm relative" style={{ width: 300, height: 302 }}>
                                <a href="#!">
                                    <img class="rounded-t-lg h-36 w-full" src="https://soict.hust.edu.vn/wp-content/uploads/STUDENT-CREATIVE-IDEAS-CHALLENGE-2022.jpg" alt="" />
                                </a>
                                <div className="absolute left-6 top-28 bg-slate-700">
                                    <p className=" text-white uppercase font-bold text-xs p-4 ">01 <br /> TH 06</p>
                                </div>
                                <div class="p-4">
                                    <h5 class="text-gray-900 text-lg  mb-2 h-12 pt-7 font-bold" >
                                        CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022</h5>
                                    <p class="text-gray-700 text-xs pt-8 ">
                                        Thời gian: 8:00 AM - 08/05/2022
                                    </p>
                                    <p class="text-gray-700 text-xs ">
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà
                                    </p>
                                </div>
                            </div>
                            <div class="rounded-lg shadow-lg bg-white max-w-sm relative" style={{ width: 290, height: 302 }}>
                                <a href="#!">
                                    <img class="rounded-t-lg h-36 w-full" src="https://soict.hust.edu.vn/wp-content/uploads/IMG_1651507570048_1651507626090-5.jpg" alt="" />
                                </a>
                                <div className="absolute left-6 top-28 bg-slate-700">
                                    <p className=" text-white uppercase font-bold text-xs p-4 ">01 <br /> TH 06</p>
                                </div>
                                <div class="p-4">
                                    <h5 class="text-gray-900 text-lg  mb-2 h-12 pt-7 font-bold" >
                                        HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG</h5>
                                    <p class="text-gray-700 text-xs pt-8 ">
                                        Thời gian: 2:00 PM - 06/05/2022
                                    </p>
                                    <p class="text-gray-700 text-xs ">
                                        Địa điểm: Hội trường dốc, tầng 3 nhà B1, Đại
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="absolute inset-0 h-auto z-10">
                        <img src={Panner} alt="" className="h-full w-full object-fit-cover" />
                    </div>
                </section>

            </div>

            <div id="top" className="text-center bg-red-600 p-1">
                <a className="text-white">Xem thêm sự kiện</a>
            </div>



        </div>

    )
}

