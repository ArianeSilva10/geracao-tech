import React from "react";
import Paths from "./routes/Paths";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  return ( 
    <AuthContext>
      <Paths />
    </AuthContext>
   );
}
 
export default App;