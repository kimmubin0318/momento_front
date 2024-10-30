import React from 'react';
import { motion } from 'framer-motion';
import RedPuzzle from './images/RedPuzzle.png';
import GreenPuzzle from './images/GreenPuzzle.png';
import BluePuzzle from './images/BluePuzzle.png';

// 로고 이름 리스트로 저장
const LogoName = ['T', 'e', 'a', 'm', ' ', 'U', 'p'];
// 코드 중복을 방지하기 위한 각 퍼즐들의 위치값을 저장하고 이 값을 프롭스로 받기
const puzzles = [
    { src: RedPuzzle, x: 200, y: -105 },
    { src: GreenPuzzle, x: 239, y: -195 },
    { src: BluePuzzle, x: 242, y: -215 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const letterVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: [1.5, 1],
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
};

const imageVariants = (x, y) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
        x,
        y,
        scale: [1.5, 1],
        opacity: 1,
        transition: { duration: 2, ease: 'easeInOut' },
    },
});

const AnimatedLetter = ({ letter }) => (
    <motion.span variants={letterVariants}>{letter}</motion.span>
);

const PuzzleImage = ({ src, x, y }) => (
    <motion.div variants={imageVariants(x, y)}>
        <img src={src} alt="Puzzle Piece" />
    </motion.div>
);

function Logo() {
    return (
        <div>
            <motion.div
                variants={containerVariants}
                animate="visible"
                initial="hidden"
            >
                {LogoName.map((letter, index) => (
                    <AnimatedLetter key={index} letter={letter} />
                ))}
            </motion.div>

            <motion.div
                variants={containerVariants}
                animate="visible"
                initial="hidden"
            >
                {puzzles.map((puzzle, index) => (
                    <PuzzleImage
                        key={index}
                        src={puzzle.src}
                        x={puzzle.x}
                        y={puzzle.y}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default Logo;
