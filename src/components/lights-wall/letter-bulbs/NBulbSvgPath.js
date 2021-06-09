import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const NBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M114.99 44.05c-.226-1.036.225-1.289.842-1.423.617-.135 1.167-.1 1.393.936.226 1.037.044 2.684-.574 2.819-.617.135-1.435-1.294-1.661-2.331z"
            hexColor="#f20a5e"
            on={on}
        />
    )
};

export default NBulbSvgPath
