# NOVAXYL Website - GitHub Pages Deployment Guide

## Quick Start (You Already Have Domain & GitHub Pages)

### Step 1: Prepare Your Files

**Download these files to your computer:**
- `index.html`
- `blog.html`
- `sitemap.xml`
- `robots.txt`
- `CNAME`
- `css/` folder (with main.css and blog.css)
- `js/` folder (with main.js)
- `images/` folder (add your logo.png and founder.png here)

**Your final structure should look like:**
```
novaxyl-site/
├── index.html
├── blog.html  
├── sitemap.xml
├── robots.txt
├── CNAME
├── css/
│   ├── main.css
│   └── blog.css
├── js/
│   └── main.js
└── images/
    ├── logo.png
    └── founder.png
```

---

### Step 2: Add Your Images

1. **Get your logo file**
   - Rename it to `logo.png`
   - Place in `images/` folder
   - Compress to <50KB using https://tinypng.com/

2. **Get founder photo**
   - Rename it to `founder.png`
   - Place in `images/` folder
   - Resize to 220x220 pixels
   - Compress to <100KB

---

### Step 3: Update Google Analytics (Optional but Recommended)

**Get your Google Analytics tracking ID:**
1. Go to https://analytics.google.com/
2. Create account/property for novaxyl.com
3. Copy your Measurement ID (looks like: `G-XXXXXXXXXX`)

**Update HTML files:**
- Open `index.html`
- Find `G-XXXXXXXXXX` (appears twice)
- Replace with your actual tracking ID
- Save file
- Repeat for `blog.html`

---

### Step 4: Update Sitemap Date

1. Open `sitemap.xml`
2. Change `<lastmod>2025-01-01</lastmod>` to today's date
3. Format: YYYY-MM-DD
4. Save file

---

### Step 5: Push to GitHub

**If you already have a GitHub repository:**

```bash
# Navigate to your local repository
cd path/to/your/novaxyl-repo

# Copy all new files to your repository
# (Copy the novaxyl-site folder contents to your repo)

# Add all files
git add .

# Commit with message
git commit -m "Update website with SEO optimization and new structure"

# Push to GitHub
git push origin main
```

**If you need to create new repository:**

```bash
cd novaxyl-site

git init
git add .
git commit -m "Initial commit - NOVAXYL website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin main
```

---

### Step 6: Verify GitHub Pages Settings

1. Go to your GitHub repository
2. Settings → Pages
3. Verify:
   - ✅ Source: **main** branch
   - ✅ Folder: **/ (root)**
   - ✅ Custom domain: **novaxyl.com**
   - ✅ Enforce HTTPS: **checked** (after DNS propagates)

---

### Step 7: Configure DNS (If Not Done Already)

**In your domain registrar DNS settings, add:**

| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| A     | @    | 185.199.108.153        | 3600 |
| A     | @    | 185.199.109.153        | 3600 |
| A     | @    | 185.199.110.153        | 3600 |
| A     | @    | 185.199.111.153        | 3600 |
| CNAME | www  | YOUR-USERNAME.github.io | 3600 |

**Replace `YOUR-USERNAME` with your actual GitHub username**

**Wait**: DNS changes take 24-48 hours to fully propagate

---

### Step 8: Test Your Site

**After pushing to GitHub (wait 2-3 minutes for deployment):**

1. **Test GitHub Pages URL first:**
   - https://YOUR-USERNAME.github.io/REPO-NAME/
   
2. **Test custom domain (after DNS propagates):**
   - https://novaxyl.com
   - https://www.novaxyl.com

3. **Check all pages work:**
   - Home page loads
   - Blog page loads
   - All links work
   - Images display
   - Email link works
   - Mobile responsive

4. **Test site speed:**
   - https://pagespeed.web.dev/
   - Enter: https://novaxyl.com
   - Target: 90+ score

---

### Step 9: Submit to Search Engines

#### Google Search Console

1. **Go to:** https://search.google.com/search-console/
2. **Add Property:** Enter `https://novaxyl.com`
3. **Verify Ownership** (choose one method):

   **Method A: HTML File** (Easiest)
   - Download verification file (e.g., `google123abc.html`)
   - Add to your repository root
   - Commit and push to GitHub
   - Click "Verify" in Search Console

   **Method B: HTML Tag**
   - Copy the meta tag
   - Add to `<head>` section of `index.html`
   - Commit and push
   - Click "Verify"

4. **Submit Sitemap:**
   - In Search Console: Sitemaps section
   - Add: `https://novaxyl.com/sitemap.xml`
   - Submit

5. **Request Indexing:**
   - URL Inspection tool
   - Enter: `https://novaxyl.com`
   - Click "Request Indexing"
   - Repeat for: `https://novaxyl.com/blog.html`

#### Bing Webmaster Tools

1. **Go to:** https://www.bing.com/webmasters/
2. Import from Google Search Console (easiest) OR
3. Add site manually and verify
4. Submit sitemap: `https://novaxyl.com/sitemap.xml`

---

### Step 10: Monitor & Maintain

**Weekly (5 minutes):**
- Check Google Search Console for errors
- Monitor traffic in Google Analytics
- Check email for inquiries

**Monthly (30 minutes):**
- Review search rankings
- Check for broken links
- Update content if needed
- Publish blog posts

**When to update sitemap.xml:**
- After adding new pages
- After publishing blog posts
- Change `<lastmod>` date to current date
- Resubmit to Search Console

---

## Common Issues & Solutions

### Issue: Site shows old content after pushing changes
**Solution:**
- Wait 2-3 minutes for GitHub to rebuild
- Clear browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check GitHub Actions tab for build status

### Issue: Images not loading
**Solution:**
- Verify file names match exactly: `logo.png` not `Logo.png`
- Check files are in `images/` folder
- Verify HTML paths: `<img src="images/logo.png">`
- Push changes again if files were missing

### Issue: Custom domain shows 404
**Solution:**
- Verify CNAME file exists in repository root
- Check DNS settings in domain registrar
- Wait 24-48 hours for DNS propagation
- GitHub Settings → Pages → Custom domain shows your domain

### Issue: CSS not loading
**Solution:**
- Check file paths are correct: `<link rel="stylesheet" href="css/main.css">`
- Verify css folder contains main.css and blog.css
- Clear browser cache
- Check browser console (F12) for error messages

### Issue: Google Search Console verification fails
**Solution:**
- Verification file must be in root directory (not in subfolder)
- File name must match exactly what Google provides
- Wait 5 minutes after pushing for GitHub to deploy
- Try HTML tag method instead

---

## File Checklist Before Going Live

```
✅ index.html - Main homepage with SEO tags
✅ blog.html - Blog page with SEO tags  
✅ css/main.css - Main stylesheet (1150 lines)
✅ css/blog.css - Blog stylesheet (429 lines)
✅ js/main.js - JavaScript for smooth scrolling
✅ images/logo.png - Company logo (<50KB)
✅ images/founder.png - Founder photo (<100KB)
✅ sitemap.xml - XML sitemap with updated dates
✅ robots.txt - Crawler instructions
✅ CNAME - Contains "novaxyl.com"
✅ README.md - Documentation
```

---

## Next Steps After Launch

**Week 1:**
1. ✅ Site is live on novaxyl.com
2. ✅ Google Search Console verified and sitemap submitted
3. ✅ Google Analytics tracking
4. Create Google Business Profile
5. Add website to LinkedIn profile
6. Share launch announcement

**Week 2-4:**
1. Write first blog post (The Data Readiness Trap)
2. Submit to business directories (Clutch, etc.)
3. Build initial backlinks
4. Monitor for any technical issues

**Month 2+:**
1. Publish 2-4 blog posts per month
2. Monitor search rankings
3. Gather client reviews
4. Build authority with content and backlinks

---

## Quick Commands Reference

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline
```

---

## Support Resources

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Google Search Console:** https://search.google.com/search-console/
- **Google Analytics:** https://analytics.google.com/
- **PageSpeed Insights:** https://pagespeed.web.dev/

---

## Need Help?

If you encounter issues:
1. Check the "Common Issues" section above
2. Review GitHub Actions for build errors
3. Check browser console (F12) for JavaScript errors
4. Verify all files are in correct locations

Your site structure is SEO-optimized and ready for search engines! 🚀
