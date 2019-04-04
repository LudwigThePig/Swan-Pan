import React, { Component }  from 'react';

const Footer = () => (
  <div id="footer">
    <a href="https://github.com/LudwigThePig/SwanPan"><p>Github repo for this app</p></a>
    <a contact="mailto:morgan@ludwigthepig.com"><p>Contact</p></a>
    <style jsx>
    {`
    a p{
      color: yellow;
    }
     #footer {
      background: #3b3a36;
      color: white;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      }
      #swanSVG {
        fill: yellow;
      }
      span:hover, .left-col:hover, #swanSVG:hover {
        cursor: pointer;
        color: #3b3a36;
        fill: #3b3a36;
      }

      @media screen and (max-width: 740px) {
        #footer {
          flex-direction: column;
        }
      }
      @media screen and (max-width: 530px) {
        #footer {
          padding: 0;
          font-size: 16px;
        }
      }
    `}
    </style>
  </div>
)

export default Footer