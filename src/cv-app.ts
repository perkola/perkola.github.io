import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

type ThemeMode = "light" | "dark" | "system";

interface Position {
  title: string;
  period: string;
  description: string[];
  skills?: string[];
}

interface Experience {
  company: string;
  positions: Position[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

@customElement("cv-app")
export class CvApp extends LitElement {
  @state()
  private themeMode: ThemeMode = "system";

  // Personal info
  private fullName = "William Perkola";
  private jobTitle = "Product owner & Software Engineer";
  private email = "hej@perko.la";
  private location = "Stockholm, Sweden";
  private linkedin = "linkedin.com/in/perkola";
  private github = "github.com/perkola";

  private summary = `Passionate software developer with expertise in modern web technologies.
    Experienced in building scalable applications and leading technical projects.`;

  private experience: Experience[] = [
    {
      company: "Tech Company Inc.",
      positions: [
        {
          title: "Senior Software Developer",
          period: "2021 - Present",
          description: [
            "Managing an inner sourced design system at OSTTRA through a tight collaboration with product teams and the UX department.",
            "Engaging stakeholders, prioritizing work, managing quality and maintaining source code.",
            "Currently helping improve adoption across 20+ product teams at OSTTRA.",
          ],
          skills: [
            "Project management",
            "React",
            "TypeScript",
            "Storybook",
            "Figma",
          ],
        },
        {
          title: "Software Engineer",
          period: "2017 - 2023",
          description: [
            "Full-stack role in a highly autonomous and experienced team, building a collateral management system and a settlement service using micro services on a private cloud infrastructure.",
          ],
          skills: [
            "Go",
            "Python",
            "Clojure",
            "ClojureScript",
            "Docker",
            "Kubernetes",
          ],
        },
      ],
    },
    {
      company: "Freelance",
      positions: [
        {
          title: "Software Consultant",
          period: "2015 - 2021",
          description: [
            "Working with mainly non-profit organizations designing, building and maintaining websites and digital payment systems.",
          ],
          skills: ["PHP", "SQL", "JavaScript"],
        },
      ],
    },
    {
      company: "Scania Group",
      positions: [
        {
          title: "Master Thesis Student",
          period: "2017 - 2017",
          description: [
            "Using machine learning, at the C-ITS (Cooperative Intelligent Transport System) R&D department, to classify short-lived distributed hazard warning messages to road vehicles.",
          ],
          skills: ["Python", "Machine Learning"],
        },
        {
          title: "Intern",
          period: "2016 - 2017",
          description: [
            "A year long internship programme at the R&D department for master's students.",
          ],
        },
        {
          title: "Mobile Developer",
          period: "2016 - 2016",
          description: [
            "Building a prototype for a map-based mobile application in a research project at the R&D department.",
          ],
          skills: ["Android", "React Native", "C#", "Microsoft Azure"],
        },
      ],
    },
    {
      company: "Academic Work",
      positions: [
        {
          title: "Software Consultant",
          period: "2014 - 2015",
          description: [
            "Part time consultancy at an advertising company. Responsibilities consisted of maintaining multiple websites while developing a job search engine using the API of the Swedish Public Employment Service (Arbetsförmedlningen).",
          ],
          skills: ["PHP", "JavaScript", "HTML", "CSS"],
        },
      ],
    },
  ];

  private education: Education[] = [
    {
      degree: "Master of Engineering (M.Eng.), Computer Science",
      institution: "KTH Royal Institute of Technology",
      period: "2015 - 2017",
    },
    {
      degree: "Bachelor of Engineering (B.Eng.), Computer Science",
      institution: "KTH Royal Institute of Technology",
      period: "2012 - 2015",
    },
  ];

  // Render in light DOM to use Tailwind classes
  createRenderRoot(): HTMLElement | DocumentFragment {
    return this as HTMLElement;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadThemePreference();
    this.applyTheme();

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (this.themeMode === "system") {
          this.applyTheme();
        }
      });
  }

  private loadThemePreference() {
    const saved = localStorage.getItem("theme-mode") as ThemeMode;
    if (saved && ["light", "dark", "system"].includes(saved)) {
      this.themeMode = saved;
    }
  }

  private saveThemePreference() {
    localStorage.setItem("theme-mode", this.themeMode);
  }

  private applyTheme() {
    const root = document.documentElement;
    const isDark =
      this.themeMode === "dark" ||
      (this.themeMode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  private cycleTheme = () => {
    const modes: ThemeMode[] = ["light", "system", "dark"];
    const currentIndex = modes.indexOf(this.themeMode);
    this.themeMode = modes[(currentIndex + 1) % modes.length];
    this.saveThemePreference();
    this.applyTheme();
    this.requestUpdate();
  };

  render() {
    return html`
      <div
        class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-200"
      >
        <div
          class="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
        >
          <!-- Header -->
          ${this.renderHeader()}

          <!-- Summary -->
          ${this.renderSummary()}

          <!-- Experience -->
          ${this.renderExperience()}

          <!-- Education -->
          ${this.renderEducation()}
        </div>
      </div>
    `;
  }

  private renderHeader() {
    const themeIcons = {
      light: "☀️",
      dark: "🌙",
      system: "💻",
    };

    return html`
      <div
        class="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white p-8 relative"
      >
        <!-- Theme toggle button -->
        <button
          @click=${this.cycleTheme}
          class="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
          title="Toggle theme: ${this.themeMode}"
          aria-label="Toggle theme"
        >
          <span class="text-2xl">${themeIcons[this.themeMode]}</span>
        </button>

        <h1 class="text-4xl font-bold mb-2">${this.fullName}</h1>
        <p class="text-xl mb-4 text-blue-100 dark:text-blue-200">
          ${this.jobTitle}
        </p>
        <div class="flex flex-wrap gap-4 text-sm">
          <div class="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:${this.email}" class="hover:underline"
              >${this.email}</a
            >
          </div>
          <div class="flex items-center gap-2">
            <span>📍</span>
            <span>${this.location}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>💼</span>
            <a
              href="https://${this.linkedin}"
              target="_blank"
              class="hover:underline"
              >${this.linkedin}</a
            >
          </div>
          <div class="flex items-center gap-2">
            <span>🔗</span>
            <a
              href="https://${this.github}"
              target="_blank"
              class="hover:underline"
              >${this.github}</a
            >
          </div>
        </div>
      </div>
    `;
  }

  private renderSummary() {
    return html`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Summary
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          ${this.summary}
        </p>
      </div>
    `;
  }

  private renderExperience() {
    return html`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Experience
        </h2>
        <div class="space-y-8">
          ${this.experience.map(
            (exp) => html`
              <div class="mb-8 last:mb-0">
                <!-- Company name -->
                <h3
                  class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4"
                >
                  ${exp.company}
                </h3>

                <!-- Positions with timeline -->
                <div class="relative pl-10">
                  <!-- Vertical line for all positions -->
                  ${exp.positions.length > 1
                    ? html`
                        <div
                          class="absolute w-0.5 bg-blue-300 dark:bg-blue-600"
                          style="left: 5px; top: 8px; height: calc(100% - 1rem);"
                        ></div>
                      `
                    : ""}
                  ${exp.positions.map(
                    (position, index) => html`
                      <div
                        class="relative ${index < exp.positions.length - 1
                          ? "mb-8"
                          : ""}"
                      >
                        <!-- Dot -->
                        <div
                          class="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full z-10"
                          style="left: -40px; top: 2px;"
                        ></div>

                        <!-- Position content -->
                        <div>
                          <div class="flex justify-between items-start mb-2">
                            <h4
                              class="text-lg font-semibold text-gray-800 dark:text-gray-200"
                            >
                              ${position.title}
                            </h4>
                            <span
                              class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4"
                              >${position.period}</span
                            >
                          </div>
                          <ul
                            class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-3"
                          >
                            ${position.description.map(
                              (item) => html`<li>${item}</li>`
                            )}
                          </ul>
                          ${position.skills
                            ? html`
                                <div class="flex flex-wrap gap-1.5 mt-3">
                                  ${position.skills.map(
                                    (skill) => html`
                                      <span
                                        class="px-2 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                                      >
                                        ${skill}
                                      </span>
                                    `
                                  )}
                                </div>
                              `
                            : ""}
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  private renderEducation() {
    return html`
      <div class="p-8 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Education
        </h2>
        <div class="space-y-4">
          ${this.education.map(
            (edu) => html`
              <div>
                <div class="flex justify-between items-start mb-1">
                  <div>
                    <h3
                      class="text-xl font-semibold text-gray-800 dark:text-gray-200"
                    >
                      ${edu.degree}
                    </h3>
                    <p class="text-lg text-blue-600 dark:text-blue-400">
                      ${edu.institution}
                    </p>
                  </div>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4"
                    >${edu.period}</span
                  >
                </div>
                ${edu.details
                  ? html`<p class="text-gray-700 dark:text-gray-300">
                      ${edu.details}
                    </p>`
                  : ""}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-app": CvApp;
  }
}
