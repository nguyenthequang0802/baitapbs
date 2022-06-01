import React from "react";

export function DaoTao() {
  return (
    <div class="flex flex-col items-center gap-12">
      <div class="max-w-5xl">
        {" "}
        <h1 class="font-medium leading-tight text-3xl text-center pt-3">
          ĐÀO TẠO – TUYỂN SINH
        </h1>
        <p className="text-center">
          Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương
          quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK
          Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ
          451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.
        </p>
      </div>
      <div class="flex justify-center gap-8">
        <div className="">
          <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
            <img
              className="  h- md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg p-4 "
              src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg"
              alt=""
              style={{ height: 300, width: 304 }}
            />
            <div className=" flex flex-col justify-start p-4">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                CHƯƠNG TRÌNH ĐÀO TẠO
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng
                cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình
                được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên
                tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc
                vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và
                Khoa học Dữ liệu và Trí tuệ Nhân tạo…(xem tiếp)
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
            <img
              className="  h- md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg  "
              src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg"
              alt=""
              style={{ height: 300, width: 304 }}
            />
            <div className=" flex flex-col justify-start p-4">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                KIẾN TẠO TƯƠNG LAI VỚI SoICT
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước
                nhà, và ngày càng chứng minh được chất lượng trên trường Quốc
                tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai
                với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia
                công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN
                nước nhà… (xem tiếp)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

