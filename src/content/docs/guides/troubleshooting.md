---
title: Troubleshooting Guide
description: Solutions to common issues and problems with Summarizerrrr.
---

# 🔧 Troubleshooting Guide

Find solutions to common issues and get Summarizerrrr working smoothly.

---

## 🚨 Common Issues

### "API key is not configured"

**Problem**: You're getting an error that your API key isn't set up.

**Solution**:

1. Go to Settings → AI Model Settings
2. Enter your API key in the appropriate field
3. Ensure you've selected the correct provider
4. Save your settings

**Prevention**:

- Double-check your API key is copied correctly
- Verify your API key is active and has credits
- Test your API key on the provider's website

### "Could not get page content"

**Problem**: The extension can't access the webpage content.

**Solution**:

1. Refresh the webpage and try again
2. Clear browser cookies for the site
3. Try a different webpage
4. Check if the page requires authentication

**Prevention**:

- Ensure the webpage is fully loaded
- Check if the site blocks content extraction
- Try disabling ad blockers temporarily

### "No text selected for summarization"

**Problem**: Right-click summarization isn't working.

**Solution**:

1. Make sure you've selected text before right-clicking
2. Try selecting a larger portion of text
3. Ensure the text is selectable (not an image)
4. Check if the site allows text selection

**Prevention**:

- Select text before right-clicking
- Choose text that's clearly readable
- Avoid selecting text within forms or special elements

### Extension not working

**Problem**: The extension doesn't respond or function properly.

**Solution**:

1. Check if the extension is enabled in your browser
2. Try disabling and re-enabling the extension
3. Clear browser cache and cookies
4. Restart your browser

**Prevention**:

- Keep the extension updated
- Don't disable too many browser extensions
- Monitor browser memory usage

---

## 🔑 API Key Issues

### Google Gemini API Issues

**"Invalid API key"**

- Verify you copied the key correctly
- Check if the key is from the correct Google AI Studio account
- Ensure the key hasn't expired

**"Quota exceeded"**

- Check your usage in Google AI Studio
- Wait for quota reset or upgrade your plan
- Consider using a different API provider temporarily

**"API not enabled"**

- Enable the Gemini API in Google Cloud Console
- Ensure billing is set up for your Google account
- Check API restrictions and permissions

### OpenRouter API Issues

**"Authentication failed"**

- Verify your API key is correct
- Check if your account is active
- Ensure you have sufficient credits

**"Rate limit exceeded"**

- Wait before making more requests
- Check your usage dashboard
- Consider upgrading your plan

### Ollama Issues

**"Connection refused"**

- Ensure Ollama is running on your computer
- Check if the endpoint URL is correct (default: http://localhost:11434)
- Verify Ollama is accessible from your browser

**"Model not found"**

- Pull the required model: `ollama pull llama2`
- Check available models: `ollama list`
- Ensure you have enough disk space

---

## 🌐 Browser-Specific Issues

### Chrome Issues

**Extension not appearing**

1. Go to `chrome://extensions/`
2. Find Summarizerrrr
3. Ensure it's enabled
4. Pin it to toolbar if needed

**Shortcuts not working**

1. Go to `chrome://extensions/shortcuts`
2. Find Summarizerrrr
3. Set or reset keyboard shortcuts
4. Check for conflicts with other extensions

### Firefox Issues

**Extension not loading**

1. Go to `about:addons`
2. Find Summarizerrrr
3. Enable the extension
4. Restart Firefox if needed

**Permissions issues**

1. Check extension permissions in `about:addons`
2. Grant necessary permissions
3. Allow the extension to access websites

---

## 📱 Performance Issues

### Slow Processing

**Causes**:

- Large content being processed
- Slow internet connection
- High API latency
- Browser memory issues

**Solutions**:

1. **Use Basic Mode** for faster processing
2. **Choose shorter summaries** for quicker results
3. **Use local Ollama** for privacy and speed
4. **Close unnecessary tabs** to free up memory
5. **Check your internet connection**

### Memory Issues

**Symptoms**:

- Browser becomes slow
- Extension stops responding
- Tabs crash frequently

**Solutions**:

1. Close unused browser tabs
2. Clear browser cache and cookies
3. Restart your browser
4. Check for memory-hungry extensions
5. Consider using a lighter browser

---

## 🎬 Video Summarization Issues

### YouTube Issues

**"Could not detect video content"**

- Ensure you're on a YouTube video page
- Check if the video is publicly accessible
- Refresh the page and try again
- Verify the video has captions or transcript

**"Timestamps not working"**

- Ensure the video has chapters/timestamps
- Try refreshing the page
- Check if the video is fully loaded
- Use a different video to test

### Udemy Issues

**"Course content not detected"**

- Ensure you're on a Udemy course video page
- Check if you're logged into Udemy
- Verify the course is accessible
- Try a different course video

---

## 🔒 Privacy and Security Issues

### Data Privacy Concerns

**"Is my data being stored?"**

- No data is stored on external servers
- API calls go directly to your chosen provider
- Local processing when using Ollama
- No tracking or analytics

**"API key security"**

- Keys are stored locally in your browser
- Encrypted in browser storage
- Never shared with third parties
- You control all API usage

---

## 📞 Getting Additional Help

### Before Contacting Support

1. **Check this guide** for your specific issue
2. **Review your settings** for configuration problems
3. **Try different content** to isolate the problem
4. **Clear browser cache** if experiencing issues
5. **Test with a different browser** to rule out browser-specific issues

### When to Contact Support

Contact support if:

- Issue persists after trying all solutions
- Error messages are unclear or unhelpful
- Extension behavior is unexpected
- You need help with advanced features

### Providing Useful Information

When reporting issues, include:

- **Browser and version** (Chrome 120, Firefox 121, etc.)
- **Extension version** (found in extension settings)
- **Error message** (exact text)
- **Steps to reproduce** the issue
- **Content type** (YouTube, webpage, etc.)
- **API provider** being used

---

## 🛠️ Advanced Troubleshooting

### Debug Mode

Enable debug mode for detailed error information:

1. Open extension settings
2. Go to Advanced tab
3. Enable "Debug Mode"
4. Check browser console for detailed logs

### Reset Extension

If all else fails, reset the extension:

1. Go to browser extensions page
2. Find Summarizerrrr
3. Click "Remove" or "Uninstall"
4. Reinstall from the store
5. Reconfigure your settings

### Alternative Solutions

**Try different API providers**:

- Switch between Gemini, OpenRouter, and Ollama
- Test with different models
- Use local processing for privacy

**Browser alternatives**:

- Try a different browser
- Use incognito/private mode
- Disable other extensions temporarily

---

## 🎯 Prevention Tips

### Regular Maintenance

1. **Keep the extension updated**
2. **Monitor API usage** and credits
3. **Clear browser cache** regularly
4. **Check for browser updates**
5. **Review extension permissions** periodically

### Best Practices

1. **Start with Basic Mode** if you're new
2. **Use appropriate summary lengths** for your needs
3. **Test with different content types**
4. **Keep backup API keys** ready
5. **Monitor performance** and adjust settings

---

## 📚 Related Guides

### 🎯 Overview

- **[What is Summarizerrrr?](/what-is-summarizerrrr)** - Learn about the extension
- **[Quick Start Guide](/guides/quick-start)** - Get up and running fast
- **[Complete User Guide](/guides/complete-guide)** - Master all features
- **[Guides Overview](/guides/guidance)** - Complete documentation index

### 🎨 Customization

- **[Customization Settings](/guides/customization)** - Personalize your experience
- **[Advanced Features](/guides/advanced-features)** - Power user capabilities

### 🎬 Specialized Features

- **[Video Summarization](/guides/video-summarization)** - YouTube and Udemy features

---

**Next**: Start fresh with the [Quick Start Guide](/guides/quick-start) or explore [Advanced Features](/guides/advanced-features)!

_Still having issues? Check our [Advanced Features Guide](/guides/advanced-features) for more detailed troubleshooting or reach out to our community for support._
