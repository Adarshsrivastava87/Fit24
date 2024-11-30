/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Pedometer } from 'expo-sensors';
// import BackgroundTimer from 'react-native-background-timer';
import { AppContext } from '../../context_api/AppContext';


const PedometerWrapper = () => {

  const { setCurrentSteps, totalSteps, setTotalSteps, apiCalled, currentSteps, pedoReset, setPedoReset} = useContext(AppContext);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [subscription, setSubscription] = useState(null);
  const firstMount = useRef(true);
  const reset = useRef(pedoReset);
  useEffect(() => {
    reset.current = pedoReset;
  })

  useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (result) => {
        setIsPedometerAvailable(String(result));
      },
      (error) => {
        setIsPedometerAvailable('Could not get isPedometerAvailable: ' + error);
      }
    );
    
    subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  const subscribe = async () => {
    const sub = Pedometer.watchStepCount((result) => {
      if(!firstMount.current) {
        // console.log(result.steps,', ', totalSteps,', ', currentSteps, ' steps data')
        if(!reset.current) {
          // console.log('idhar', result.steps)
          if(result.steps > totalSteps) {
            setCurrentSteps((prev) => prev + (Number(result.steps) - Number(totalSteps)))  
           }
        } else {
          // console.log('udhar')
          setCurrentSteps(() => Number(result.steps) - Number(totalSteps))
          setPedoReset(false);
        }
        setTotalSteps(() => +result.steps);
        firstMount.current = false;
      }else {
        firstMount.current = false;
      }
    });

    const data = await Pedometer.requestPermissionsAsync();
    // console.log(data, 'data')

    setSubscription(sub);
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };



  return (
    <></>
  );
};


export default PedometerWrapper;