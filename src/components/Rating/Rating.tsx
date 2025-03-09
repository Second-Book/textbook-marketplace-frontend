import clsx from "clsx"
import RatingStyle from "./RatingStyle.module.css"

interface RatingProps {
    value: number,
    readOnly: boolean,
    size: "small" | "medium" | "large"
}

const Rating = ({value = 0, readOnly = false, size = "medium"}: RatingProps) => {
  return (
    <div className={clsx({
        [RatingStyle.rating]: true,
        [RatingStyle.small]: size === "small",
        [RatingStyle.medium]: size === "medium",
        [RatingStyle.large]: size === "large",
    })}>
        {Array(5).fill(0).map((_, i) => (
            <div
                key={i}
                className={clsx({
                    [RatingStyle.star] : true,
                    [RatingStyle.filled]: i <= value-1,
                    [RatingStyle.halfFilled]: i - 0.5 === value-1,
                    [RatingStyle.clickable]: !readOnly
                })}
            >
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
        </svg>
        </div>
        ))}
  </div>
  )
}

export default Rating