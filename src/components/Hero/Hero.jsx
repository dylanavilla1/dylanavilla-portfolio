import { useNavigate } from "react-router-dom";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className='flex w-full min-h-screen font-thin justify-center text-2xl bg-slate-800 '>
      <div className="bg-[url('../images/bg.jpg')] w-full min-h-screen bg-cover bg-center text-white font-thin text-2xl flex flex-col items-center p-16 justify-center bg-gray-400 bg-blend-multiply">
        <h1 className='text-6xl font-semibold leading-relaxed text-nowrap'>
          Hello I'm <span className='text-rose-300'> Dylan </span>{" "}
          <span className='text-slate-200'>Avilla</span>
        </h1>
        <p className='font-extralight text-4xl pt-2 text-wrap'>
          Front End Developer
        </p>
        <p className='pt-5 font-thin text-3xl'>
          <span className='text-rose-300 font-bold'> Build </span> simple thing,
          for big <span className='text-slate-200 font-bold'> result </span>
        </p>

        <button
          className='mt-8 font-semibold bg-rose-400 rounded  w-[120px] text-center flex items-center justify-center p-3'
          onClick={() => navigate("/about")}>
          Come In
        </button>
      </div>
    </main>
  );
};
