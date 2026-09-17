import { useEffect,useRef,useState } from "react";
import type { ReactNode } from "react";

interface ScrollAnimationProps{
    children:ReactNode;
    animation?:string;
   speed?: "fast" | "slow";

}

function ScrollAnimation({children, animation = "animate__fadeInUp", speed = "fast"}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);

    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={isVisible ? `animate__animated ${animation} animate__${speed}` : "opacity-0"
            }
        >
            {children}
        </div>
    );
}

export default ScrollAnimation;