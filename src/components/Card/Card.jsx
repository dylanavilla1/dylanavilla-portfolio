export const Card = ({ title, stack, image }) => {
  return (
    <main
      id='card'
      className='card w-96 bg-base-100 flex justify-between items-center h-[400px] shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src={image}
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>Stack : {stack}</p>
        <div className='card-actions pt-2'>
          <button className='btn btn-error text-white'>View Now</button>
        </div>
      </div>
    </main>
  );
};
