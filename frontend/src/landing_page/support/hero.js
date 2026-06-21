import React from "react";

function SupportHero() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #08111F, #103B2A)",
        minHeight: "300px"
      }}
    >
      <div className="container  "style={{background :"linear-gradient(135deg, #08111F, #103B2A)"}}  >

        <div className="d-flex justify-content-between align-items-center mb-4 " style={{background :"linear-gradient(135deg, #08111F, #103B2A)"}}>
          <h1 style={{ color: "#fff" , background : "linear-gradient(135deg, #08111F, #103B2A)" }}>
            Support Portal
          </h1>

          <button
            className="btn"
            style={{
                border : " 1px solid #fff",
                background: "#225df3",
                color: "#fff"
            }}
          >
            My Tickets
          </button>
        </div>

        <div className="input-group" style={{background :"linear-gradient(135deg, #08111F, #103B2A)"}}>
          <span className="input-group-text">
            🔍
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Eg: How do I open my account?"
            
          />
        </div>

      </div>
    </section>
  );
}

export default SupportHero;