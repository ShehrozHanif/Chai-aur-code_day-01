import React from 'react';

// Define the props interface
interface FlipCardProps {
    title: string;  // The title to display on the front of the card
}

const FlipCard: React.FC<FlipCardProps> = ({ title }) => {
    // Type the styles as React.CSSProperties
    const flipCardStyle: React.CSSProperties = {
        backgroundColor: 'transparent',
        width: '190px',
        height: '254px',
        perspective: '1000px',
        fontFamily: 'sans-serif',
    };

    const flipCardInnerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.8s',
        transformStyle: 'preserve-3d',
    };

    const flipCardFrontStyle: React.CSSProperties = {
        boxShadow: '0 8px 14px 0 rgba(0, 0, 0, 0.2)',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        border: '1px solid coral',
        borderRadius: '1rem',
        background: 'linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%)',
        color: 'coral',
    };

    const flipCardBackStyle: React.CSSProperties = {
        ...flipCardFrontStyle,
        background: 'linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%)',
        color: 'white',
        transform: 'rotateY(180deg)',
    };

    return (
        <div style={flipCardStyle} className="flip-card mb-4">
            <div style={flipCardInnerStyle} className="flip-card-inner">
                <div style={flipCardFrontStyle} className="flip-card-front">
                    <p className="title" style={{ fontSize: '1.5em', fontWeight: 900, margin: 0 }}>{title}</p>
                    <p>Hover Me</p>
                </div>
                <div style={flipCardBackStyle} className="flip-card-back">
                    <p className="title" style={{ fontSize: '1.5em', fontWeight: 900, margin: 0 }}>BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
