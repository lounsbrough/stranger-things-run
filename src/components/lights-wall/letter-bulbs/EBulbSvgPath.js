import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const EBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M110.934 16.23c-.325-1.01.1-1.304.7-1.497.602-.194 1.153-.213 1.478.798.324 1.01.3 2.667-.3 2.86-.602.194-1.554-1.15-1.878-2.16z"
            hexColor="#0060ff"
            on={on}
        />
    )
};

export default EBulbSvgPath
