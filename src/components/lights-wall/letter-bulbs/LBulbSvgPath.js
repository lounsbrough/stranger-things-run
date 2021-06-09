import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const LBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M81.263 46.592c.39-.987.904-.946 1.492-.714.588.231 1.026.565.637 1.553-.39.987-1.458 2.254-2.046 2.022-.588-.231-.472-1.873-.083-2.86z"
            hexColor="#6bbeff"
            on={on}
        />
    )
};

export default LBulbSvgPath
