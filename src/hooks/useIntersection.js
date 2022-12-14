const useIntersection = (callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                console.log(entry);
                callback();
                observer.disconnect();
            }
        })
    })
    return observer
}

export default useIntersection;