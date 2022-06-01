import React from "react";
import './Video.css'

export function Video() {
    return (
        <div id="Content" className="w-full ">
            <h2 className="text-center text-2xl bold font-bold pt-7">VIDEO</h2>
            <div class="flex justify-center gap-8 pt-7">
                <div className="">
                    <div className="flex flex-col md:flex-row md:max-w-2xl ">

                        <div className=" flex flex-col justify-start p-4">

                            <div
                                class="embed-responsive embed-responsive-21by9 relative w-full hover-video"

                            >
                                <div className="absolute -top-10 p-3 bg-slate-700 z-10 video-text w-full ">
                                    <p >Toàn cảnh Innovation Day 2020</p>
                                </div>
                                <iframe
                                    class="embed-responsive-item  top-0 right-0 bottom-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/xneEk-rNqFc?feature=oembed"
                                    allowfullscreen=""
                                    data-gtm-yt-inspected-2340190_699="true"
                                    id="240632615"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col md:flex-row md:max-w-2xl ">

                        <div className=" flex flex-col justify-start p-4">

                            <div
                                class="embed-responsive embed-responsive-21by9 relative w-full hover-video"

                            >
                                <div className="absolute -top-10 p-3 bg-slate-700 z-10 video-text w-full ">
                                    <p >Team Building 2020 – Hội An</p>
                                </div>
                                <iframe
                                    class="embed-responsive-item  top-0 right-0 bottom-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/KA6zETZJ-4c?feature=oembed"
                                    allowfullscreen=""
                                    data-gtm-yt-inspected-2340190_699="true"
                                    id="240632615"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col md:flex-row md:max-w-2xl ">

                        <div className=" flex flex-col justify-start p-4">

                            <div
                                class="embed-responsive embed-responsive-21by9 relative w-full hover-video"

                            >
                                <div className="absolute -top-10 p-3 bg-slate-700 z-10 video-text w-full ">
                                    <p >Con đường tri thức: Du học ngành Công nghệ thông tin!</p>
                                </div>
                                <iframe
                                    class="embed-responsive-item  top-0 right-0 bottom-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/zg_oi1w8jrU?feature=oembed"
                                    allowfullscreen=""
                                    data-gtm-yt-inspected-2340190_699="true"
                                    id="240632615"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
               
            </div>
            <div className="pt-6"></div>
        </div>

    )
}

