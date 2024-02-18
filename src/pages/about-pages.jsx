export const AboutPage = () => {
  return (
    <section className='flex flex-col w-full min-h-screen justify-center items-center text-white text-3xl font-thin bg-slate-950'>
      <main className='diff h-[200px]'>
        <div className='diff-item-1'>
          <div className='bg-primary text-primary-content text-9xl font-black grid place-content-center'>
            Hello I'm
          </div>
        </div>
        <div className='diff-item-2'>
          <div className='bg-base-200 text-9xl font-black grid place-content-center'>
            Dylan Avilla
          </div>
        </div>
        <div className='diff-resizer'></div>
      </main>

      <main className='flex w-full pt-20 justify-center items-center '>
        <div className='flex flex-col w-full lg:flex-row justify-center'>
          <div className=' flex  card p-5 bg-base-300 rounded-box place-items-center text-center w-[500px] text-xl'>
            Fresh Graduate from Telkom University, im so passionate to
            developing software
          </div>
          <div className='divider lg:divider-horizontal'>Or</div>
          <div className=' flex  card p-5  rounded-box place-items-center w-[500px] text-center text-xl bg-indigo-400'>
            So If you interest to me click the contact button for more
            information about me
          </div>
        </div>
      </main>
    </section>
  );
};
