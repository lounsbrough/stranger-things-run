import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const OBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M132.42 40.448c-.096-1.057.383-1.252 1.012-1.31.629-.057 1.17.045 1.267 1.102.096 1.057-.289 2.669-.918 2.726-.63.058-1.264-1.461-1.36-2.518z"
            hexColor="#ab0159"
            on={on}
        />
    )
};

export default OBulbSvgPath
