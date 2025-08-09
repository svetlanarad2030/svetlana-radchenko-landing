# DigitalOcean Deployment Guide

This document explains how to deploy the Svetlana Radchenko landing website to DigitalOcean App Platform.

## Prerequisites

- DigitalOcean account logged in with GitHub
- GitHub repository: `LevFaiger/svetlana-radchenko-landing`
- Static Next.js export configuration

## Deployment Steps

### 1. DigitalOcean App Platform Setup

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose "GitHub" as source
4. Select repository: `LevFaiger/svetlana-radchenko-landing`
5. Select branch: `main`
6. Enable "Autodeploy" for automatic deployments on push

### 2. App Configuration

The app includes a `.do/app.yaml` configuration file with the following settings:

- **Build Command**: `npm run build`
- **Run Command**: `npx serve@latest out -s -l 3000`
- **Environment**: Node.js
- **Instance Size**: Basic XXS (sufficient for static site)
- **Port**: 3000

### 3. Environment Variables

The following environment variables are automatically set:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

### 4. Deployment Process

1. DigitalOcean will automatically:
   - Clone the repository
   - Install dependencies with `npm install`
   - Build the static site with `npm run build`
   - Serve the built files from the `out/` directory

2. The site will be available at the provided DigitalOcean URL

### 5. Custom Domain (Optional)

To use a custom domain:
1. In the App Platform dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Update DNS records as instructed by DigitalOcean

## Technical Details

### Static Export Configuration

The site uses Next.js static export:
- `output: 'export'` in `next.config.js`
- All pages are pre-rendered at build time
- No server-side functionality required

### File Structure

```
out/                 # Built static files
├── index.html       # Russian homepage
├── en/             # English pages
│   ├── index.html
│   ├── about/
│   ├── contact/
│   └── ...
├── _next/          # Next.js assets
└── images/         # Static images
```

### Deployment Commands

- **Build**: `npm run build` - Creates static export in `out/`
- **Start**: `npm start` - Serves static files with correct port
- **Local Serve**: `npm run serve` - Test locally on port 3000

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are in `package.json`
2. **404 Errors**: Ensure `trailingSlash: true` in `next.config.js`
3. **Images Not Loading**: Use `unoptimized: true` for images
4. **Port Issues**: App uses `PORT` environment variable or defaults to 3000

### Logs

Check deployment logs in DigitalOcean dashboard:
- Build logs show compilation process
- Runtime logs show serving activity

## Cost Optimization

- Basic XXS instance is sufficient for static sites
- No database or additional services required
- Automatic scaling handles traffic spikes

## Monitoring

- DigitalOcean provides built-in monitoring
- Health checks ensure site availability
- Automatic deployment on GitHub pushes