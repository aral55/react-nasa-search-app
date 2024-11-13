import { createContext, useState } from "react";

export const ImageDataContext = createContext(undefined);

export const ImageDataContextProvider = ({children}) => {
    const [ImageData, setImageData] = useState();

    return (
        <ImageDataContext.Provider value={[ImageData, setImageData]}>
            {children}
        </ImageDataContext.Provider>
    );
};