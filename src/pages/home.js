import * as React from "react";
import { Link } from "react-router-dom";

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/erdem-elvan`}>
                  <img src={require("../images/test.jpg")} alt='Erdem Elvan' />
                </Link>
              </div>
            </div>
            <div className='information'>
              <div className='title'>Erdem Elvan</div>
              <div className='location'>
                <span>identify as</span>
                <span>attack helicopter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
