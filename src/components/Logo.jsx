import hero from "../assets/hero.jpeg";

export default function Logo() {
  return (
    <div className="logo-wrapper">
      
      {/* MINI HERO IMAGE AT TOP */}
      <img
        src={hero}
        alt="Islamic learning"
        className="logo-img"
      />

      {/* BRAND NAME */}
      <h1 className="site-title">
        THE FURQAN CENTER
      </h1>

    </div>
  );
}
