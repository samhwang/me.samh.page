# Rule: Deployment

Deployment to Cloudflare Pages with automated builds.

## Deployment Target

### Platform

- **Cloudflare Pages**: Static site hosting on global edge network
- **Auto-deployment**: Triggered automatically by GitHub pushes
- **Preview deployments**: Automatic for all branches
- **Production**: Deploys from main branch

### Benefits

- Global CDN distribution
- Automatic HTTPS with free SSL
- Fast edge serving (low latency worldwide)
- Zero-downtime deployments
- Preview URLs for branches
- Automatic cache invalidation

## Build Configuration

### Build Command

Cloudflare Pages runs:

```bash
pnpm build
```

This triggers:
1. Vite (Rolldown) bundles application
2. PandaCSS generates `styled-system/` utilities
3. Optimized output created in `dist/` directory

### Build Output

- **Output directory**: `dist/`
- **Build tool**: Vite with Rolldown
- **Assets**: Minified, hashed filenames, optimized

### Build Environment

- **Node version**: 22.x (specified in `package.json` engines)
- **Package manager**: pnpm 10.x
- **Environment**: Linux (Cloudflare Pages builder)

Cloudflare respects the `engines` field in `package.json`.

## Deployment Workflow

### Automatic Deployment

#### Production (main branch)

1. Commit changes to main branch
2. Push to GitHub
3. Cloudflare Pages detects push automatically
4. Runs `pnpm build` command
5. Deploys to production domain
6. Site live within 1-3 minutes

**No manual steps required.**

#### Preview (feature branches)

1. Create and push feature branch to GitHub
2. Cloudflare Pages builds branch automatically
3. Generates unique preview URL (e.g., `branch-name.pages.dev`)
4. Preview URL available immediately after build
5. Test changes before merging to main

**Benefits:**
- Test in production-like environment
- Share work-in-progress with others
- Visual regression testing
- Client/stakeholder preview

### Manual Verification

Before pushing to main, run locally:

```bash
# 1. Type check
pnpm typecheck

# 2. Lint code
pnpm lint

# 3. Run tests
pnpm test:run

# 4. Build locally
pnpm build

# 5. Preview build
pnpm preview
```

Pre-commit and pre-push hooks handle some checks automatically, but manual verification ensures everything works.

## Configuration Files

### wrangler.toml

Cloudflare Pages configuration file:
- Site name and project settings
- Build command and output directory
- Environment variables (if any)
- Custom domain settings
- Headers and redirects (if configured)

Located at project root.

### package.json

Defines Node/pnpm versions:

```json
"engines": {
  "node": "^22.0.0",
  "pnpm": "^10.0.0"
}
```

Cloudflare Pages respects these versions when building.

## Public Assets

### Static Files

Files in `public/` directory:
- `favicon.svg`: Site favicon
- `img192.png`, `img512.png`: PWA icons
- `robots.txt`: Search engine directives
- `humans.txt`: Project contributors/credits
- `Resume_SamHuynh.pdf`: Downloadable resume (if applicable)

These files are **copied as-is** to `dist/` during build and served at the root path.

**Example:**
- `public/favicon.svg` → `https://yoursite.com/favicon.svg`
- `public/robots.txt` → `https://yoursite.com/robots.txt`

### Asset Optimization

- **Images**: Use WebP format where possible for smaller file sizes
- **SVG**: Optimize SVGs, remove unnecessary metadata
- **PDF**: Compress PDFs for web delivery

## Performance Considerations

### Bundle Size

Monitor bundle size during builds:
- Vite reports chunk sizes in build output
- Keep main bundle under reasonable size (~200-300KB gzipped)
- Use code splitting for large features
- Analyze with `vite-bundle-visualizer` if needed

### Optimization Features

Automatic optimizations:
- **Minification**: JavaScript, CSS, HTML
- **Tree shaking**: Removes unused code
- **Code splitting**: Automatic for dynamic imports
- **Asset hashing**: Cache busting (e.g., `main.abc123.js`)
- **Compression**: Gzip/Brotli on Cloudflare edge

### Lighthouse Scores

Target metrics:
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

Test with Lighthouse (Chrome DevTools) after deployment.

### Core Web Vitals

Monitor:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

Cloudflare provides Web Analytics for tracking these metrics.

## Rollback & Recovery

### Rollback Process

If deployment has issues:

1. Go to Cloudflare Pages dashboard
2. Navigate to Deployments tab
3. Find previous working deployment
4. Click "Rollback to this deployment"
5. Site immediately reverts to that version

**Alternative:**
- Revert commit in Git
- Push to main branch
- New deployment with previous code

### Debugging Failed Builds

If build fails on Cloudflare:

1. **Check build logs** in Cloudflare Pages dashboard
2. **Verify build succeeds locally**: `pnpm build`
3. **Check Node/pnpm versions** match `package.json`
4. **Verify dependencies** are in `package.json` and `pnpm-lock.yaml` is committed
5. **Check for environment-specific code** (e.g., relying on local files)

**Common issues:**
- Missing `pnpm-lock.yaml` commit
- Node/pnpm version mismatch
- File path casing issues (macOS case-insensitive vs Linux case-sensitive)
- Missing environment variables

## Custom Domain

### Setup

1. Go to Cloudflare Pages dashboard
2. Navigate to Custom Domains section
3. Add your domain
4. Add DNS records (provided by Cloudflare)
5. SSL certificate auto-provisioned
6. DNS propagation takes ~24 hours (usually faster)

### HTTPS

- **Automatic HTTPS** via Cloudflare
- **Free SSL certificate** (Let's Encrypt or Cloudflare origin)
- **HTTPS redirect** enabled by default
- **HSTS** (HTTP Strict Transport Security) recommended

All traffic automatically uses HTTPS.

## Preview Deployments

### Branch Previews

Every branch push gets a unique preview URL:
- Format: `branch-name.your-project.pages.dev`
- Full production build (identical environment)
- Independent of production
- Automatically deleted when branch is deleted

### Use Cases

- **Feature testing**: Test new features in production-like environment
- **Share work**: Send preview URL to stakeholders
- **Visual regression**: Compare before/after
- **Client preview**: Get feedback before merging

### PR Integration

Preview URLs can appear in:
- Pull request comments (if GitHub integration configured)
- Cloudflare Pages dashboard
- GitHub Checks status

## Monitoring & Analytics

### Cloudflare Analytics

Available in Cloudflare dashboard:
- **Page views**: Total visits
- **Bandwidth usage**: Data transferred
- **Geographic distribution**: Visitor locations
- **Top pages**: Most visited pages
- **Referrers**: Traffic sources

### Web Vitals

Cloudflare provides Core Web Vitals tracking:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

Monitor performance trends over time.

### Error Tracking

Consider adding:
- **Sentry**: Error tracking and monitoring
- **LogRocket**: Session replay
- **Google Analytics**: User behavior tracking

## Best Practices

### Before Deploying

- ✅ All tests passing (`pnpm test:run`)
- ✅ TypeScript compiles (`pnpm typecheck`)
- ✅ Linting passes (`pnpm lint`)
- ✅ Local build succeeds (`pnpm build`)
- ✅ Preview build tested (`pnpm preview`)
- ✅ Commit message clear and descriptive

Pre-push hooks handle some of these automatically.

### After Deploying

- ✅ Verify production site loads correctly
- ✅ Test key functionality (navigation, links)
- ✅ Check browser console for errors
- ✅ Test on mobile and desktop
- ✅ Verify analytics tracking (if applicable)
- ✅ Check Lighthouse scores

### Regular Maintenance

- **Update dependencies** periodically (`pnpm update`)
- **Monitor bundle size** trends
- **Review Cloudflare analytics** for performance insights
- **Test performance** with Lighthouse regularly
- **Keep documentation** updated

## Troubleshooting

### Build Failures

**Symptom**: Build fails on Cloudflare but works locally

**Possible causes:**
- Node/pnpm version mismatch
- Missing dependencies (check `pnpm-lock.yaml` committed)
- Environment-specific code (e.g., `process.env` without defaults)
- File path casing issues (macOS vs Linux)

**Solutions:**
1. Check build logs in Cloudflare Pages dashboard
2. Verify `engines` in `package.json`
3. Ensure `pnpm-lock.yaml` is committed
4. Test in Linux environment if on macOS/Windows
5. Check for hardcoded file paths

### Deployment Not Triggering

**Symptom**: Push to GitHub doesn't trigger build

**Solutions:**
1. Check Cloudflare Pages GitHub integration is active
2. Verify branch is configured for deployment
3. Check for pending Cloudflare incidents (status.cloudflare.com)
4. Manually trigger build from Cloudflare dashboard
5. Re-authorize GitHub integration if needed

### Site Not Updating

**Symptom**: Deployed but old version still showing

**Possible causes:**
- Browser cache
- Deployment still in progress
- Service worker caching old version (if using PWA)

**Solutions:**
1. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
2. Check deployment status in Cloudflare dashboard
3. Wait a few minutes for CDN propagation
4. Clear browser cache completely
5. Test in incognito/private window
6. Check service worker cache (if using PWA)

### Performance Issues

**Symptom**: Slow page load times

**Solutions:**
1. Run Lighthouse audit to identify bottlenecks
2. Check bundle size (Vite build output)
3. Optimize images (convert to WebP, reduce size)
4. Use lazy loading for non-critical components
5. Review Cloudflare Analytics for geographic issues

## Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Web Analytics](https://developers.cloudflare.com/analytics/web-analytics/)

## Environment Variables

If you need environment variables:

1. Add to Cloudflare Pages dashboard (Settings → Environment Variables)
2. Prefix with `VITE_` to expose to client-side code
3. Access via `import.meta.env.VITE_*`
4. Never commit sensitive values to Git

**Example:**
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

**Note**: This project currently doesn't use environment variables, but this is how to add them if needed.
