const HomePage = () => {
  return (
    <div className="bg-white h-screen w-screen">
      <div className="flex ">
        <div className="w-1/2 flex flex-col gap-4 items-center justify-center font-semibold text-4xl text-gray-800">
          <p>
            Driven by <em className="text-purple-500">Innovation</em>
          </p>
          <p>
            Define by <em className="text-purple-500">Excellence</em>
          </p>
        </div>
        <div className="w-1/2">
          <img src="/vac_tech_jr_logo.jpg" alt="logo" className="w-80 h-80" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
