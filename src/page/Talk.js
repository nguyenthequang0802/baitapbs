import React from "react";

export function Talk() {
    return (
        <div classname=" w-full">
            <div className="bg-gray-700 relative pt-6">
                <h2 className="text-center text-white text-2xl">NÓI VỀ SoICT</h2>
                <div className="pt-6"></div>
                <div
                    id="carouselExampleCrossfade"
                    class="carousel slide carousel-fade relative"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="4"
                            aria-label="Slide 5"
                        ></button>
                    </div>
                    <div class=" carousel-inner relative w-full overflow-hidden pb-20">
                        <div class="carousel-item active float-left w-full">
                            <div className="flex max-w-4xl mx-auto pb-5 gap-8 items-start py-8">
                                <div id="cols-1" className="text-white w-3/4 flex justify-center items-center">
                                    <img
                                        src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/President_Mr.-Kim-In-Soo-150x250.jpg"
                                        class="rounded-full w-20 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="w-1 h-32  bg-white"></div>
                                <div className="flex items-start flex-col gap-5">
                                    <div id="cols-2" className="text-white p-2 pl-4 w-auto h-32 overflow-y-scroll italic">
                                        <p>Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường CNTT&TT – một đối tác chiến lược toàn diện của SVMC tại Việt Nam.</p>
                                    </div>
                                    <div className="text-white ">
                                        <p>Ông Kim In Soo</p>
                                        <p>Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item float-left w-full">
                            <div className="flex max-w-4xl mx-auto gap-8 items-start py-8">
                                <div id="cols-1" className="text-white w-3/4 flex justify-center items-center">
                                    <img
                                        src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/Lu-Thanh-Long-001-150x250.jpg"
                                        class="rounded-full w-20 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="w-1 h-32  bg-white"></div>
                                <div className="flex items-start flex-col gap-5">
                                    <div id="cols-2" className="text-white p-2 pl-4 w-auto h-32 overflow-y-scroll italic">
                                        <p>Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường CNTT&TT – một đối tác chiến lược toàn diện của SVMC tại Việt Nam.</p>
                                    </div>
                                    <div className="text-white">
                                        <p>Ông Kim In Soo</p>
                                        <p>Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item float-left w-full">
                            <div className="flex max-w-4xl mx-auto pb-5 gap-8 items-start py-8">
                                <div id="cols-1" className="text-white w-3/4  flex justify-center items-center">
                                    <img
                                        src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/Avlin-150x300.png"
                                        class="rounded-full w-20 h-32 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="w-1 h-32  bg-white"></div>
                                <div className="flex items-start flex-col gap-5">
                                    <div id="cols-2" className="text-white p-2 pl-4 w-auto h-32 overflow-y-scroll italic">
                                        <p>Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường CNTT&TT – một đối tác chiến lược toàn diện của SVMC tại Việt Nam.</p>
                                    </div>
                                    <div className="text-white">
                                        <p>Ông Kim In Soo</p>
                                        <p>Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item float-left w-full">
                            <div className="flex max-w-4xl mx-auto pb-5 gap-8 items-start py-8">
                                <div id="cols-1" className="text-white w-3/4 flex justify-center items-center">
                                    <img
                                        src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/hung-tran-1-1-150x250.jpg"
                                        class="rounded-full w-20 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="w-1 h-32  bg-white"></div>
                                <div className="flex items-start flex-col gap-5">
                                    <div id="cols-2" className="text-white p-2 pl-4 w-auto h-32 overflow-y-scroll italic">
                                        <p>Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường CNTT&TT – một đối tác chiến lược toàn diện của SVMC tại Việt Nam.</p>
                                    </div>
                                    <div className="text-white">
                                        <p>Ông Kim In Soo</p>
                                        <p>Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="carousel-item float-left w-full">
                            <div className="flex max-w-4xl mx-auto pb-5 gap-8 items-start py-8">
                                <div id="cols-1" className="text-white w-3/4 flex justify-center items-center">
                                    <img
                                        src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/hung-tran-1-1-150x250.jpg"
                                        class="rounded-full w-20 shadow-lg"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="w-1 h-32  bg-white"></div>
                                <div className="flex items-start flex-col gap-5">
                                    <div id="cols-2" className="text-white p-2 pl-4 w-auto h-32 overflow-y-scroll italic">
                                        <p>Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường CNTT&TT – một đối tác chiến lược toàn diện của SVMC tại Việt Nam.</p>
                                    </div>
                                    <div className="text-white">
                                        <p>Ông Kim In Soo</p>
                                        <p>Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

