import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const HBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M166.064 18.423c-.188-1.045.272-1.28.893-1.393.622-.112 1.17-.058 1.358.987.189 1.044-.054 2.684-.676 2.796-.622.112-1.387-1.346-1.575-2.39z"
            hexColor="#00ecff"
            on={on}
        />
    )
};

export default HBulbSvgPath
