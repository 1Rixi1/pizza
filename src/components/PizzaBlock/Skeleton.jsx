import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="137" cy="134" r="125" />
    <rect x="0" y="271" rx="15" ry="15" width="280" height="24" />
    <rect x="-2" y="308" rx="20" ry="20" width="280" height="86" />
    <rect x="-1" y="419" rx="15" ry="15" width="90" height="27" />
    <rect x="121" y="412" rx="20" ry="20" width="155" height="45" />
  </ContentLoader>
)

export default Skeleton

