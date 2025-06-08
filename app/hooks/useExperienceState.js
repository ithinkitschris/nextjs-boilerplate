import { useState } from 'react';

export const useExperienceState = () => {
  const [visibleSections, setVisibleSections] = useState({
    curriculum: false,
    asm: false,
    tbwa: false,
    sia: false,
    ikea: false,
    sc: false,
    bbh: false,
    samsung: false,
    nike: false,
    jollibee: false,
    sentosa: false,
    kinetic: false,
    freelance: false,
  });

  const toggleSection = (sectionName) => {
    setVisibleSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return {
    visibleSections,
    toggleSection,
    // Helper functions to check if a section is visible
    isSectionVisible: (sectionName) => visibleSections[sectionName],
  };
}; 