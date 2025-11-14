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

          <!-- Experience -->
          ${this.renderExperience()}

          <!-- Education -->
          ${this.renderEducation()}
        </div>

        <!-- Footer -->
        ${this.renderFooter()}
      </div>
    `;
  }

  private getIcon(name: string) {
    const icons: Record<string, any> = {
      sun: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>`,
      moon: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/></svg>`,
      computer: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/></svg>`,
      envelope: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`,
      mapPin: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>`,
      briefcase: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/></svg>`,
      codeBracket: html`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>`,
    };
    return icons[name];
  }

  private renderHeader() {
    const themeIcons = {
      light: this.getIcon("sun"),
      dark: this.getIcon("moon"),
      system: this.getIcon("computer"),
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
          ${themeIcons[this.themeMode]}
        </button>

        <h1 class="text-4xl font-bold mb-2">${this.fullName}</h1>
        <p class="text-xl mb-4 text-blue-100 dark:text-blue-200">
          ${this.jobTitle}
        </p>
        <div class="flex flex-wrap gap-4 text-sm">
          <div class="flex items-center gap-2">
            ${this.getIcon("envelope")}
            <a href="mailto:${this.email}" class="hover:underline"
              >${this.email}</a
            >
          </div>
          <div class="flex items-center gap-2">
            ${this.getIcon("mapPin")}
            <span>${this.location}</span>
          </div>
          <div class="flex items-center gap-2">
            ${this.getIcon("briefcase")}
            <a
              href="https://${this.linkedin}"
              target="_blank"
              class="hover:underline"
              >${this.linkedin}</a
            >
          </div>
          <div class="flex items-center gap-2">
            ${this.getIcon("codeBracket")}
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

  private renderFooter() {
    const currentYear = new Date().getFullYear();

    return html`
      <footer class="mt-8 py-6 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p class="mb-2">© ${currentYear} ${this.fullName}. All rights reserved.</p>
        <p>
          Built with
          <a href="https://vitejs.dev/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Vite</a>,
          <a href="https://lit.dev/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Lit</a> and
          <a href="https://tailwindcss.com/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Tailwind</a> using
          <a href="https://claude.ai/code" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Claude Code</a>
        </p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-app": CvApp;
  }
}
