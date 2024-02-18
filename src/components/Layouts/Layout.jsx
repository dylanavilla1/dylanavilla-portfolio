export const Layout = ({ children }) => {
  return (
    <section className='flex flex-col justify-center w-full bg-slate-900 min-h-screen text-white items-center'>
      {children}
    </section>
  );
};
