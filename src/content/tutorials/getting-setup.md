---
title: "Getting Setup"
description: "Set up your computer with GitHub, VSCode, and a virtual environment so you can start working on Python projects."
order: 1
image: /images/tutorials/getting-setup.webp
---

## Step 1: Setting up Visual Studio Code

<details>
<summary>Click to learn more about VS Code!</summary>

> Visual Studio Code (often referred to as VS Code) is a free, open-source code editor developed by Microsoft. It's lightweight, yet powerful, and supports development in multiple programming languages such as Python, JavaScript, Java, C++, and many more. VS Code features include syntax highlighting, intelligent code completion (IntelliSense), code refactoring, and debugging tools. It also supports Git for version control, has a built-in terminal for command-line operations, and a rich ecosystem of extensions for enhancing its functionality. VS Code is available for Windows, macOS, and Linux.

</details>

### Installing VSCode & Extensions

First, download and install the latest version of [Visual Studio Code](https://code.visualstudio.com/). Make sure you download the correct version for your computer (Windows, Mac, Linux).

Follow the steps in the dialog windows, and once installed, download some essential extensions. On the left side of the window, select the extensions icon, then search for and install:

- [GitHub Copilot & GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
- Any others that seem interesting or useful :)

For more information on how to use VSCode, see the [resources at the bottom of this page](#additional-resources).

## Step 2: Setting up GitHub

<details>
<summary>Click to learn more about GitHub!</summary>

> GitHub is a web-based platform used for version control and collaboration. It allows multiple people to work on projects at once without overwriting each other's changes. GitHub is built on Git, a distributed version control system that tracks changes to files. With GitHub, you can manage and store revisions of projects, share your code with others, view and track changes, and even revert back to previous versions of your code.

</details>

### Making Your Account

Head over to [GitHub.com](https://github.com/login) and make an account if you don't already have one. Make sure you **use your Dalhousie email** when signing up — this lets you apply for the Student Developer Pack, which gives you access to AI tools like [GitHub Copilot](https://github.com/features/copilot)!

### Getting Student Perks

Once you've made and verified your account, head over to the [GitHub Student Developer Pack Application](https://education.github.com/discount_requests/application). Make sure *Student* is selected, then scroll down to the bottom of the page.

If you signed up with your Dalhousie email address, it should automatically detect Dalhousie University. Click `Select this School`, then `Continue`. If you don't see this, enter your Dalhousie email and verify it now. **Note:** Your browser may prompt you to share your location — this is required.

<img src="/images/tutorials/github_student_app.PNG" alt="GitHub Student Developer Pack application screenshot" style="max-width: 550px; margin: 1rem auto;" />

On the next page, you'll need to take a picture of your Dalhousie Student ID (using your laptop webcam is simplest) and upload it. **Note:** The website says you need an expiration date on your card, but since Dal student IDs don't have one, you should be fine. If you keep getting errors, ask one of the SURGE folks for help :)

<img src="/images/tutorials/academic-proof.PNG" alt="Academic proof upload screenshot" style="max-width: 550px; margin: 1rem auto;" />

> This step can be tricky — students sometimes get errors requiring 2FA (two-factor authentication). If that happens, add your phone number or another 2FA method to your GitHub account. If you're stuck, swing by the club!

After completing the GitHub setup, you'll receive an email in a few hours/days saying your application has been accepted. Once you receive it, open VSCode, find the GitHub Copilot extensions, and log in. Now you have access to a powerful AI assistant!

### Installing GitHub Desktop

Finally, [install GitHub Desktop](https://desktop.github.com/). This app provides a friendly UI to work on GitHub repositories without needing to use the command line. Install it and log into your GitHub account.

Once done, check out the [Introduction to GitHub](/tutorials/github-intro) tutorial, as well as the resources at the bottom of this page.

## Step 3: Setting up a Virtual Environment

<details>
<summary>Click to learn more about Virtual Environments & Miniforge!</summary>

> Virtual environments are isolated spaces for installing and managing packages and dependencies for specific projects without affecting the global Python environment. They offer isolation, precise dependency management, portability, and a cleaner global environment.

> Miniforge3 is a minimalistic distribution of Conda, an open-source package and environment management system widely used in data science and software development. It provides a lightweight, cross-platform tool that supports multiple CPU architectures.

</details>

### Installing Miniforge3

A virtual environment is an isolated workspace that allows projects to have their own dependencies and configurations, preventing conflicts between projects.

Head over to the [conda/miniforge website](https://github.com/conda-forge/miniforge) and scroll down to download the version that matches your machine (Windows, Mac, Linux, etc.).

Open the installer and follow the steps. It isn't necessary, but I recommend selecting **Install for all Users**. Once complete, you should be able to find "Miniforge Prompt" or "Miniforge3" on your desktop or by searching for it.

### Setting Up Your Environment

Make sure you have GitHub Desktop set up. In the GitHub Desktop app, click **Current Repository** > **Add** > **Clone Existing Repository**. Find the repository called `SURGE-NeuroTech-Club/virtual-environments`, or click **URL** and paste `SURGE-NeuroTech-Club/virtual-environments`. Before clicking **Clone**, copy the destination folder path — you'll need it soon.

Open your Miniforge3 Prompt and use `cd` to navigate to where you cloned the repository:

```bash
cd "path/to/virtual-environments"
```

Once you see something like `(base) C:\..\..\virtual-environments`, type:

```bash
mamba env create -f ncil.yml
```

This reads the list of packages in `ncil.yml` and installs them into a virtual environment. You may be prompted to answer Y/N at some points.

Once complete, verify it worked:

```bash
mamba activate ncil
```

You should see `(ncil)` at the start of your prompt instead of `(base)`.

### Using Your Virtual Environment in VSCode

Open VSCode and press `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac), then type: `Python: Select Interpreter`. From the drop-down, select **Python 3.12.x ('ncil')** — and you're ready to run Python scripts using your new virtual environment!

## Additional Resources

The [NCIL Lab Handbook](https://neurocognitive-imaging-lab.gitbook.io/ncil-lab-handbook/4KX9BrRxON7flu3dJyRM) has many great resources:
- [Data Science Tools](https://neurocognitive-imaging-lab.gitbook.io/ncil-lab-handbook/4KX9BrRxON7flu3dJyRM/computer-stuff/data-science-tools)

**VSCode:**
- [Introduction to VSCode](https://code.visualstudio.com/docs/introvideos/basics)

**GitHub:**
- [Introduction to GitHub](/tutorials/github-intro)
- [NCIL Introduction to GitHub](https://neurocognitive-imaging-lab.gitbook.io/ncil-lab-handbook/4KX9BrRxON7flu3dJyRM/computer-stuff/data-management/github)
