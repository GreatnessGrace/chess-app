// // components/Game/Chessboard.tsx

// import React, { useState } from 'react';
// import Square from './Square';

// const Chessboard = () => {
//   const [selectedSquare, setSelectedSquare] = useState(null);

//   const handleSquareClick = (square) => {
//     setSelectedSquare(square);
//     // Logic to handle piece selection and move validation
//   };

//   return (
//     <div className="chessboard">
//       {/* Render squares */}
//       {Array.from({ length: 64 }, (_, index) => (
//         <Square key={index} onClick={() => handleSquareClick(index)} />
//       ))}
//     </div>
//   );
// };

// export default Chessboard;
// components/Game/Chessboard.tsx

import React, { useState } from 'react';
import Square from './Square';

const Chessboard = () => {
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

  const handleSquareClick = (square: number) => {
    setSelectedSquare(square);
    // Logic to handle piece selection and move validation
  };

  return (
    <div className="chessboard h-10 bg-gray-600 flex flex-wrap w-64">
      {/* Render squares */}
      {Array.from({ length: 64 }, (_, index) => (
        <Square
          key={index}
          onClick={() => handleSquareClick(index)}
          isLegalMove={false} // Set to true/false based on your logic
        />
      ))}
    </div>
  );
};

export default Chessboard;
