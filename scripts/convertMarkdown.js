const fs = require('fs');
const path = require('path');

// Markdown parser function (copied here to avoid import issues)
const parseMarkdownToWebsiteContent = (markdownContent) => {
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
        isCollapsible: true,
        isExpanded: false
      };
      chapterCounter++;
    }
    // Subheadings (#### or deeper, or bold text patterns)
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
    // Regular content
    else if (trimmedLine.length > 0) {
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

// Path to your markdown file
const markdownFilePath = '/Users/chris/Downloads/dcfa22b5-704d-40ac-b037-e56241990def_Export-8f3ba871-d383-431e-a53b-b132a5655431/Portfolio Website 127a92ab668680ed91ddd0619057466f.md';

// Output path for the converted content
const outputPath = path.join(__dirname, '../app/content/website/portfolio-content.js');

// Ensure the output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

try {
  console.log('🔄 Reading markdown file...');
  
  // Read the markdown file
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');
  
  console.log('🔄 Parsing markdown content...');
  
  // Parse the markdown
  const websiteContent = parseMarkdownToWebsiteContent(markdownContent);
  
  console.log('🔄 Generating JavaScript content...');
  
  // Create the JavaScript content file
  const jsContent = `// Auto-generated from markdown file
// This file contains the parsed portfolio website content

export const portfolioWebsiteContent = ${JSON.stringify(websiteContent, null, 2)};

// Export individual sections for easier access
export const sections = portfolioWebsiteContent.sections;

// Helper function to get section by title
export const getSectionByTitle = (title) => {
  return sections.find(section => section.chapterTitle.toLowerCase().includes(title.toLowerCase()));
};

// Helper function to get all section titles
export const getAllSectionTitles = () => {
  return sections.map(section => section.chapterTitle);
};
`;

  // Write the output file
  fs.writeFileSync(outputPath, jsContent);
  
  console.log(`✅ Successfully converted markdown to website content!`);
  console.log(`📁 Output file: ${outputPath}`);
  console.log(`📊 Generated ${websiteContent.sections.length} sections`);
  
  // Log section titles for reference
  console.log('\n📋 Section titles:');
  websiteContent.sections.forEach((section, index) => {
    console.log(`  ${index + 1}. ${section.chapterTitle}`);
  });
  
  console.log('\n🎉 Ready to integrate into your website!');
  
} catch (error) {
  console.error('❌ Error converting markdown:', error.message);
  console.error(error.stack);
  process.exit(1);
} 