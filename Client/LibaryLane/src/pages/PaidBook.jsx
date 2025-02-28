import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PaidBook = () => {
  const { id } = useParams(); // Get bookid from the route parameters
  const [bookContent, setBookContent] = useState(null);  // State to fetch book data
  const [errorMessage, setErrorMessage] = useState('');  // State to render error message 
  const [loading, setLoading] = useState(true);  // state tio handle loading state

  // fetching book data from the backend with the API
  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/libarylane/book/${id}`, {
          withCredentials: true, // Include credentials if needed
        });
        setBookContent(res.data.book); // Set the entire book object
      } catch (error) {
        setErrorMessage('Failed to fetch book details.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookById();
  }, [id]);

  // handling the loading state
  if (loading) {
    return <div>Loading book details...</div>;
  }

  // handling the error message
  if (errorMessage) {
    return <div className="text-red-500 font-bold">{errorMessage}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Back Button */}
      <Link to="/ourbooks" className="text-black border border-gray-500 rounded-md px-2 py-1 text-sm font-semibold mb-12 inline-block">
        ← Back to Our Books
      </Link>

      {bookContent && (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Book Image */}
          <div className="sm:w-1/3 mb-6 sm:mb-0 sm:mr-6">
            <img
              src={bookContent.image}
              alt={bookContent.title}
              className="w-full h-70 object-cover rounded-lg"
            />
          </div>

          {/* Book Details */}
          <div className="sm:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{bookContent.title}</h1>
            <p className="text-lg text-gray-700 mb-2"><strong>Author:</strong> {bookContent.author}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Price:</strong> Rs. {bookContent.price}</p>
            <p className="text-lg text-gray-700 mb-6"><strong>Genre:</strong> {bookContent.genre}</p>

            {/* Buy Button */}
            <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaidBook;
