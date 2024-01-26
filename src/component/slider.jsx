const Slider = () => {
  return (
    <div className="px-5 mb-20">
      <div className="sm:h-[500px] h-fit flex justify-center items-center w-full mt-6 bg-gray-400">
        <div className="flex justify-center items-center w-full">
          <div className="flex items-center justify-center w-full gap-6 sm:flex-row flex-col ">
            <div className="flex flex-col gap-3 sm:w-1/2 w-full items-center justify-center">
              <h1 className="text-center w-full text-xl sm:text-[50px]  font-bold">
                {" "}
                Wooden Craft{" "}
              </h1>
              <p className="mb-5 ">
                Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
              </p>
              <div className="flex ml-20 items-center w-full">
                <button className="sm:p-3 w-[130px] p-3 border-solid ml-20 border-2 border-black">
                  Buy now
                </button>
              </div>
            </div>
            <div className="flex sm:w-1/2 w-full mt-6 items-center justify-center">
              <img
                className="max-w-[100%] w-[300px] h-[300px] sm:w-[450px] sm:h-[300px]"
                src="./images/download-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
