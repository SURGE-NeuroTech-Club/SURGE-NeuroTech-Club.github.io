---
title: "Introduction to GitHub"
description: "A basic introduction to GitHub and how to effectively use it for version control and collaboration."
order: 2
image: /images/tutorials/intro-to-git.webp
---

## What is GitHub?

GitHub is a web-based platform for version control and collaboration that allows developers to host and manage their code. It uses Git, a distributed version control system, to track changes in source code during software development. GitHub provides a range of features including issue tracking, project management, and code review tools.

## Key Features of GitHub

- **Repositories**: Storage spaces where your project files and their revision history are kept.
- **Commits**: Saved changes to files in a repository, allowing you to track modifications.
- **Branches**: Separate lines of development within a repository, useful for working on different features simultaneously.
- **Pull Requests**: Proposals to merge changes from one branch to another, often used for code reviews and collaboration.
- **Issues**: Tools for tracking tasks, enhancements, and bugs in your projects.

## Getting Started with GitHub

**Before you get started here, make sure you already have a GitHub account set up.** If you don't, head over to [Getting Setup](/tutorials/getting-setup) for instructions!

### 1. Installing GitHub Desktop

1. Download GitHub Desktop from [desktop.github.com](https://desktop.github.com) if you don't already have it installed.
2. Install GitHub Desktop following the instructions for your operating system.

### 2. Cloning a Repository

To work on a project locally, clone the repository to your computer using GitHub Desktop.

1. Open GitHub Desktop.
2. Click **File** > **Clone repository**.
3. Select the repository you want to clone from the list, or enter its URL.
4. Choose the local path where you want to save it and click **Clone**.

*Explanation*: Cloning creates a local copy of the repository on your computer, allowing you to work offline and sync changes with the remote repository later.

### 3. Creating a Branch

99% of the time, you'll want to work on a branch. This effectively copies the code from `main` and lets you work on it separately. This is useful because:

- It avoids conflicts that can happen when multiple people work on the same code in the same branch.
- If you seriously break something and can't figure out how to fix it — you can just pull from main!

To create a branch:

1. Select the repository you want to branch from.
2. Click **Current Branch** > **New Branch**.
3. Name the branch (make sure to remember it!).
4. Select where you want the code to copy from (`main` is the default).
5. Click **Create Branch**.
6. Make sure the branch you just made is selected under **Current Branch**.

*Explanation*: Branches let you develop features, fix bugs, or safely experiment in isolation from the main codebase.

### 4. Making Changes and Committing

1. Open the cloned repository in VSCode and make changes to your files.
2. Go back to GitHub Desktop. You'll see your changes listed under **Changes**.
3. Add a summary and description for your commit in the **Summary** and **Description** fields.
4. Click **Commit to main** (or your branch name if you're on a different one).

*Explanation*: Committing saves your changes to the local repository, with a message describing what you did. This helps you track different versions of your code.

### 5. Pushing Changes to GitHub

1. After committing, click **Push origin** at the top of GitHub Desktop to upload your commits to GitHub.

*Explanation*: Pushing sends your committed changes to the remote repository on GitHub, making them available to others.

### 6. Creating a Pull Request

A pull request proposes merging changes from one branch to another. It's used for code review and collaboration before integrating changes into the main branch.

1. Navigate to your repository on GitHub.
2. Click on the **Pull requests** tab.
3. Click **New pull request**.
4. Select the branch you want to merge from and to.
5. Add a title and description.
6. Click **Create pull request**.

*Explanation*: Pull requests facilitate discussion about your changes before they're merged, ensuring code quality and collaboration.

## Conclusion

GitHub is a powerful platform for version control and collaboration. By creating repositories, making commits, and managing pull requests with GitHub Desktop, you can maintain a smooth and organized workflow.

Another great resource is the [NCIL Handbook's section on GitHub](https://neurocognitive-imaging-lab.gitbook.io/ncil-lab-handbook/4KX9BrRxON7flu3dJyRM/computer-stuff/data-management/github).
