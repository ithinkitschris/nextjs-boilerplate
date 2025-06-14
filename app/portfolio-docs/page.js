'use client'
import React from 'react';
import WebsiteWithDropdowns from '../components/websiteWithDropdowns';
import { portfolioWebsiteContent } from '../content/website/portfolio-content';

export default function PortfolioDocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <WebsiteWithDropdowns 
          content={portfolioWebsiteContent}
          className="w-full"
          showNav={false}
        />
      </div>
    </div>
  );
} 