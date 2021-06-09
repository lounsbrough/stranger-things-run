import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const ZBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M178.152 73.624c-.048-1.06.44-1.233 1.07-1.262.631-.028 1.168.098 1.216 1.158.048 1.06-.41 2.653-1.04 2.682-.632.029-1.197-1.518-1.246-2.578z"
            hexColor="#e24880"
            on={on}
        />
    )
};

export default ZBulbSvgPath
