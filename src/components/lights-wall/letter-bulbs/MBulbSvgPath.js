import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const MBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M100.639 48.63c.073-1.06.576-1.175 1.206-1.132.63.043 1.149.23 1.076 1.289-.073 1.058-.71 2.589-1.34 2.545-.63-.043-1.015-1.644-.942-2.703z"
            hexColor="#f4b50f"
            on={on}
        />
    )
};

export default MBulbSvgPath
