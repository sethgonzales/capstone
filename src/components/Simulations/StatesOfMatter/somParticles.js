// import React, { useState, useRef, useEffect } from 'react';
// import './StatesOfMatter.css';

// //this has more intricate animations for different states of matter. Still runs into animation frame issue where new animation frames are rendered with each new temp.
// const StatesAnimations = () => {
//   const [temperature, setTemperature] = useState(25);
//   const canvasRef = useRef(null);
//   const moleculesRef = useRef([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const moleculeCount = 40;
//     const moleculeInfo = {
//       radius: 5,
//       speed: temperature / 5,
//     };

//     moleculesRef.current = Array.from({ length: moleculeCount }, () => ({
//       x: Math.random() * (canvas.width - moleculeInfo.radius * 2) + moleculeInfo.radius,
//       y: Math.random() * (canvas.height - moleculeInfo.radius * 2) + moleculeInfo.radius,
//       dx: 0,
//       dy: 0,
//       ...moleculeInfo,
//     }));

//     function drawMolecules() {
//       moleculesRef.current.forEach(molecule => {
//         ctx.beginPath();
//         ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);
//         ctx.fillStyle = '#fff';
//         ctx.fill();
//         ctx.closePath();
//       });
//     }

//     function updateMoleculeSpeed() {
//       moleculeInfo.speed = temperature / 5;
//     }
  
//     function moveMolecules() {
//       updateMoleculeSpeed();

//       moleculesRef.current.forEach(molecule => {
//         if (temperature < 0) {
//           molecule.dy = 1;
//         } else if (temperature >= 0 && temperature <= 100) {
//           const liquidMovementSpeed = 1;
//           molecule.dy = Math.random() * liquidMovementSpeed * 2 - liquidMovementSpeed;
//           molecule.dx = Math.random() * liquidMovementSpeed * 2 - liquidMovementSpeed;
//         } else {
//           const gasMovementSpeed = 2;
//           molecule.dx = Math.random() * moleculeInfo.speed * gasMovementSpeed * 2 - moleculeInfo.speed * gasMovementSpeed;
//           molecule.dy = Math.random() * moleculeInfo.speed * gasMovementSpeed * 2 - moleculeInfo.speed * gasMovementSpeed;
//         }

//         molecule.x += molecule.dx;
//         molecule.y += molecule.dy;


//         // Wall collision detection
//         if (molecule.x + molecule.radius > canvas.width) {
//           molecule.x = canvas.width - molecule.radius;
//           molecule.dx = -molecule.dx;
//         } else if (molecule.x - molecule.radius < 0) {
//           molecule.x = molecule.radius;
//           molecule.dx = -molecule.dx;
//         }
    
//         if (molecule.y + molecule.radius > canvas.height) {
//           molecule.y = canvas.height - molecule.radius;
//           molecule.dy = -molecule.dy;
//         } else if (molecule.y - molecule.radius < 0) {
//           molecule.y = molecule.radius;
//           molecule.dy = -molecule.dy;
//         }    

//         moleculesRef.current.forEach(molecule => {
//           moleculesRef.current.forEach(otherMolecule => {
//             if (molecule !== otherMolecule) {
//               const distance = Math.sqrt(
//                 (molecule.x - otherMolecule.x) ** 2 + (molecule.y - otherMolecule.y) ** 2
//               );
//               if (distance < molecule.radius * 2) {
//                 // Handle collision based on states if needed
//                 // For example, adjust the directions after collision
        
//                 // Example: Calculate new directions after collision
//                 const collisionAngle = Math.atan2(otherMolecule.y - molecule.y, otherMolecule.x - molecule.x);
//                 const speed1 = Math.sqrt(molecule.dx ** 2 + molecule.dy ** 2);
//                 const speed2 = Math.sqrt(otherMolecule.dx ** 2 + otherMolecule.dy ** 2);
        
//                 const direction1 = Math.atan2(molecule.dy, molecule.dx);
//                 const direction2 = Math.atan2(otherMolecule.dy, otherMolecule.dx);
        
//                 molecule.dx = speed2 * Math.cos(direction2 - collisionAngle) * Math.cos(collisionAngle) + speed1 * Math.sin(direction1 - collisionAngle) * Math.cos(collisionAngle + Math.PI / 2);
//                 molecule.dy = speed2 * Math.cos(direction2 - collisionAngle) * Math.sin(collisionAngle) + speed1 * Math.sin(direction1 - collisionAngle) * Math.sin(collisionAngle + Math.PI / 2);
//                 otherMolecule.dx = speed1 * Math.cos(direction1 - collisionAngle) * Math.cos(collisionAngle) + speed2 * Math.sin(direction2 - collisionAngle) * Math.cos(collisionAngle + Math.PI / 2);
//                 otherMolecule.dy = speed1 * Math.cos(direction1 - collisionAngle) * Math.sin(collisionAngle) + speed2 * Math.sin(direction2 - collisionAngle) * Math.sin(collisionAngle + Math.PI / 2);
//               }
//             }
//           });
//         });
//       });
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drawMolecules();
//       requestAnimationFrame(moveMolecules);
//   }
//     moveMolecules();
//   }, [temperature]); // Empty dependency array to run only once

//   const handleTempChange = event => {
//     const newTemperature = parseFloat(event.target.value);
//     if (!isNaN(newTemperature) && newTemperature >= -20 && newTemperature <= 120) {
//       setTemperature(newTemperature);
//     }
//   };
// };


// export default StatesAnimations;