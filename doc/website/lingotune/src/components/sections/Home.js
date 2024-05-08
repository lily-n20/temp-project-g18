const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
                <img className="my-photo" src="assets/logos/LingoTune-Icon-Only.png" alt="" style={{ width: "50%" }} /> 
              </span>
              <span className="intro animated-layer">
                {/* Learn Spanish with your favorite songs ! */}
              </span>
            </span>
            <span>
              <span className="animated-layer">
                LingoTune
              </span>   
              
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
