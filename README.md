# Web-security-practises

🔒 **Enhancing Frontend Security**  

This repository contains examples and best practices for securing frontend applications against common web security threats like **XSS, CSRF, Clickjacking, and Supply Chain Attacks**.  

## 📌 Topics Covered  
- **Cross-Site Scripting (XSS)**: Stored, Reflected, and DOM-based XSS examples in React.  
- **Cross-Site Request Forgery (CSRF)**: Secure API requests using CSRF tokens.  
- **Clickjacking**: How attackers overlay invisible elements and how to prevent it.  
- **Supply Chain Attacks**: Securing dependencies with `package-lock.json`, verifying maintainers, and using `npm ci` in CI/CD.  
- **Security Headers**: Implementing `Content-Security-Policy (CSP)`, `X-Frame-Options`, `HSTS`, and `Referrer-Policy`.

##  🛡️ Security Best Practices
- Always sanitize user input before rendering.
- Use CSP headers to prevent script injection.
- Validate and verify third-party dependencies.
- Secure API endpoints with authentication and CSRF protection.
- Restrict iframe embedding to prevent Clickjacking attacks.

Stay secure! 🔐😃


## 🚀 Getting Started  
1. Clone the repo:  
   ```bash
   git clone https://github.com/aneenajohn/Web-security-practises.git
   ```
2. Install dependencies: `pnpm install`
3. Run the project: `pnpm start`
