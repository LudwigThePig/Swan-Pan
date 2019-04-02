import React, { Component }  from 'react';

const Header = () => (
  <div id="header">
    <div className='left-col'>
    <svg height="55px" width="50px">
      <g transform="scale(0.13974677549924458, 0.15903964284417707)">
        <path id="swanSVG" d="M246.401,233.358l-38.299,15.42L99.635,211.843v-73.874L246.401,233.358z M138.375,323.508l126.209-55.49l-45.738-15.576
			l43.541-17.546l-4.9-3.183L210.072,94.788h59.243l72.166,138.822l-88.606,102.478L138.375,323.508z M357.79,87.396H207.514
			l-0.469-1.372l48.249-64.323L357.79,87.396z M244.203,268.906l-120.519,52.975L42.616,310.88L0,185.704L244.203,268.906z"/>
      </g>
    </svg>
    
    {/* <img src="../static/paper-bird.svg" alt="swan" fill="red" /> */}
    <a href="/">
      <h1>SwanPan</h1>
    </a>
    </div>
    <a href="/login">
      <span>Login</span>
    </a>
    <style jsx>
    {`
    a {
      color: inherit;
    }
     #header{
      background: #c0dfd9;
      color: #fff;
      height: 10vh;
      padding: 0 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
      .left-col{
        display: flex;
        align-items: center;
      }
      #swanSVG{
        fill: yellow;
      }
      span:hover, .left-col:hover, #swanSVG:hover{
        cursor: pointer;
        color: #3b3a36;
        fill: #3b3a36;
      }

      @media screen and (max-width: 740px){
        #header{
          flex-direction: column;
        }
      }
      @media screen and (max-width: 530px){
        #header{
          padding: 0;
          font-size: 16px;
        }
      }
    `}
    </style>
  </div>
)

export default Header