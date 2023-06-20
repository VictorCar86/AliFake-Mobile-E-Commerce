const useIntersection = (callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                callback(entry);
                observer.disconnect();
            }
        })
    })
    return observer;
}

export default useIntersection;