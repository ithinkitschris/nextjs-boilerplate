# Tab Order Audit - Resume Page

## Current Tab Order (Before Fixes)

### 1. DesktopNavbar (Always rendered, conditionally visible)
- **Home Button** (line 77-116)
  - Status: Conditionally rendered `{(!shouldExpandNav || homeOnly) && ...}`
  - Issue: ✅ Properly conditionally rendered - OK
  
- **Work Button** (line 121-174)
  - Status: Conditionally rendered `{showArchiveButton && ...}`
  - Issue: ✅ Properly conditionally rendered - OK
  
- **Skillset Buttons** (line 191-247)
  - Status: Always rendered, hidden with `opacity-0 pointer-events-none`
  - Issue: ❌ **STILL FOCUSABLE VIA KEYBOARD** - Creates empty tab stops
  - Fix: Add `tabIndex={shouldExpandNav ? 0 : -1}` or conditionally render

### 2. MobileNavbar (Always rendered, conditionally visible)
- **Home Button** (line 34-68)
  - Status: Always rendered, hidden with `md:hidden` CSS class
  - Issue: ⚠️ Still in DOM but hidden - may be focusable on mobile
  - Fix: Add `tabIndex={isMobile ? 0 : -1}` or use `aria-hidden` when hidden
  
- **Work Button** (line 72-105)
  - Status: Conditionally rendered `{showWorkButton && ...}`
  - Issue: ✅ Properly conditionally rendered - OK
  
- **Skillset Buttons** (line 168-244)
  - Status: Conditionally rendered based on `showNav`
  - Issue: ✅ Properly conditionally rendered - OK

### 3. Currently Component (Rendered BEFORE headers)
- **Subway Video Container** (line 136-139 in currently.js)
  - Status: Has `tabIndex={0}` and `role="button"`
  - Issue: ❌ **RENDERED BEFORE RESUME HEADERS** - Creates tab stop before h1, h2, h3
  - Location: Line 738 in resume.js - `<Currently />` comes before headers
  - Fix: Move Currently component after headers OR remove tabIndex if not needed

### 4. Resume Headers (What user wants to reach)
- **Header 1** (h1) - Line 636-641
  - Status: Has `tabIndex={0}` ✅
  
- **Header 2** (h2) - Line 644-652
  - Status: Has `tabIndex={0}` ✅
  
- **Header 3** (h3) - Line 717-723
  - Status: Has `tabIndex={0}` ✅

## Issues Summary

### Critical Issues:
1. **Skillset buttons in DesktopNavbar** - Hidden with CSS but still keyboard focusable
2. **Currently component** - Rendered before headers, has tabIndex={0}, creates tab stop before headers

### Minor Issues:
3. **Mobile navbar buttons** - May be focusable when hidden (needs verification)

## Recommended Fixes

1. ✅ **DesktopNavbar Skillset Buttons**: FIXED - Added `tabIndex={shouldExpandNav ? 0 : -1}` to prevent keyboard focus when hidden
2. **Currently Component**: 
   - Status: Has `tabIndex={0}` and is intentionally keyboard accessible (has onKeyDown, onFocus handlers)
   - Issue: Rendered before headers in DOM (line 738), but headers come first in visual order
   - Note: This is actually correct - headers are in bio section (lines 636-723), Currently is in content section (line 738)
   - The subway element is meant to be keyboard accessible, so `tabIndex={0}` is appropriate
   - **No change needed** - This is working as intended
3. **Mobile Navbar**: 
   - Status: Buttons use `md:hidden` CSS class (visible on mobile, hidden on desktop)
   - Issue: Still focusable via keyboard when hidden on desktop
   - Recommendation: Add `tabIndex={-1}` when on desktop, but requires mobile detection hook
   - **Note**: This is a minor issue - mobile buttons are meant to be accessible on mobile devices

## Current Tab Order (After Fixes)

1. **DesktopNavbar** (if visible)
   - Home Button (if shown)
   - Work Button (if on resume page)
   - Skillset Buttons (only focusable when `shouldExpandNav` is true) ✅ FIXED

2. **MobileNavbar** (if visible on mobile)
   - Home Button
   - Work Button (if on resume page)
   - Skillset Buttons (if nav is open)

3. **Resume Headers** (Bio Section)
   - Header 1 (h1) - tabIndex={0}
   - Header 2 (h2) - tabIndex={0}
   - Header 3 (h3) - tabIndex={0}

4. **Currently Component** (Content Section)
   - Subway Video Container - tabIndex={0} (intentionally keyboard accessible)

5. **Other Resume Content**
   - Story selector buttons
   - Archive section
   - Footer accordions
   - etc.

