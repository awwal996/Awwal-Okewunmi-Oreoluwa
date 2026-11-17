import { content } from './content.js';
import { fetchAllContent } from './supabase.js';

/**
 * Main Application (CDN Version with Supabase)
 * Handles DOM rendering and user interactions
 */

class PortfolioApp {
  constructor() {
    this.app = document.getElementById('app');
    this.content = content; // Start with static content
    this.init();
  }

  async init() {
    try {
      // Show loading state
      this.app.innerHTML = '<div class="loading">Loading portfolio...</div>';
      
      // Try to load from Supabase
      const dynamicContent = await fetchAllContent();
      
      // Merge Supabase data with static content
      if (dynamicContent.projects) {
        this.content.projects = dynamicContent.projects;
      }
      if (dynamicContent.websites) {
        this.content.websites = dynamicContent.websites;
      }
      if (dynamicContent.testimonials) {
        this.content.testimonials = dynamicContent.testimonials;
      }
    } catch (error) {
      console.warn('Could not load from Supabase, using static content:', error);
    }
    
    // Always render, even if Supabase fails
    this.render();
  }

  render() {
    this.app.innerHTML = `
      ${this.renderHero()}
      ${this.renderAbout()}
      ${this.renderWork()}
      ${this.renderWebsites()}
      ${this.renderPromptLab()}
      ${this.renderWorkflow()}
      ${this.renderSkills()}
      ${this.renderTestimonials()}
      ${this.renderContact()}
    `;

    // Initialize interactive components after rendering
    this.initializePromptLab();
    this.initializeContactForm();
  }

  renderHero() {
    return `
      <section class="hero" id="hero">
        <div class="hero-content">
          <div class="hero-role">${this.content.role}</div>
          <h1>${this.content.name}</h1>
          <p class="hero-tagline">${this.content.tagline}</p>
          <div class="hero-buttons">
            <a href="#work" class="btn btn-primary">See my work</a>
            <a href="#contact" class="btn btn-secondary">Hire me</a>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <!-- 3D visualization space -->
        </div>
      </section>
    `;
  }

  renderAbout() {
    return `
      <section class="about" id="about">
        <span class="section-label">01 / ABOUT</span>
        <h2>About Me</h2>
        <p>${this.content.about}</p>
      </section>
    `;
  }

  renderWork() {
    const projectCards = this.content.projects.map(project => `
      <article class="project-card">
        <h3 class="project-title">${project.title}</h3>
        
        <div class="project-section">
          <div class="project-label">Problem</div>
          <p class="project-text">${project.problem}</p>
        </div>
        
        <div class="project-section">
          <div class="project-label">Approach</div>
          <p class="project-text">${project.approach}</p>
        </div>
        
        <div class="project-section">
          <div class="project-label">Result</div>
          <p class="project-text">${project.result}</p>
        </div>
        
        <div class="project-tools">
          ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
        </div>
        
        ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View project →</a>` : ''}
      </article>
    `).join('');

    return `
      <section id="work">
        <span class="section-label">02 / WORK</span>
        <h2>My Work</h2>
        <div class="projects-grid">
          ${projectCards}
        </div>
      </section>
    `;
  }

  renderWebsites() {
    // Hide section if no websites
    if (!this.content.websites || this.content.websites.length === 0) {
      return '';
    }

    const websiteCards = this.content.websites.map(site => `
      <article class="website-card">
        <div class="website-image-wrapper">
          <img 
            src="${site.image}" 
            alt="Screenshot of ${site.title} website"
            class="website-image"
            loading="lazy"
          />
        </div>
        <div class="website-content">
          <h3 class="website-title">${site.title}</h3>
          <p class="website-description">${site.description}</p>
          <div class="website-role">
            <span class="role-label">My Role:</span> ${site.role}
          </div>
          <div class="project-tools">
            ${site.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
          </div>
          ${site.url ? `
            <a href="${site.url}" class="btn btn-primary website-link" target="_blank" rel="noopener noreferrer">
              Visit site →
            </a>
          ` : ''}
        </div>
      </article>
    `).join('');

    return `
      <section id="websites">
        <span class="section-label">03 / WEBSITES</span>
        <h2>Websites I've Built</h2>
        <div class="websites-grid">
          ${websiteCards}
        </div>
      </section>
    `;
  }

  renderPromptLab() {
    return `
      <section id="prompt-lab">
        <span class="section-label">04 / PROMPT LAB</span>
        <h2>Prompt Lab</h2>
        <p>See how thoughtful prompt engineering transforms AI outputs from generic to precise.</p>
        
        <div class="prompt-lab-container">
          <div class="lab-controls">
            <div class="example-selector" role="tablist" aria-label="Select prompt example">
              ${this.content.promptLab.map((example, index) => `
                <button 
                  class="example-btn ${index === 0 ? 'active' : ''}" 
                  data-example="${index}"
                  role="tab"
                  aria-selected="${index === 0 ? 'true' : 'false'}"
                  aria-controls="comparison-${index}"
                  id="tab-${index}"
                >
                  ${example.title}
                </button>
              `).join('')}
            </div>
            
            <div class="lab-toggle">
              <button class="toggle-btn active" data-view="comparison" aria-pressed="true">
                Comparison
              </button>
              <button class="toggle-btn" data-view="before" aria-pressed="false">
                Before Only
              </button>
              <button class="toggle-btn" data-view="after" aria-pressed="false">
                After Only
              </button>
            </div>
          </div>
          
          <div id="prompt-comparison" role="tabpanel" aria-live="polite">
            <!-- Content loaded by JavaScript -->
          </div>
        </div>
      </section>
    `;
  }

  renderWorkflow() {
    const steps = this.content.workflow.map(step => `
      <div class="workflow-step">
        <div class="step-number" aria-hidden="true">${step.step}</div>
        <div class="step-content">
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      </div>
    `).join('');

    return `
      <section id="how-i-work">
        <span class="section-label">05 / HOW I WORK</span>
        <h2>How I Work</h2>
        <div class="workflow-steps">
          ${steps}
        </div>
      </section>
    `;
  }

  renderSkills() {
    const skillsList = this.content.skills.map(skill => `<li>${skill}</li>`).join('');
    const toolsList = this.content.tools.map(tool => `<li>${tool}</li>`).join('');

    return `
      <section id="skills">
        <span class="section-label">06 / SKILLS & TOOLS</span>
        <h2>Skills & Tools</h2>
        <div class="skills-container">
          <div>
            <h3>Skills</h3>
            <ul class="skills-list">
              ${skillsList}
            </ul>
          </div>
          <div>
            <h3>Tools</h3>
            <ul class="tools-list">
              ${toolsList}
            </ul>
          </div>
        </div>
      </section>
    `;
  }

  renderTestimonials() {
    if (!this.content.testimonials || this.content.testimonials.length === 0) {
      return '';
    }

    const testimonialCards = this.content.testimonials.map(testimonial => `
      <article class="testimonial-card">
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-title">${testimonial.title}</div>
      </article>
    `).join('');

    return `
      <section id="testimonials">
        <span class="section-label">07 / TESTIMONIALS</span>
        <h2>Testimonials</h2>
        <div class="testimonials-grid">
          ${testimonialCards}
        </div>
      </section>
    `;
  }

  renderContact() {
    const socialLinks = [];
    if (this.content.social.linkedin) {
      socialLinks.push(`<a href="${this.content.social.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>`);
    }
    if (this.content.social.github) {
      socialLinks.push(`<a href="${this.content.social.github}" class="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>`);
    }

    return `
      <section id="contact">
        <div class="contact-container">
          <span class="section-label">08 / CONTACT</span>
          <h2>Let's Work Together</h2>
          <p>Ready to improve your AI results? Get in touch.</p>
          
          <div class="contact-methods">
            <a href="mailto:${this.content.email}" class="btn btn-primary">
              Email me
            </a>
            ${this.content.whatsapp.map(wa => {
              const message = wa.message ? `?text=${encodeURIComponent(wa.message)}` : '';
              return `
                <a href="https://wa.me/${wa.formatted}${message}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  WhatsApp ${wa.number}
                </a>
              `;
            }).join('')}
          </div>

          ${socialLinks.length > 0 ? `
            <div class="social-links">
              ${socialLinks.join('')}
            </div>
          ` : ''}

          <div class="contact-form">
            <h3>Start a Project</h3>
            <form id="contact-form" aria-label="Contact form">
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="form-input" 
                  required 
                  aria-required="true"
                />
              </div>

              <div class="form-group">
                <label for="needs" class="form-label">What do you need?</label>
                <textarea 
                  id="needs" 
                  name="needs" 
                  class="form-textarea" 
                  required 
                  aria-required="true"
                  placeholder="Tell me about your project or challenge"
                ></textarea>
              </div>

              <div class="form-group">
                <label for="budget" class="form-label">Budget (optional)</label>
                <input 
                  type="text" 
                  id="budget" 
                  name="budget" 
                  class="form-input"
                  placeholder="e.g., $500-1000, Negotiable"
                />
                <div class="form-helper">This helps me suggest the right approach for your project</div>
              </div>

              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  initializePromptLab() {
    let currentExample = 0;
    let currentView = 'comparison';

    const updateComparison = () => {
      const example = this.content.promptLab[currentExample];
      const container = document.getElementById('prompt-comparison');

      let html = '';

      if (currentView === 'comparison' || currentView === 'before') {
        html += `
          <div class="comparison-box">
            <div class="comparison-label">Before: Weak Prompt</div>
            <div class="prompt-text">${this.escapeHtml(example.weak.prompt)}</div>
            <div class="comparison-label">Output</div>
            <div class="output-text">${this.escapeHtml(example.weak.output)}</div>
          </div>
        `;
      }

      if (currentView === 'comparison' || currentView === 'after') {
        html += `
          <div class="comparison-box improved">
            <div class="comparison-label">After: Improved Prompt</div>
            <div class="prompt-text">${this.escapeHtml(example.improved.prompt)}</div>
            <div class="comparison-label">Output</div>
            <div class="output-text">${this.escapeHtml(example.improved.output)}</div>
          </div>
        `;
      }

      container.innerHTML = html;
    };

    document.querySelectorAll('.example-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const exampleIndex = parseInt(e.target.dataset.example);
        
        document.querySelectorAll('.example-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        e.target.classList.add('active');
        e.target.setAttribute('aria-selected', 'true');
        
        currentExample = exampleIndex;
        updateComparison();
      });
    });

    document.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.target.dataset.view;
        
        document.querySelectorAll('.toggle-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        e.target.classList.add('active');
        e.target.setAttribute('aria-pressed', 'true');
        
        currentView = view;
        updateComparison();
      });
    });

    updateComparison();
  }

  initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const needs = document.getElementById('needs').value;
      const budget = document.getElementById('budget').value;
      
      const subject = encodeURIComponent(`Project Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\n\nProject Details:\n${needs}\n\n${budget ? `Budget: ${budget}\n\n` : ''}---\nSent from okewunmi-portfolio.com`
      );
      
      window.location.href = `mailto:${this.content.email}?subject=${subject}&body=${body}`;
    });
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
