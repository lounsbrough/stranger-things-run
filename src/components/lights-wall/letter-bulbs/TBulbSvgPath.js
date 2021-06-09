import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const TBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M64.352 76.658c.072-1.06.576-1.175 1.206-1.132.63.043 1.149.23 1.076 1.289-.073 1.058-.71 2.589-1.34 2.545-.63-.043-1.015-1.644-.942-2.702z"
            hexColor="#f3b91e"
            on={on}
        />
    )
};

export default TBulbSvgPath
