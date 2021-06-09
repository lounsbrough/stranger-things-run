import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const FBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M135.64 20.964c-.324-1.01.1-1.305.702-1.498.601-.193 1.152-.212 1.477.798.324 1.01.3 2.668-.3 2.861-.602.193-1.554-1.15-1.878-2.16z"
            hexColor="#ffb900"
            on={on}
        />
    )
};

export default FBulbSvgPath
