
import { useEffect } from "react";
import EyeContainer from "../components/EyeContainer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Eyes Following You</h1>
      <p className="text-xl text-blue-600 mb-12">Move your cursor around and watch the eyes follow!</p>
      
      <EyeContainer />
      
      <div className="mt-12 text-blue-500 text-center">
        <p>A simple interactive mouse-tracking animation</p>
      </div>
    </div>
  );
};

export default Index;
