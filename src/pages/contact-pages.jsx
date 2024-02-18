export const ContactPage = () => {
  return (
    <section className='w-full min-h-screen justify-center items-center flex bg-slate-900 text-white text-3xl'>
      <form className='flex w-[400px] p-8 pt-19 pb-20  rounded-md  items-center justify-center flex-col gap-9 bg-slate-50 shadow-lg shadow-slate-400'>
        <h1 className='text-black text-3xl font-thin'>Email Me </h1>
        <input
          type='text'
          placeholder='Email address'
          className='p-3 rounded w-full text-xl font-extralight shadow-md text-slate-950 ring-slate-900 bg-transparent'
        />
        <input
          type='text'
          placeholder='Password'
          className='p-3 rounded w-full text-xl font-extralight shadow-md text-slate-950 bg-transparent'
        />
        <button className='bg-slate-900 p-3 text-xl shadow-md rounded w-full hover:bg-slate-700 duration-500'>
          Send
        </button>
      </form>
      <ul className='menu bg-base-200 rounded-box'>
        <li>
          <a
            href='https://wa.me/6282127524908'
            target='_blank'>
            <img
              className='w-[18px] h-[18px]'
              src='../images/phone.png'
              alt=''
            />
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
};
