const useIntersection = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                
            }
        })
    })
    return observer
}

export default useIntersection