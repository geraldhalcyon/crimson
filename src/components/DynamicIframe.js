import React, { useEffect } from 'react';

const DynamicIframe = ({ src }) => {
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    // iframe.frameBorder = 0;
  

    // Add your desired styles to the iframe
    // iframe.style.width = '100%';
    // iframe.style.height = '100vh';

    // Append the iframe to the desired container on the page
    const container = document.getElementById('iframe-container');
    container.appendChild(iframe);

    return () => {
      // Cleanup: remove the iframe when the component unmounts
      container.removeChild(iframe);
    };
  }, [src]);

  return <div id="iframe-container"></div>;
};

export default DynamicIframe;