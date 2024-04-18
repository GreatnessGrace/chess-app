// components/Game/Square.tsx

import React from 'react';

interface SquareProps {
  isLegalMove: boolean;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ isLegalMove, onClick }) => {
  return (
    <div
      className={`square ${isLegalMove ? 'bg-green-500 h-9' : ''}`} // Example: Apply green background for legal moves
      onClick={onClick}
    >
      {/* Render piece */}
    </div>
  );
};

export default Square;
