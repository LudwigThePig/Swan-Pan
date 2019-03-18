import Link from 'next/link'

const Header = () => (
  <div className="header">
    <Link href="/">
      <h1 style={linkStyle}>SwanPan</h1>
    </Link>
    <Link href="/login">
      <span style={linkStyle}>Login</span>
    </Link>
    <style jsx global>
    {`
     .header{
      background: #1D1D1B;
      color: #CB8B5A;
      height: 10vh;
      padding: 0 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
      span, h1{
        cursor: pointer;
      }
      span:hover, h1:hover{
        color: white;
      }
    `}
    </style>
  </div>
)

export default Header