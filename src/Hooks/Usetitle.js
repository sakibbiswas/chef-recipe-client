import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title=`${title} - Food-Hunter`
    },[title])
}
export default useTitle;