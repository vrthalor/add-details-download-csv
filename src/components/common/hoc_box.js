import { useEffect, useState } from "react"

const SubBoxCommonHoc = (COMMON_BOX) => {
  const SubBoxHoc = () => {
    const [count, setCount] = useState(0)
   
    const increment = () => {
      setCount((val)=>{
        return val+1
      })
    }

    const reset = () => {
      setCount(0)
    }
let data = {
  count : count,
  reset : reset,
  increment : increment
}
    return (
      <COMMON_BOX hocsub={data}></COMMON_BOX>
    )
  }
  return SubBoxHoc
}
export default SubBoxCommonHoc