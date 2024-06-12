import React from "react";
//Components
import ScrollForMore from "../components/scrollForMore";
//Ease

const Model = () => {
  return (
    <div className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <div className='details'>
              <div className='location'>
                <span>💻 Coder</span>
                <span>🥐 Baker</span>
              </div>
              <div className='mua'>SOCIAL: @erdemcodes</div>
            </div>
            <div className='model'>
              <span className='first'>
                <span>E</span>
                <span>r</span>
                <span>d</span>
                <span>e</span>
                <span>m</span>
              </span>
              <span className='last'>
                <span>E</span>
                <span>l</span>
                <span>v</span>
                <span>a</span>
                <span>n</span>
              </span>
            </div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <div className='thumbnail-single'>
                <div className='frame-single'>
                  <img
                    src={require("../images/test.jpg")}
                    alt='Yasmeen Tariq'
                  />
                </div>
              </div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Animasyon gecisi icin yaptigim site & <br /> dummy text ile
              harmanlandi.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
