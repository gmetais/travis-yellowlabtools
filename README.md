# Setup a performance monitoring in a few minutes with Travis-CI and YellowLabTools

[Travis-CI](https://travis-ci.org/) is a Continuous Integration platform that automatically triggers your tests each time you push a commit to GitHub. It pops a virtual machine for your needs and you can do anything you want on it.

[YellowLabTools](http://yellowlab.tools) is an audit tool that loads a page in PhantomJS and detects front-end **bad practices** and **performance issues**.


## How to

1. Log into GitHub and click the **Fork** button.
2. Ask for a YellowLabTools key by sending me a quick email (it's on my GitHub profile). With this key, you'll be able to launch up to 50 runs per day.
3. Edit `Gruntfile.js` according to [this documentation](https://github.com/gmetais/grunt-yellowlabtools#usage-examples). You should be able to edit directly on GitHub's web interface.
4. Commit changes directly to master (the first of the two commit message fields is required, write anything)
5. Sign in to [Travis-CI](https://travis-ci.org/) with your GitHub login
6. Add a new repository and choose "travis-yellowlabtools". This will launch the first test. Adapt if needed, each commit will automatically trigger a new test.
7. Use [nightli.es](https://nightli.es/) to automatically trigger a GitHub commit once a day.


## Note about using Travis-CI and GitHub for a not-so-open-source projects

This is not the basic usage of Travis-CI, which should be used for Continuous Integration, not for monitoring. I'm not very proud of what I'm doing. However, I've made this Travis job as light as possible: it's not GPU intensive and all of the hard work is done on my YLT's server. I also sincerely hope that I can bring new users to discover the awesomeness of Travis-CI. 

It's pretty much the same with GitHub.


