<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="20%" alt="POMO-FOCUS-logo">
</p>
<p align="center">
    <h1 align="center">POMO-FOCUS</h1>
</p>
<p align="center">
    <em><code>A minimal Pomodoro timer to enhance your focus and productivity.</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/GCarido/pomo-focus?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/GCarido/pomo-focus?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/GCarido/pomo-focus?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/GCarido/pomo-focus?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

#####  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)
    - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

`POMO-FOCUS` is a simple and intuitive Pomodoro timer application designed to help users stay productive and focused during their work sessions. It integrates task management and timer functionalities to structure your workflow into manageable intervals (Pomodoros), with breaks in between, boosting productivity while preventing burnout.

---

##  Features

- **Customizable Timer**: Set your own work and break durations to suit your working style.
- **Task Management**: Add, edit, and delete tasks as you track your progress over multiple Pomodoro sessions.
- **Light/Dark Mode**: Toggle between light and dark themes for a comfortable user experience in any lighting.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.


---

##  Repository Structure

```sh
└── pomo-focus/
    ├── README.md
    ├── app
    │   ├── about
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── socials
    │   └── template.tsx
    ├── components
    │   ├── EditTask.tsx
    │   ├── FormContent.tsx
    │   ├── FormTasks.tsx
    │   ├── Header.tsx
    │   ├── Logo.tsx
    │   ├── Navbar.tsx
    │   ├── PomoCard.tsx
    │   ├── Tasks.tsx
    │   ├── Timer.tsx
    │   ├── provider
    │   ├── toggle
    │   └── ui
    ├── components.json
    ├── lib
    │   └── utils.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   └── sounds
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## Modules

<details closed><summary>Configuration Files</summary>

| File | Summary |
| --- | --- |
| [postcss.config.mjs](https://github.com/GCarido/pomo-focus/blob/main/postcss.config.mjs) | Configuration file for PostCSS, used to process CSS and apply plugins. |
| [tailwind.config.ts](https://github.com/GCarido/pomo-focus/blob/main/tailwind.config.ts) | Configuration file for Tailwind CSS, defining custom themes and settings. |
| [components.json](https://github.com/GCarido/pomo-focus/blob/main/components.json) | JSON file outlining the structure and metadata of components used in the app. |
| [tsconfig.json](https://github.com/GCarido/pomo-focus/blob/main/tsconfig.json) | TypeScript configuration file for setting compiler options and project settings. |
| [package.json](https://github.com/GCarido/pomo-focus/blob/main/package.json) | NPM package configuration file listing dependencies and project metadata. |
| [next.config.mjs](https://github.com/GCarido/pomo-focus/blob/main/next.config.mjs) | Configuration file for Next.js, managing settings and plugins for the framework. |
| [package-lock.json](https://github.com/GCarido/pomo-focus/blob/main/package-lock.json) | Lock file ensuring consistent installation of dependencies across environments. |

</details>


<details closed><summary>components</summary>

| File | Summary |
| --- | --- |
| [Tasks.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/Tasks.tsx) | Displays the list of tasks for the current session, allowing users to manage them. |
| [Header.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/Header.tsx) | Renders the header, typically containing navigation and branding elements. |
| [Logo.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/Logo.tsx) | Component to display the Pomo-Focus logo. |
| [FormContent.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/FormContent.tsx) | Handles form content related to tasks and inputs in the app. |
| [EditTask.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/EditTask.tsx) | Provides functionality for editing existing tasks. |
| [PomoCard.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/PomoCard.tsx) | Displays individual Pomodoro task cards. |
| [Timer.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/Timer.tsx) | Implements the Pomodoro timer functionality for managing work sessions. |
| [FormTasks.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/FormTasks.tsx) | Manages the task input form for adding new tasks to the session. |
| [Navbar.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/Navbar.tsx) | Renders the navigation bar for easy access to different sections of the app. |

</details>


<details closed><summary>components.toggle</summary>

| File | Summary |
| --- | --- |
| [ThemeToggler.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/toggle/ThemeToggler.tsx) | Provides a toggle button to switch between light and dark themes. |

</details>

<details closed><summary>components.provider</summary>

| File | Summary |
| --- | --- |
| [ThemeProvider.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/provider/ThemeProvider.tsx) | Manages the theme settings for the application, enabling light/dark mode toggling. |

</details>

<details closed><summary>components.ui</summary>

| File | Summary |
| --- | --- |
| [tabs.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/ui/tabs.tsx) | Implements a tabbed interface for switching between different sections of the app. |
| [card.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/ui/card.tsx) | Displays information in a clean, card-like format. |
| [input.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/ui/input.tsx) | Provides styled input fields for user interaction. |
| [button.tsx](https://github.com/GCarido/pomo-focus/blob/main/components/ui/button.tsx) | Renders customizable buttons used throughout the app. |

</details>

<details closed><summary>lib</summary>

| File | Summary |
| --- | --- |
| [utils.ts](https://github.com/GCarido/pomo-focus/blob/main/lib/utils.ts) | Contains utility functions and helper methods used across the app. |

</details>

<details closed><summary>app</summary>

| File | Summary |
| --- | --- |
| [template.tsx](https://github.com/GCarido/pomo-focus/blob/main/app/template.tsx) | Defines the base template structure for rendering the app. |
| [globals.css](https://github.com/GCarido/pomo-focus/blob/main/app/globals.css) | Global CSS styles applied throughout the application. |
| [page.tsx](https://github.com/GCarido/pomo-focus/blob/main/app/page.tsx) | The main page layout of the app, defining its core structure. |
| [layout.tsx](https://github.com/GCarido/pomo-focus/blob/main/app/layout.tsx) | Defines the overall layout components for the app, managing page structure and navigation. |

</details>

<details closed><summary>app.socials</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/GCarido/pomo-focus/blob/main/app/socials/page.tsx) | Displays links to the project's social media pages. |

</details>

<details closed><summary>app.about</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/GCarido/pomo-focus/blob/main/app/about/page.tsx) | Provides information about the app and its purpose. |

</details>

---

##  Getting Started

###  Prerequisites

**TypeScript**: `version 5.6.2`

###  Installation

Build the project from source:

1. Clone the pomo-focus repository:
```sh
❯ git clone https://github.com/GCarido/pomo-focus
```

2. Navigate to the project directory:
```sh
❯ cd pomo-focus
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ npm run build && node dist/main.js
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/GCarido/pomo-focus/issues)**: Submit bugs found or log feature requests for the `pomo-focus` project.
- **[Submit Pull Requests](https://github.com/GCarido/pomo-focus/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/GCarido/pomo-focus/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/GCarido/pomo-focus
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/GCarido/pomo-focus/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=GCarido/pomo-focus">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [LICENSE](LICENSE) file.

---

##  Acknowledgments

This project was a personal hobby, built with the help of documentation, online tutorials, and AI assistance. Special thanks to:

- The creators and maintainers of **[TypeScript](https://www.typescriptlang.org/)**, **[React](https://reactjs.org/)**, and **[Next.js](https://nextjs.org/)** for providing comprehensive documentation.
- The open-source community for their shared knowledge and resources.
- AI tools like **ChatGPT** and **GitHub Copilot** for assisting with explanations and problem-solving.

---
