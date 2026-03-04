import { useEffect, useState } from "react";
import axios from "axios";
// Icon
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";

// Style
import "./Products.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Products() {
  const swiperRef = useRef(null);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://wooden.ahdafweb.com/public/api/products/latest-items",
        );
        setItems(res.data.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">جاري التحميل...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">حدث خطأ: {error.message}</p>
    );

  return (
    <div className="container mx-auto my-25 px-4">
      {/* <div className="mb-10">
        <h1 className="title-section text-[32px] text-[#2B2B2B] mb-4">
          منتجات جاهزة للطلب
        </h1>
        <p className="text-[24px] text-[#676767]">
          يمكنك اختيار القطعة المناسبة وطلبها مباشرة بدون أي خطوات إضافية، مع
          ضمان جودة الخامة ودقة التنفيذ.
        </p>
      </div> */}

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        initialSlide={4}
        navigation={false}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="overflow-hidden w-[384px] h-162.5 flex flex-col items-center"
          >
            <div className=" relative overflow-hidden!">
              <img
                src={item.main_image}
                alt={item.name}
                className="w-full h-[478px] object-cover rounded-2xl"
              />
              <p className=" absolute -top-1 -right-1 bg-[#8E741D69]  rounded-[4px] w-[148px] h-[46px] text-white flex justify-center items-center">
                الكثر مبيعا
              </p>
            </div>
            {/* reate */}
            <div className="flex gap-2 items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[19.83px] text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.17L12 18.897l-7.336 3.87 1.402-8.17-5.934-5.787 8.2-1.192z" />
              </svg>
              <p className="text-[#676767] text-[24px]">
                {(Number(item.average_rating) || 3).toFixed(0)}
              </p>
            </div>
            <div className="p-2">
              <h2 className="text-lg font-semibold my-2">{item.name}</h2>
              <div className="flex items-center justify-between">
                <p className="text-[#8E741D] mt-2 font-bold text-[24px]">
                  {item.price} <span className="price">ريال</span>
                </p>
                <div className="w-11.5 h-11.5 cursor-pointer rounded-full bg-[#8E741D29] flex items-center justify-center">
                  <ShoppingCart size={20} className="text-[#8E741D]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons تحت الـ Swiper */}
      <div className="flex gap-4 mt-7">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className=" px-4 py-2 rounded-full border-1 border-[#8E741D] cursor-pointer"
        >
          <ArrowRight size={18} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className=" px-4 py-2 rounded-full border-1 border-[#8E741D] cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
      </div>
    </div>
  );
}
