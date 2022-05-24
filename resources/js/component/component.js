import React from "react";
import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
export function Component(){
    return(
        <h1>React Component</h1>
    )
}
if(document.getElementById('react-component')){
    const container = document.getElementById('react-component');
    const root = createRoot(container);
    root.render(<Component />); //this is the new way of doing this
    // ReactDOM.render(
    //     <Component />,document.getElementById('react-component')
    // ) this was old way of doing this
}