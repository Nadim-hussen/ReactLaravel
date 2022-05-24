import React from "react";
// import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
export function Hello(){
    return(
        <h1>React Hello</h1>
    )
}
if(document.getElementById('react-hello')){
    const container = document.getElementById('react-hello');
    const root = createRoot(container);
    root.render(<Hello />); //this is the new way of doing this
    // ReactDOM.render(
    //     <Component />,document.getElementById('react-component')
    // ) this was old way of doing this
}