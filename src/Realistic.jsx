import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function getAnimationSettings(angle, originX) {
  return {
    particleCount: 8,
    angle,
    spread: 55,
    origin: { x: originX },
    colors: ["#f81f1f", "#73ff00","#41f2ff", "#fbff1d","#f94dff", "#8820ff","#f8881f", "#4350ff"]
  };
}

export default function Realistic() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const [show,setShow] = useState(true);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 16));
    }
  }, [nextTickAnimation, intervalId]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  function launchAnimation(){
      setTimeout(() =>{
        startAnimation();
      },1000);
      setTimeout(() =>{
        pauseAnimation();
    },4000);
    setShow(false);
    return (<div></div>)
  }

  return (
    <>
      
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      {show && launchAnimation()}
    </>
  );
}
