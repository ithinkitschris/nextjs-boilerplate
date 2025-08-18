# Component Organization

This document outlines the reorganization of components into a more structured folder hierarchy.

## New Structure

### `/app/components/ui/` - Reusable UI Components
These are generic, reusable components that can be used across different pages:

- **VideoSquare.js** - Grid video component with hover effects
- **DesktopNavbar.js** - Desktop navigation bar
- **MobileNavbar.js** - Mobile navigation bar  
- **OptimizedVideo.js** - Video component with optimization
- **Video.js** - Basic video component
- **CornerArrow.js** - Corner arrow icon component
- **SideContainer.js** - Side container layout component
- **CarouselVideo.js** - Video carousel component
- **CarouselNavButton.js** - Carousel navigation buttons
- **ContentGridItem.js** - Grid item component
- **VideoDebugger.js** - Video debugging component
- **backbutton.tsx** - Back button component
- **dark-mode-toggle.tsx** - Dark mode toggle
- **search-menu.js** - Search menu component
- **profile-carousel.js** - Profile carousel component
- **NavContext.js** - Navigation context

### `/app/components/pages/` - Project Pages
These are full page components that represent specific projects or sections:

- **photography.js** - Photography portfolio page
- **content.js** - Content showcase page
- **websitev2.js** - Website portfolio page
- **ghibli.js** - Ghibli project page
- **cabin.js** - Cabin crew stories page
- **cocktail.js** - Cocktail project page
- **kris.js** - Kris project page
- **travelbig.js** - Travel Big project page
- **lounge.js** - Lounge project page
- **hemsaker.js** - Hemsaker project page
- **ispy.js** - I Spy project page
- **jolli.js** - Jolli project page
- **uniqlo1.js** - Uniqlo 1 project page
- **uniqlo2.js** - Uniqlo 2 project page
- **oneshow.js** - One Show project page
- **samsung.js** - Samsung project page
- **nike.js** - Nike project page
- **iphone.js** - iPhone project page
- **leica.js** - Leica project page
- **nycsubway.js** - NYC Subway project page
- **car.js** - Car project page
- **3d.js** - 3D project page
- **street-photo.js** - Street photography page
- **film.js** - Film photography page
- **bbh.js** - BBH project page
- **stressed.js** - Stressed project page
- **shotoniphone.js** - Shot on iPhone page
- **bts.js** - Behind the scenes page
- **bestworkv3.js** - Best work showcase page
- **bestworkv2.js** - Best work showcase page (v2)
- **resume.js** - Resume page
- **about-site.js** - About site page
- **currently.js** - Currently working on page
- **product.js** - Product showcase page
- **product copy.js** - Product showcase page (copy)
- **motion.js** - Motion graphics page
- **episodes-cabin.js** - Cabin episodes page
- **unshackle.js** - Unshackle project page
- **documentation.tsx** - Documentation page

### `/app/components/resume/` - Resume-Specific Components
Components specifically for the resume functionality:

- **ExperienceCard.jsx** - Experience card component
- **ResumeFooter.js** - Resume footer component
- **ResumeSectionHeader.js** - Resume section header

### `/app/components/common/` - Common Components
Shared components used across the application:

- **ProjectHeader.jsx** - Project header component

### `/app/components/works/` - Work-Specific Components
Components organized by specific work projects:

- **cabin/** - Cabin crew stories components
- **cocktail/** - Cocktail project components
- **ghibli/** - Ghibli project components
- **kris/** - Kris project components
- **lounge/** - Lounge project components
- **travelbig/** - Travel Big project components

## Benefits of This Organization

1. **Clear Separation**: UI components are separate from page-specific components
2. **Reusability**: UI components can be easily reused across different pages
3. **Maintainability**: Related components are grouped together
4. **Scalability**: Easy to add new components to appropriate folders
5. **Developer Experience**: Clear folder structure makes it easier to find components

## Import Paths Updated

The main `app/page.js` file has been updated with the new import paths:
- Page components now import from `./components/pages/`
- UI components now import from `./components/ui/` 