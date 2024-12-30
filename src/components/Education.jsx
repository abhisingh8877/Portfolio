import React from "react";

const Education = () => {
  return (
    <div
      name="Education"
      className=" w-full  bg-black text-white"
    >
      <div className="max-w-screen-lg p-4 pl-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            Education
          </p>
        </div>

         <div className="  list-disc list-inside  mt-4 mb-12 space-y-2 text-xl mx-auto ">
           <p>Bachelor of Technology in Electrical Engineering - National Institute of Technology Patna (Graduation: 2021-2025) - (CGPA: 8.05)</p>
            <p>Secondary School (12th Grade) - D.N.SINGH COLLEGE BHUSIYA (Year: 2020, Board: Bihar Secondary Examination Board, Percentage: 82.6%)</p>
            <p>High School (10th Grade) -L.M.C.K HS KHAIRA (Year: 2017, Board: Bihar Secondary Examination Board, Percentage: 75.4%)</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default Education;



