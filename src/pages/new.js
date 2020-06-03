import React from "react"
import useParameters from "../components/useLocation"

const New = (props) => {
  const search = useParameters(props.location);
  console.log(search)
  return (<div>Edit form + {props.location.toString()}</div>)
}

export default New