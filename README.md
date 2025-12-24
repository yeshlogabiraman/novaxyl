# NOVAXYL Consulting Website

Professional website for NOVAXYL Consulting - AI Strategy, Solution, Governance & Execution

## Directory Structure

```
novaxyl-site/
├── index.html              # Main homepage
├── blog.html               # Blog/insights page
├── sitemap.xml            # XML sitemap for search engines
├── robots.txt             # Crawler instructions
├── css/
│   ├── main.css          # Main stylesheet
│   └── blog.css          # Blog page stylesheet
├── js/
│   └── main.js           # JavaScript for smooth scrolling
└── images/
    ├── logo.png          # Company logo
    └── founder.png       # Founder photo
```

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `novaxyl.com` or `your-username.github.io`
3. Set to **Public**
4. Do NOT initialize with README (we have files already)
5. Click "Create repository"

### Step 2: Upload Files

**Option A: Using Git Command Line**

```bash
cd novaxyl-site

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - NOVAXYL Consulting website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/novaxyl.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop**
1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose the novaxyl-site folder
4. Publish repository to GitHub

**Option C: Using GitHub Web Interface**
1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all files/folders
4. Commit changes

### Step 3: Enable GitHub Pages

1. Go to repository → Settings
2. Click "Pages" in left sidebar
3. Under "Source", select:
   - **Branch**: main
   - **Folder**: / (root)
4. Click "Save"
5. Wait 1-2 minutes for deployment

Your site will be available at:
- `https://YOUR-USERNAME.github.io/novaxyl.com/` OR
- `https://YOUR-USERNAME.github.io/` (if repo named username.github.io)

### Step 4: Configure Custom Domain (novaxyl.com)

1. **In GitHub Repository:**
   - Settings → Pages → Custom domain
   - Enter: `novaxyl.com`
   - Click "Save"
   - Check "Enforce HTTPS" (after DNS propagates)

2. **In Your Domain Registrar (where you bought novaxyl.com):**
   
   Add these DNS records:
   
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

3. **Create CNAME file in repository root:**
   - File name: `CNAME` (no extension)
   - Content: `novaxyl.com`

4. Wait 24-48 hours for DNS propagation

## SEO Setup Checklist

### Before Launch
- [ ] Replace `G-XXXXXXXXXX` in index.html with your Google Analytics ID
- [ ] Replace `G-XXXXXXXXXX` in blog.html with your Google Analytics ID
- [ ] Upload `logo.png` to `/images/` folder
- [ ] Upload `founder.png` to `/images/` folder
- [ ] Update dates in `sitemap.xml` to current date
- [ ] Test all links work correctly
- [ ] Test responsive design on mobile

### After Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Create Google Business Profile
- [ ] Add website to LinkedIn company page

## Google Search Console Setup

1. Go to: https://search.google.com/search-console/
2. Click "Add Property"
3. Enter: `https://novaxyl.com`
4. Choose verification method:
   
   **HTML File Upload (Recommended for GitHub Pages):**
   - Download verification file (e.g., `google1234567890.html`)
   - Upload to root directory of your repository
   - Commit and push to GitHub
   - Click "Verify" in Search Console

5. Once verified:
   - Submit sitemap: `https://novaxyl.com/sitemap.xml`
   - Request indexing for main pages

## Updating Content

### To Update the Website:

1. Edit files locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Pages automatically rebuilds (takes 1-2 minutes)

### Common Updates:

**Update Copyright Year:**
- Edit `index.html` and `blog.html`
- Find `© 2025` and change year

**Add Blog Post:**
- Edit `blog.html`
- Duplicate the `<article class="blog-card">` section
- Update title, date, description
- Update `sitemap.xml` with new URL

**Change Email Address:**
- Find `contact@novaxyl.com` in `index.html`
- Replace with new email
- Update Schema markup JSON as well

## Performance Optimization

### Image Optimization
- Compress `logo.png` to <50KB using https://tinypng.com/
- Compress `founder.png` to <100KB
- Consider WebP format for better compression

### Test Performance
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Target: 90+ score on both mobile and desktop

## Troubleshooting

**Site not loading after deployment:**
- Wait 5-10 minutes for initial deployment
- Check GitHub Actions tab for build status
- Verify files are in root directory (not in subfolder)

**Custom domain not working:**
- Check DNS settings in domain registrar
- Wait 24-48 hours for DNS propagation
- Verify CNAME file exists in repository root

**Images not loading:**
- Check file names match exactly (case-sensitive)
- Verify images are in `/images/` folder
- Check image paths in HTML: `images/logo.png`

**CSS not applying:**
- Check browser console for errors
- Verify CSS file paths: `css/main.css`
- Clear browser cache (Ctrl+Shift+R)

## Support

For issues with:
- GitHub Pages: https://docs.github.com/pages
- Domain configuration: Contact your domain registrar
- SEO: Refer to `HTML-SEO-IMPLEMENTATION-GUIDE.md`

## License

© 2025 NOVAXYL Consulting. All rights reserved.
