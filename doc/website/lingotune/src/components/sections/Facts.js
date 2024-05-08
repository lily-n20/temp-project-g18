const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div style = {{marginTop: '120px',marginLeft: '10px', marginRight: '100px'}}>
              <img className="my-photo" src="assets/screens/Lingo-Login.png" alt=""  style={{ width: '220px', height: '400px', borderRadius: '20px'}}/>
              <h3>Create Account</h3>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
           <div style = {{marginLeft: '30px', marginRight: '90px'}}>
              <img className="my-photo" src="assets/screens/Lingo-Question.png" alt="" style={{ width: '220px', height: '400px', marginLeft: '30px', marginRight: '40px', borderRadius: '20px' }} />
              <h3>Set Up</h3>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div style = {{marginLeft: '130px', marginRight: '90px'}}>
              <img className="my-photo" src="assets/screens/Lingo-Overview.png" alt=""  style={{ width: '220px', height: '400px', marginLeft: '30px', marginRight: '30px', borderRadius: '20px' }} />
              <h3>Complete Lesson</h3>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div style = {{marginLeft: '230px', marginRight: '90px'}}>
             <img className="my-photo" src="assets/screens/Lingo-KeyTerms.png" alt="" style={{ width: '220px', height: '400px', marginLeft: '30px', marginRight: '30px', borderRadius: '20px' }} />
              <h3>Key Terms</h3>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div style = {{marginLeft: '220px', marginRight: '90px', marginBottom:'50px'}}>
             <img className="my-photo" src="assets/screens/Lingo-Review.png" alt=""  style={{ width: '220px', height: '400px', marginLeft: '50px', marginRight: '20px', borderRadius: '20px' }}/>
              <h3>Play a game</h3>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Facts;
