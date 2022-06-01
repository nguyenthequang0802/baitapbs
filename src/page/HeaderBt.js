import React from "react";
import { Link } from "react-router-dom";

export function HeaderBt() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg md:flex  bg-zinc-800 z-50 sticky top-0 flex items-center w-full justify-between border-t-4 border-red-600 md:pl-11">
      <div className="px-6 max-w-screen-lg">
        <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-white hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentX" aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
        <div className="navbar-collapse collapse  grow items-center" id="navbarSupportedContentX">
          <ul className="navbar-nav mr-auto flex flex-row">

            <li className="nav-item dropdown static border-x border-slate-700">
              <a className="nav-link  pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Giới thiệu
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute 4 top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown static border-r border-slate-700 ">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Khoa-Trung Tâm
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="bg-slate-800 text-white">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Khoa</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Khoa học Máy tính</a>
                      <a href="#!" aria-current="true" className="block py-2  hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Kỹ thuật máy tính</a>

                    </div>
                    <div className="bg-slate-800 text-white border-l pl-3">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Trung tâm</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Trung tâm Máy tính và Thực hành</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Trung tâm Đổi mới sáng tạo (Innovation)</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo (BKAI)</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Trung tâm An toàn – An ninh thông tin (BKCS) </a>
                      <a href="#!" aria-current="true" className="block py-2    hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Trung tậm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh (NAVIS)</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700 ">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Đào tạo
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Nghiên cứu
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true"  className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Tuyển sinh
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Sinh viên
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link  pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Hợp tác Đối ngoại
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Cựu Sinh viên
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" to="TinTuc" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Tin tức-Sự kiện
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="py-5">
                  <div className="flex gap-5 ">
                    <div className="bg-slate-800 text-white">
                      <Link to="Tintuc" aria-current="true" className="block py-2 px-8 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out bg-red-600">Tin tức</Link>
                      <a href="#!" aria-current="true" className="block py-2 px-8 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông báo</a>
                      <a href="#!" aria-current="true" className="block py-2 px-8 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Tin bài</a>
                      <a href="#!" aria-current="true" className="block py-2 px-8  hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">SoICT Talks</a>


                    </div>
                    <div className="w-px h-40 bg-white"></div>
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 px-8 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out bg-red-600">Sự kiện</a>
                      <a href="#!" aria-current="true" className="block py-2 px-8 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Sự kiện sắp diễn ra</a>
                      <a href="#!" aria-current="true" className="block py-2 px-8  border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Sự kiện đang diễn ra</a>
                      
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown static border-r border-slate-700">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                aria-expanded="false">Tuyển dụng
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </a>
              <div className="dropdown-menu w-70 mt-0 hidden shadow-lg bg-slate-800 absolute  top-full " aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    <div className="bg-slate-800 text-white ">
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Thông tin chung</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Triết lý giáo dục</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cơ cấu tổ chức</a>
                      <a href="#!" aria-current="true" className="block py-2 border-b border-slate-700 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Đảng ủy - Hội đồng Trường</a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Các Tổ chức Đoàn thể </a>
                      <a href="#!" aria-current="true" className="block py-2  border-b w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Văn phòng Trưởng</a>
                      <a href="#!" aria-current="true" className="block py-2  w-full border-slate-700 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Danh sách Cán bộ</a>
                    </div>

                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

