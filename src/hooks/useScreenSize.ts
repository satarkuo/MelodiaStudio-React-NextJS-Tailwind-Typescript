'use client';
import { useEffect, useState } from 'react';

const defaultScreenSize = () => {
  if (typeof window !== 'undefined') {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
  }

  return {
    screenWidth: 0,
    screenHeight: 0,
  };
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(defaultScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    // 設定初始尺寸（防止首次進入畫面是 0）
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
