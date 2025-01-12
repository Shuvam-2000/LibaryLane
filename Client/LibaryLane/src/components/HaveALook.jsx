import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HaveALook = () => {

  // State for rendering free books from the backend
  const [showFreeBook, setShowFreeBook] = useState([]);
  
  // State for handling error message
  const [errorMessage, setErrorMessage] = useState("");
  
  // State for loading status
  const [loading, setLoading] = useState(true); 

  // Fetching the free books data from the server
  useEffect(() => {
    const freeBookData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_FREE_BOOK_API); 
        setShowFreeBook(res.data.freeBooks);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setErrorMessage('Books Not Available Now', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    freeBookData();
  }, []);

  // Navigate to story page
  const navigate = useNavigate();

  // Slider settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0, 
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center text-sm py-4 sm:my-4 border-gray-300">
      <h1 className="text-center sm:text-2xl text-xl font-bold">
        Have A Look<span className="text-red-500"> At Our Free Books—</span>
      </h1>
      <h2 className="text-center sm:text-sm text-xs text-gray-600 mt-2">
        Explore a wide range of free books to enhance your knowledge and skills.
      </h2>

      <div className="mt-8 w-full">
        {loading ? (
          <div className="text-center sm:font-medium mx-2 text-red-500">Loading...</div> 
        ) : showFreeBook.length === 0 ? (
          <div className="justify-center text-center mx-20 my-40">
            <p className="text-red-500 font-medium text-xl">{errorMessage}</p> </div>
        ) : (
          <Slider {...settings}>
            {showFreeBook.map((book) => (
              <div key={book._id} className="p-2">
                <div className="overflow-hidden border rounded-lg shadow-lg sm:hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                  <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
                  <div className="p-2">
                    <p className="text-center mb-4 text-sm font-bold">Name: {book.title}</p>
                    <p className="text-center mb-4 text-xs text-gray-500 font-bold">Author: {book.author}</p>
                    <p
                      className="text-center text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 mt-10"
                      onClick={() => navigate(`/freebook/${book._id}`)}
                    >
                      Read
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default HaveALook;
