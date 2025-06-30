import React, { useEffect } from "react";

function MyNamePage() {
  const name = "Hilal";

  useEffect(() => {
    console.log(`Hoş geldin, ${name}!`);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #f8ffae 0%, #43c6ac 100%)",
        animation: "bgFade 3s ease-in-out"
      }}
    >
      <style>
        {`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes bgFade {
            0% {
              filter: blur(10px) brightness(0.8);
            }
            100% {
              filter: blur(0) brightness(1);
            }
          }
          .animated-content {
            animation: fadeInScale 1.5s cubic-bezier(.68,-0.55,.27,1.55) forwards;
            opacity: 0;
            transform: scale(0.8);
          }
          .glow {
            text-shadow: 0 0 20px #43c6ac, 0 0 40px #f8ffae;
          }
        `}
      </style>
      <div className="animated-content" style={{ textAlign: "center" }}>
        <h1 className="glow" style={{ fontSize: "4rem", color: "#333", marginBottom: "1rem" }}>
          Merhaba, {name}!
        </h1>
        <p style={{ fontSize: "2rem", color: "#555" }}>
          Güzel bir React sayfasına hoş geldin!
        </p>
      </div>
    </div>
  );
}

export default MyNamePage;