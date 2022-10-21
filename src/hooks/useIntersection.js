const useIntersection = (callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                console.log(entry)
                // console.log("xdxd")
                callback()
            }
        })
    })
    return observer
}

export default useIntersection