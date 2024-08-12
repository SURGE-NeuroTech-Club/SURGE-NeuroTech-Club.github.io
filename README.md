# [SURGE-NeuroTech-Club.github.io](https://surge-neurotech-club.github.io/)

Website repository for SURGE/Dalhousie NeuroTech Club.

### How to contribute

This website is build from scratch using [Quarto](https://quarto.org/).
Feel free to create a branch and when you're ready, a pull request!

<details>
<summary>Useful Tips for Contributing</summary>
<br>
If you're new to Quarto and making websites, check out the references below! Generally, the only files you'll need to edit are the .qmd files and maybe the .scss files (theme) - and the _quarto.yml occasionally.
Once you've made edits to any .qmd file you can type `quarto render` in the terminal to see how the changes will look once the site is built. There is also a workflow that renders the entire website once you make a pull request if you'd like. <br>

- index.qmd is the main page
- _quarto.yml is the configuration file for the website (layout, top-level theme (SCSS), etc.)
- /docs contains sub-folders and .qmd files for all sub-pages
</details>


##### Helpful Quarto References
- https://quarto.org/docs/websites/
- https://quarto.org/docs/reference/projects/websites.html
- https://quarto.org/docs/gallery/#websites



### Workflows

`deploy.yml`: Builds the website on pushes to main and then deploys the website to the gh-pages branch where it becomes live

`build_previews.yml`: Build the website on pull requests to preview site changes before merging to main
Click link to the preview in the pull request page!