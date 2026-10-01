---
title: Contact
permalink: /contact/
eyebrow: Get in touch
lede: Suggestions, corrections and questions about the articles are always welcome.
---

<div class="contact-card">
  <p class="contact-label">Email</p>
  <p class="contact-value"><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
  {% if site.linkedin != "" %}
  <p class="contact-label">LinkedIn</p>
  <p class="contact-value"><a href="{{ site.linkedin }}" rel="noopener">{{ site.linkedin | remove: "https://" | remove: "www." }}</a></p>
  {% endif %}
</div>

## Before you write

- **Topic suggestions are welcome.** If there's a legal question you think others would benefit from, let me know.
- **Spotted an error or an outdated law?** Please tell me and I'll correct it.
- **Please don't send details of your own case.** I can't give legal advice by email or through this website, and sending confidential details here doesn't create an advocate–client relationship.
