import React from 'react';

export default function GlassFilter({
  fineFrequency = 0.03,
  coarseFrequency = 0.08,
  fineOctaves = 3,
  coarseOctaves = 2,
  fineMix = 0.7,
  coarseMix = 0.3,
  edgeWidth = 10,
  scale = 25
}) {
  // Convert mix values to proper ratios
  const normalizedFineMix = fineMix / (fineMix + coarseMix);
  const normalizedCoarseMix = coarseMix / (fineMix + coarseMix);
  
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <filter id="backdrop-distortion" x="-50%" y="-50%" width="200%" height="200%">
          {/* Fine turbulence pattern */}
          <feTurbulence 
            type="fractalNoise"
            baseFrequency={fineFrequency}
            numOctaves={fineOctaves}
            result="fineTurbulence"
            seed="1"
          />
          
          {/* Coarse turbulence pattern */}
          <feTurbulence 
            type="fractalNoise"
            baseFrequency={coarseFrequency}
            numOctaves={coarseOctaves}
            result="coarseTurbulence"
            seed="2"
          />
          
          {/* Scale the turbulence patterns individually */}
          <feComponentTransfer in="fineTurbulence" result="scaledFineTurbulence">
            <feFuncR type="linear" slope={normalizedFineMix} />
            <feFuncG type="linear" slope={normalizedFineMix} />
            <feFuncB type="linear" slope={normalizedFineMix} />
          </feComponentTransfer>
          
          <feComponentTransfer in="coarseTurbulence" result="scaledCoarseTurbulence">
            <feFuncR type="linear" slope={normalizedCoarseMix} />
            <feFuncG type="linear" slope={normalizedCoarseMix} />
            <feFuncB type="linear" slope={normalizedCoarseMix} />
          </feComponentTransfer>
          
          {/* Blend the turbulence patterns */}
          <feComposite
            in="scaledFineTurbulence"
            in2="scaledCoarseTurbulence"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="blendedTurbulence"
          />

          {/* Create edge mask with adjustable width */}
          <feFlood result="flood" flood-color="white"/>
          <feGaussianBlur in="SourceAlpha" stdDeviation={edgeWidth * 0.1} result="edgeMask"/>
          
          {/* Apply edge mask to turbulence */}
          <feComposite
            in="blendedTurbulence"
            in2="edgeMask"
            operator="in"
            result="maskedTurbulence"
          />
          
          {/* Final displacement mapping */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="maskedTurbulence"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
} 