import { Card } from "../components/Card/Card";
export const ProjectPage = () => {
  return (
    <section className='w-full min-h-screen pt-[95px]'>
      <div className='mockup-browser border bg-base-300 flex flex-col gap-4  justify-center items-center p-0'>
        <div className='mockup-browser-toolbar'>
          <div className='input'>https://dylanavilla.io</div>
        </div>
        <main
          id='card-layout'
          className='flex flex-wrap gap-10 p-3 w-full justify-center h-[100vh] items-center'>
          <Card
            title='Movie App'
            stack='React Js Tailwind Css'
            image='https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Web-series.jpg?fit=1041%2C635&ssl=1'
          />
          <Card
            title='Chat App'
            stack='React Js Tailwind Css Firebase'
            image='https://cdn2.hubspot.net/hubfs/4016276/blog-images/2019/december/8%20Reasons%20Why%20You%20Need%20Website%20Live%20Chat%20Now/livechat-1.jpg'
          />
          <Card
            title='Ecommerce App'
            stack='React Js Tailwind Css'
            image='https://cdn3.f-cdn.com//files/download/192862939/ecommerce-website.png?fit=crop'
          />
        </main>
      </div>
    </section>
  );
};
