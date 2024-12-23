const Loading = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      <p className="mt-4 text-xl text-blue-500">Loading...</p>
    </div>
  );
};

export default Loading;
