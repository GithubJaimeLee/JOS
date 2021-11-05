import React from "react";
import NavBar from "../Component/NavBar";

export default function Page404() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            404
          </h1>
          <h3>这个地址不存在呀</h3>{" "}
        </p>
      </div>
    </div>
  );
}
