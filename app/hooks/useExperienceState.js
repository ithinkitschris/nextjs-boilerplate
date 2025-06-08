import { useState } from 'react';

export const useExperienceState = () => {
  const [visibleSections, setVisibleSections] = useState({
    // Story selectors
    desktopAI: true,
    desktopShort: false,
    desktopLong: false,

    // Curriculum Vitae
    masters: false,
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

  const toggleCvSection = (sectionName) => {
    setVisibleSections(prevState => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
  };

  const showStory = (storyName) => {
    setVisibleSections(prevState => ({
      ...prevState,
      desktopAI: storyName === 'desktopAI',
      desktopShort: storyName === 'desktopShort',
      desktopLong: storyName === 'desktopLong',
    }));
  };

  return { visibleSections, toggleCvSection, showStory };
}; 