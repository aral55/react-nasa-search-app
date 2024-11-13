import React from "react";
import { ImageDataContextProvider } from "./ImageDataContextProvider";

function ContextProvider({children}) {
    return (
        <>
        <ImageDataContextProvider>{children}</ImageDataContextProvider>
        </>
    );
}

export default ContextProvider;