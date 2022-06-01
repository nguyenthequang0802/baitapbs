import React from "react";

export function Content() {
    return (
        <div id="Content" className="w-full ">
            <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-center pt-7 pb-5">TIN MỚI NHẤT</h1>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-x-0 pl-80 pr-80 ">
                <div id="1" className="relative b">
                    <div id="img" className="relative ">
                        <img width="280" height="200" src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg" class="attachment-medium size-medium wp-post-image h-40 pt" alt="" />
                        <div className="absolute left-0 bottom-0 bg-red-700">
                            <p className=" text-white uppercase font-bold text-xs p-2 ">Tin bài</p>
                        </div>
                    </div>
                    <div id="text">

                        <h5 className="font-medium leading-tight text-1xl mt-0 mb-2 pt-3">SOICT đồng hành và hỗ trợ sinh viên <br />Nguyễn Văn Quyền</h5>
                        <p className="text-sm pt-3">Nguyễn Văn Quyền là một sinh viên lớp<br />KHMT04 K65 thuộc Trường CNTT&amp;TT, Đại <br />học Bách khoa Hà Nội. Hoàn cảnh gia...					</p>
                    </div>

                </div>
                <div id="2" className="relative ">
                    <div id="img" className="relative ">
                        <img width="280" src="https://soict.hust.edu.vn/wp-content/uploads/DAT01879.jpg" class="attachment-medium size-medium wp-post-image h-40" alt="" loading="lazy" />                        <div className="absolute left-0 bottom-0 bg-red-700">
                            <p className=" text-white uppercase font-bold text-xs p-2 ">Tin bài</p>
                        </div>
                    </div>
                    <div id="text">

                        <h5 className="font-medium leading-tight text-1xl mt-0 mb-2 pt-3">️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN <br />THANH NIÊN TRƯỜNG CÔNG NGHỆ</h5>
                        <p className="text-sm pt-3">️Vào hồi 14h ngày 07/05/2022 tại Hội trường<br />dốc tòa nhà B1, được sự đồng ý của Đoàn<br />thanh niên Trường Đại...</p>
                    </div>

                </div>

                <div id="3" className="relative b">
                    <div id="img" className="relative ">
                        <img width="280" src="https://soict.hust.edu.vn/wp-content/uploads/HoiThaoVinBigdata.jpg" class="attachment-medium size-medium wp-post-image h-40" alt="" loading="lazy" />                       <div className="absolute left-0 bottom-0 bg-red-700">
                            <p className=" text-white uppercase font-bold text-xs p-2 ">Tin bài</p>
                        </div>
                    </div>
                    <div id="text">

                        <h5 className="font-medium leading-tight text-1xl mt-0 mb-2 pt-3">SOICT đồng hành và hỗ trợ sinh viên <br />Nguyễn Văn Quyền</h5>
                        <p className="text-sm pt-3">NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI <br /> VINGROUP Nếu bạn đang băn khoăn về việc <br />ứng tuyển tham gia chương...</p>
                    </div>

                </div>
                <div id="1" className="relative b">
                    <div id="img" className="relative ">
                        <img width="280" height="200" src="https://soict.hust.edu.vn/wp-content/uploads/SVNCKH2021.png" class="attachment-medium size-medium wp-post-image h-40" alt="" />
                        <div className="absolute left-0 bottom-0 bg-red-700">
                            <p className=" text-white uppercase font-bold text-xs p-2 ">Tin bài</p>
                        </div>
                    </div>
                    <div id="text">

                        <h5 className="font-medium leading-tight text-1xl mt-0 mb-2 pt-3">SOICT đồng hành và hỗ trợ sinh viên <br />Nguyễn Văn Quyền</h5>
                        <p className="text-sm pt-3">I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu <br /> khoa học (SV NCKH) là sự kiện thường niên <br /> được tổ chức tại Trường...</p>
                    </div>

                </div>

            </div>
           
        </div>
    )
}

