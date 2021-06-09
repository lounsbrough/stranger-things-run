import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const WBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M120.964 75.371c-.03-1.06.46-1.225 1.092-1.243.631-.018 1.165.117 1.195 1.178.03 1.061-.455 2.646-1.086 2.664-.632.018-1.17-1.538-1.2-2.599z"
            hexColor="#4683ea"
            on={on}
        />
    )
};

export default WBulbSvgPath
