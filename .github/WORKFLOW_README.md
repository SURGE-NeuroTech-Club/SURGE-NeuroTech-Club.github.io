# Workflow Readme

1. deploy.yml:
   - Renders quarto website to `gh-pages` branch upon successful push to main 
2. build_preview.yml:
   - Renders a preview website of the pull request to `gh-pages/previews/[pull-request number]`s
     - Link to the preview in the pull request comments (may take a few minutes - refresh if you get 404 page)