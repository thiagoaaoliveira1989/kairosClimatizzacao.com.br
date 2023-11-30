// NavItem.js
import { animated, useSpring } from '@react-spring/web';

interface NavItemProps {
    text: string;
    animatedProps: {
        hovered: boolean;
        setHovered: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

export const NavItem: React.FC<NavItemProps> = ({ text, animatedProps }) => {
    const { x } = useSpring({
        from: { x: 0 },
        x: animatedProps ? (animatedProps.hovered ? 1 : 0) : 0,
        config: { duration: 900 },
    });

    return (
        <animated.div
            onMouseEnter={() => animatedProps.setHovered(true)}
            onMouseLeave={() => animatedProps.setHovered(false)}
            style={{
                transform: x
                    .to({
                        range: [0, 1],
                        output: [1, 1.15],
                    })
                    .to(value => `scale(${value})`),
            }}
        >
            <a
                href="#"
                className="text-fontPrimary font-black px-3 py-2 rounded-lg hover:bg-primary hover:text-white"
            >
                {text}
            </a>
        </animated.div>
    );
};
