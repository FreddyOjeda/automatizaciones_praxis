import { useEffect, useState } from "react";

export function useHeroVisibility() {
    const [outHero, setOutHero] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setOutHero(window.scrollY > window.innerHeight * 0.7);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return outHero;
}
