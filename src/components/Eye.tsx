
const Eye = () => {
  return (
    <div className="eye relative w-32 h-32 bg-white rounded-full shadow-lg border-4 border-gray-300 overflow-hidden">
      <div className="pupil absolute w-16 h-16 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="highlight absolute w-6 h-6 bg-white rounded-full top-1/4 left-1/4 opacity-70"></div>
      </div>
    </div>
  );
};

export default Eye;
