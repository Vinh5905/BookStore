import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export function Inform() {
  const [id, setId] = useState(1);
  function handleId(x) {
    if (x === "-1") {
      setId((id + 3) % 4);
    } else {
      setId((id + 1) % 4);
    }
  }
  return (
    <div
      className="container"
      style={{
        height: "30vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5%",
        // flex: "1",
      }}
    >
      <button onClick={() => handleId("-1")}>
        <ArrowBackIcon fontSize="large" />
      </button>
      <div
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginLeft: "30px",
        }}
      >
        <q>
          This book is about coping with being human. It's about how unexpected
          events smash and bash their way into our lives without permission. And
          how a love of the natural world - in particular birds- will help to
          raise you from these periodic depths. Through twelve characterful
          birds, Charlie show us that there is joy to be found in the very
          smallest of events
        </q>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginRight: "30px",
        }}
      >
        <img
          style={{ height: "100%" }}
          src="https://i.ibb.co/QjTmgG4/abc.png"
        />
      </div>
      <button onClick={() => handleId("1")}>
        <ArrowForwardIcon fontSize="large" />
      </button>
    </div>
  );
}
