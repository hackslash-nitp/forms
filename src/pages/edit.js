import React from "react"
import useParameters from "../components/useLocation"

const Edit = (props) => {
  const search = useParameters(props.location)

  return (<div>Edit form + {props.location.toString()}</div>)
}

export default Edit