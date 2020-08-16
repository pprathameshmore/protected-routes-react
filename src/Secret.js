import React from "react";
import { withRouter } from "react-router-dom";

function Secret({ logout, ...rest }) {
  return (
    <div>
      <h1>Secret</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default withRouter(Secret);
