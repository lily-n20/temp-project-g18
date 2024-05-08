const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            {/* <img src="assets/testimonials/testimonial-1.jpg" alt="" /> */}
            <h1 style = {{marginLeft: '90px'}}>Try our App!</h1>
            <iframe
              title="Thunkable App"
              src="https://thunkable.site/w/6GiuuWkst6b-stAhTdvBo"
              width="100%"
              height="720px"
            />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
