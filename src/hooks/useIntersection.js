const useIntersection = (callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                console.log(entry);
                callback(entry);
                observer.disconnect();
            }
        })
    })
    return observer;
}

export default useIntersection;