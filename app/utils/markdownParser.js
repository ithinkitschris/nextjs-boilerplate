// Utility to parse markdown content and convert it to website structure
export const parseMarkdownToWebsiteContent = (markdownContent) => {
  const lines = markdownContent.split('\n');
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;
  let contentBuffer = [];
  let chapterCounter = 1;
  
  const flushContent = () => {
    if (contentBuffer.length > 0 && currentSubsection) {
      currentSubsection.content = contentBuffer.join('\n').trim();
      contentBuffer = [];
    }
  };
  
  const flushSubsection = () => {
    flushContent();
    if (currentSubsection && currentSection) {
      currentSection.subsections.push(currentSubsection);
      currentSubsection = null;
    }
  };
  
  const flushSection = () => {
    flushSubsection();
    if (currentSection) {
      sections.push(currentSection);
      currentSection = null;
    }
  };
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Main headings (# or ###)
    if (trimmedLine.match(/^#{1,3}\s+(.+)/) && !trimmedLine.startsWith('####')) {
      flushSection();
      
      const title = trimmedLine.replace(/^#{1,3}\s+/, '');
      currentSection = {
        chapterNumber: `${String(chapterCounter).padStart(2, '0')}.`,
        chapterTitle: title,
        subsections: [],
        isCollapsible: true, // Add dropdown functionality
        isExpanded: false // Start collapsed
      };
      chapterCounter++;
    }
    // Subheadings (#### or deeper, or bold text)
    else if (trimmedLine.match(/^#{4,}\s+(.+)/) || trimmedLine.match(/^\*\*(.+)\*\*$/)) {
      flushSubsection();
      
      let title = '';
      if (trimmedLine.startsWith('#')) {
        title = trimmedLine.replace(/^#{4,}\s+/, '');
      } else if (trimmedLine.match(/^\*\*(.+)\*\*$/)) {
        title = trimmedLine.replace(/^\*\*(.+)\*\*$/, '$1');
      }
      
      currentSubsection = {
        title: title,
        content: '',
        isCollapsible: true,
        isExpanded: false
      };
    }
    // Bullet points or regular content
    else if (trimmedLine.length > 0) {
      // If we don't have a current subsection, create one
      if (!currentSubsection && currentSection) {
        currentSubsection = {
          title: '',
          content: '',
          isCollapsible: false,
          isExpanded: true
        };
      }
      
      contentBuffer.push(line);
    }
    // Empty line - continue adding to buffer to preserve formatting
    else {
      contentBuffer.push('');
    }
  });
  
  // Flush remaining content
  flushSection();
  
  return {
    sections: sections
  };
};

// Helper function to create expandable/collapsible sections
export const createExpandableSection = (section, isExpanded = false) => {
  return {
    ...section,
    isExpanded,
    toggleExpanded: () => !section.isExpanded
  };
};

// Format content for display (handle markdown formatting)
export const formatContent = (content) => {
  if (!content) return '';
  
  return content
    // Bold text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic text
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p class="text-black/55 dark:text-white/60 leading-relaxed tracking-[-0.1pt] text-left mb-4">')
    // Bullet points
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    // Wrap bullet points in ul
    .replace(/(<li.*<\/li>)/gs, '<ul class="list-disc list-inside space-y-1 mb-4">$1</ul>');
}; 