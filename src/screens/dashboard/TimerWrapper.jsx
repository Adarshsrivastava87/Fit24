/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Accelerometer} from 'expo-sensors';
// import BackgroundTimer from 'react-native-background-timer';

const TimerWrapper = () => {
  const {setSeconds, setAPICalled, apiCalled} = useContext();
  const THRESHOLD = 1.1111;
  const [isMoving, setIsMoving] = useState(false);
  const movementStartTime = useRef(null);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000); // Set the update interval
    const subscription = Accelerometer.addListener(accelerometerData => {
      const magnitude = Math.sqrt(
        accelerometerData.x ** 2 +
          accelerometerData.y ** 2 +
          accelerometerData.z ** 2,
      ).toFixed(4);
      let totalMovementDuration = 0;
      if (magnitude > THRESHOLD && !isMoving) {
        movementStartTime.current = new Date().getTime();
        if(apiCalled) {
          setSeconds(0);
        }
        setIsMoving(true);
      } else if (magnitude < THRESHOLD && isMoving) {
        setIsMoving(false);
        let movementEndTime = new Date().getTime();
        totalMovementDuration = ((Number(movementEndTime) - Number(movementStartTime.current)) / 1000)
        setSeconds((data) => data + Math.round(totalMovementDuration));
        setAPICalled(false);
        // console.log(Math.round(totalMovementDuration), 'total seconds')
        totalMovementDuration = null;
      }
    });

    return () => {
      subscription.remove();
    };
  }, [isMoving]);

  return <></>;
};

export default TimerWrapper;

// const THRESHOLD = 1.1;
// let movementStartTime = null;
// let totalMovementDuration = 0;
// handleProfilePress = () => {
//   navigation.navigate('ProfileScreen')
// }

// const [isMoving, setIsMoving] = useState(false);

// useEffect(() => {
//   Accelerometer.setUpdateInterval(100); // Set the update interval

//   const subscription = Accelerometer.addListener(accelerometerData => {

//     const magnitude = Math.sqrt(
//       accelerometerData.x ** 2 + accelerometerData.y ** 2 + accelerometerData.z ** 2
//     );

//     if (magnitude > THRESHOLD && !isMoving) {
//       setIsMoving(true);
//       movementStartTime = new Date().getTime();
//       console.log(movementStartTime, 'movementStartTime');
//     } else if (magnitude < THRESHOLD && isMoving) {
//       setIsMoving(false);
//       const movementEndTime = new Date().getTime();
//        console.log(movementEndTime, 'movementEndTime');

//       totalMovementDuration += movementStartTime ? ((movementEndTime - movementStartTime) / 1000) : 0;; // Convert to seconds
//       console.log(totalMovementDuration, 'totalMovementDuration');
//       setSeconds(totalMovementDuration)
//       totalMovementDuration = null;
//       // movementStartTime = null;
//     }
//   });

//   return () => {
//     subscription.remove();
//   };
// }, [isMoving]);

// useEffect(() => {
//   let subscription;
//   Accelerometer.isAvailableAsync().then((result) => {
//     if(result) {
//       subscription = Accelerometer.addListener((accelerometerData) => {
//         const {y} = accelerometerData;
//         const threshold = 0.1;
//         const timestamp = new Date().getTime();

//         if(Math.abs(y - lastY) > threshold &&           !isCounting &&
//           (timestamp - lastTimestamp > 800) // adjust this delay as needed
//         ) {
//           setIsCounting(true);
//           setLastY(y);
//           setLastTimestamp(timestamp);
//           console.log(timestamp - lastTimestamp, 'time')
//           setTimeout(() => {
//             setIsCounting(false);
//           }, 1200);
//         }
//       })
//     }
//   })
//   return () => {
//     if(subscription) {
//       subscription.remove();
//     }
//   }
// }, [isCounting, lastY, lastTimestamp]);

// const resetSteps = () => {
//   setSTeps(0);
// }