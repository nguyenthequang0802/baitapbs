import React from "react";
import sub1 from "../img/sub1.jpg"
import sub2 from "../img/sub2.jpg"
import sub3 from "../img/sub3.jpg"
import sub4 from "../img/sub4.jpg"
import sub5 from "../img/sub5.jpg"
import sub6 from "../img/sub6.png"
import sub7 from "../img/sub7.png"
import sub8 from "../img/sub8.png"
import sub9 from "../img/sub9.jpg"
import sub10 from "../img/sub10.png"
import content_img from "../img/tin_tuc_img.jpg"

function Content() {
    return (
        <div>
            <div class="flex relative grid grid-cols-4">
                <div class="w-1/2  bg-white px-1">
                    <h2 class="text-2xl mb-1.5 font-semibold">Tin tức - Sự kiện</h2>
                    <ul class="relative">
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">Tin tức</a>
                        </li>
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">-Thông báo</a>
                        </li>
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">-Tin bài</a>
                        </li>
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">Sự kiện</a>
                        </li>
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">-Sự kiện sắp diễn ra</a>
                        </li>
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">-Sự kiện đã diễn ra</a>
                        </li>
                        <li class="relative border-b">
                            <a class="flex items-center text-sm py-4 px-6 h-12 " href="#!">SoICT Talks</a>
                        </li>
                    </ul>
                </div>
                {/* <div><img src={content_img}></img> </div> */}

                <div class="grid grid-cols-3 gap-12 col-span-3">

                    <div className="noi-dung grid grid-cols-2 gap-8 col-span-2">
                        <div class="flex w-auto">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub1} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        BKAI-NAVER Challenge 2022 là hoạt động thuộc dự án hợp tác nghiên cứu AI giữa...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub2} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE IDEA CHALLENGE 2022</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động,...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub3} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub4} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG – NHIỆM KỲ 2022-2024</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub5} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo, việc làm và trải nghiệm môi trường làm việc chuyên nghiệp</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang băn khoăn...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub6} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu khoa học (SV NCKH) là sự kiện...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub7} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️THÔNG BÁO VỀ VIỆC TỔ CHỨC TRẢ HỒ SƠ VÀ BẰNG TỐT NGHIỆP CHO SINH VIÊN TRƯỜNG CNTT&TT KỲ 2021.1B</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Ngày 15/05/2022, Trường CNTT&TT và các đơn vị phối hợp tổ chức trả bằng và...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub8} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️THÔNG BÁO VỀ THỰC TẬP DOANH NGHIỆP KỲ 2021.3</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Trường CNTT&TT thông báo quy trình đăng ký Thực tập Doanh nghiệp (TTDN) kỳ hè...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub9} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG LAI TRONG KHOA HỌC DỮ LIỆU VÀ TRÍ TUỆ NHÂN TẠO</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Thời gian: 14h-17h30, thứ 6 ngày 06/05/2022 Địa điểm: Hội trường dốc, tầng 3...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="rounded-lg shadow-lg bg-white max-w-xs">
                                <a href="#!">
                                    <img class="rounded-t-lg" src={sub10} alt="" />
                                </a>
                                <div class="p-6">
                                    <a href="#" class="text-gray-900 text-lg font-medium mb-2">️CHƯƠNG TRÌNH THỰC TẬP CHO HỌC VIÊN CAO HỌC, NGHIÊN CỨU SINH TẠI VIỆN TIN HỌC QUỐC GIA NHẬT BẢN NĂM 2022</a>
                                    <p class="text-gray-700 text-base mb-4">
                                        Trong khuôn khổ hợp tác giữa Trường Công nghệ Thông tin và Truyền thông (CNTT&TT)...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tin-noi-bat text-left">
                        <div class=" px-1 absolute">
                            <h2 class="text-2xl mb-1.5 font-semibold">Tin nổi bật</h2>
                            <ul class="max-w-xs h-auto  ">
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">THÔNG BÁO TUYỂN GIẢNG VIÊN NGÀNH CÔNG NGHỆ THÔNG TIN</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">INVITATION TO JOIN BK.AI RESEARCH GROUPS 2021</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">THÔNG BÁO VỀ ĐĂNG KÝ LỚP HỌC PHẦN THỰC TẬP DOANH NGHIỆP KỲ HÈ 2020.3</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">TĂNG CƯỜNG LỢI THẾ CẠNH TRANH DỰA TRÊN CÔNG NGHỆ SỐ, TẠO ĐỘT PHÁ TRONG MỌI MẶT HOẠT ĐỘNG</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">ĐẦU TƯ CHO NCKH VÀ ĐT TRÌNH ĐỘ CAO TRONG TRƯỜNG ĐẠI HỌC: ĐIỂM ĐỘT PHÁ TRONG QUÁ TRÌNH CHUYỂN ĐỔI SỐ TẠI VN</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">TUYỂN DỤNG 2020</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">HỘI THẢO QUỐC TẾ THƯỜNG NIÊN SOICT - 10 NĂM MỘT CHẶNG ĐƯỜNG</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">HUST-SOICT'S TALK, SỐ 2: BẢN GIAO HƯỞNG MÙA THU VỀ KHỞI NGHIỆP!</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">DẤU ẤN CNTT BÁCH KHOA TRONG 15 MÙA NHÂN TÀI ĐẤT VIỆT</a>
                                </li>
                            </ul>

                            <h2 class="text-2xl mb-1.5 font-semibold">Bài viết mới nhất</h2>
                            <ul class="max-w-xs h-auto text-left ">
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE IDEA CHALLENGE 2022</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG – NHIỆM KỲ 2022-2024</a>
                                </li>
                                <li class="">
                                    <a class=" text-sm py-4 px-6 h-auto " href="#!">Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo, việc làm và trải nghiệm môi trường làm việc chuyên nghiệp</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Content;