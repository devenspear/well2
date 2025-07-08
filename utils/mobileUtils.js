// Mobile utilities for iOS and Android optimization

// Prevent zoom on input focus (iOS Safari)
export const preventZoomOnFocus = () => {
  if (typeof window !== 'undefined') {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        // Set font-size to 16px to prevent zoom on iOS
        input.style.fontSize = '16px';
      });
    });
  }
};

// Handle viewport height for mobile browsers
export const setViewportHeight = () => {
  if (typeof window !== 'undefined') {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
  }
};

// Prevent pull-to-refresh on mobile
export const preventPullToRefresh = () => {
  if (typeof window !== 'undefined') {
    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      currentY = e.touches[0].clientY;
      
      // Prevent pull-to-refresh when at the top
      if (window.scrollY === 0 && currentY > startY) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
  }
};

// Initialize all mobile optimizations
export const initMobileOptimizations = () => {
  preventZoomOnFocus();
  setViewportHeight();
  preventPullToRefresh();
}; 