const useIntersectionObserver = (target, options) => {
    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                target.current.classList.add("animate")
            }
        },
        options
    );

    if (target.current) {
        observer.observe(target.current);
    }

    return () => {
        if (target.current) {
            observer.unobserve(target.current);
        }
    };
};

export default useIntersectionObserver

// DRY = don't repeat yourself