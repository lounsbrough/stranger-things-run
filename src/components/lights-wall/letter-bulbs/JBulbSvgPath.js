import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const JBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M44.98 42.203c-.16-1.05.306-1.272.93-1.367.625-.095 1.172-.026 1.331 1.023.16 1.05-.128 2.682-.753 2.777-.624.095-1.349-1.384-1.508-2.433z"
            hexColor="#ff005c"
            on={on}
        />
    )
};

export default JBulbSvgPath
