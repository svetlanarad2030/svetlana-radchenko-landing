# Static Site Conversion Plan

## Current Situation
The Svetlana Radchenko landing website currently uses Next.js with API routes, making it a **server-side application** rather than a static site. This prevents deployment on Digital Ocean's free Static Web Apps service.

## Why It's Not Static
1. **API Route**: `/src/app/api/track-email/route.ts` handles POST requests
2. **Server Dependencies**: `better-sqlite3` for database operations
3. **Dynamic Server Logic**: Email tracking and request logging
4. **Build Output**: Next.js generates server-side code for API routes

## Conversion Strategy

### Phase 1: Remove Server-Side Dependencies 🗑️

#### 1.1 Delete API Route
- **File**: `/src/app/api/track-email/route.ts`
- **Action**: Remove entire `/src/app/api/` directory
- **Impact**: No more server-side email tracking

#### 1.2 Remove Database Dependencies
- **Files**: 
  - `/src/lib/database.ts` (if exists)
  - Remove `better-sqlite3` from `package.json`
- **Action**: Clean up database-related code

#### 1.3 Update Dependencies
```bash
npm uninstall better-sqlite3 @types/better-sqlite3
```

### Phase 2: Convert to Client-Side Email System 📧

#### 2.1 Update ConsultationButton Component
**Current**: Sends POST request to `/api/track-email`
**New**: Direct `mailto:` links with tracking via browser

```typescript
// Before
const handleSubmit = async () => {
  await fetch('/api/track-email', { ... })
}

// After  
const handleSubmit = () => {
  // Optional: Client-side analytics tracking
  window.gtag?.('event', 'email_click', { 
    page: sourcePage,
    subject: subject 
  });
  
  // Direct mailto link
  window.location.href = generateMailtoLink({...});
}
```

#### 2.2 Update ContactForm Component
**Current**: May use API for form submission
**New**: Pure `mailto:` with form data in email body

```typescript
const handleSubmit = (data: FormData) => {
  const emailBody = `
Имя: ${data.name}
Email: ${data.email}
Сообщение: ${data.message}
Источник: ${sourcePage}
  `;
  
  window.location.href = `mailto:finmodelguru@gmail.com?subject=Заявка с сайта&body=${encodeURIComponent(emailBody)}`;
}
```

### Phase 3: Configure Static Export 🔧

#### 3.1 Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,       // Add trailing slashes to URLs
  images: {
    unoptimized: true        // Disable Next.js image optimization
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/svetlana-radchenko-landing' : '',
}

module.exports = nextConfig;
```

#### 3.2 Add Export Script
**package.json**:
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy:static": "npm run export"
  }
}
```

### Phase 4: Handle Static-Specific Issues 🛠️

#### 4.1 Image Optimization
- Replace `next/image` with regular `<img>` tags where needed
- Or keep `next/image` with `unoptimized: true`

#### 4.2 Dynamic Routes
- Ensure all routes are pre-generated
- Check for any dynamic imports that might cause issues

#### 4.3 Environment Variables
- Move any server-side env vars to build-time
- Use `NEXT_PUBLIC_` prefix for client-side variables

### Phase 5: Testing & Validation ✅

#### 5.1 Build Test
```bash
npm run build
npm run export
```

#### 5.2 Static File Verification
- Check `/out` directory contains only static files
- No server.js or API routes in build output
- All HTML/CSS/JS files are static

#### 5.3 Functionality Test
- Test all "Оставить заявку" buttons open email client
- Verify form submissions work via mailto
- Check all pages render correctly
- Validate mobile responsiveness

### Phase 6: Deployment to Digital Ocean 🚀

#### Digital Ocean App Platform - Static Web Apps (Free Tier)

**Setup Process**:
1. **Connect GitHub Repository**
   - Link Digital Ocean to your GitHub account
   - Select the repository containing the static site
   - Configure branch (main/master) for auto-deployment

2. **Configure Build Settings**
   ```yaml
   # Digital Ocean App Spec (auto-generated)
   name: svetlana-radchenko-landing
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/svetlana-radchenko-landing
       branch: main
     run_command: npm run export
     build_command: npm install && npm run build
     output_dir: /out
   ```

3. **Auto-Deploy on Push**
   - Each push to `main` branch triggers automatic deployment
   - Digital Ocean builds and deploys the static files from `/out` directory
   - No manual intervention required after initial setup

4. **Environment Configuration**
   ```bash
   # Build Commands (configured in Digital Ocean)
   npm install
   npm run build
   npm run export
   
   # Output Directory
   /out
   ```

**Benefits of Digital Ocean + GitHub Integration**:
- ✅ **Free hosting** for static sites
- ✅ **Automatic deployments** on every git push
- ✅ **Custom domain** support
- ✅ **SSL certificates** included
- ✅ **CDN** for global performance
- ✅ **Build logs** and deployment history

### Phase 7: Optional Enhancements 🌟

#### 7.1 Analytics Tracking
Replace server-side tracking with:
- Google Analytics 4
- Plausible Analytics
- Simple client-side logging

#### 7.2 Form Enhancement
- Add client-side form validation
- Improve user feedback for email actions
- Consider third-party form services (Formspree, Netlify Forms)

#### 7.3 Performance Optimization
- Optimize images for web
- Implement lazy loading
- Minimize bundle size

## Implementation Timeline

| Phase | Tasks | Duration | Dependencies |
|-------|-------|----------|--------------|
| 1 | Remove server-side code | 1-2 hours | None |
| 2 | Update email system | 2-3 hours | Phase 1 |
| 3 | Configure static export | 1 hour | Phase 2 |
| 4 | Fix static issues | 2-4 hours | Phase 3 |
| 5 | Testing | 1-2 hours | Phase 4 |
| 6 | Deployment | 1 hour | Phase 5 |
| 7 | Enhancements | Optional | Phase 6 |

**Total Estimated Time**: 8-13 hours

## Files to Modify

### Delete
- `/src/app/api/` (entire directory)
- `/src/lib/database.ts` (if exists)

### Update
- `/src/components/forms/ConsultationButton.tsx`
- `/src/components/forms/ContactForm.tsx`
- `/src/lib/email-tracking.ts`
- `/next.config.js`
- `/package.json`

### Create
- `/docs/static-conversion-plan.md` ✅ (this file)

## Success Criteria
- [ ] Build generates only static files in `/out` directory
- [ ] All pages accessible without server
- [ ] Email functionality works via mailto links
- [ ] Site deployable to Digital Ocean Static Web Apps
- [ ] Performance maintained or improved
- [ ] All existing functionality preserved (except server-side tracking)

---

*Generated with Claude Code for Svetlana Radchenko Landing Website*
*Date: August 8, 2025*