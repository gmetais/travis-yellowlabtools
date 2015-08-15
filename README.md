# Setup a performance monitoring with Travis-CI and YellowLabTools

[Travis-CI](https://travis-ci.org/) is a **Continuous Integration platform** that automatically triggers your tests each time you push a commit to GitHub. It pops a virtual machine for your needs, compatible with many languages or tools.

[YellowLabTools](http://yellowlab.tools) is an audit tool that loads a page in PhantomJS and detects front-end **bad practices** and **performance issues**.


## First, do you know Yellow Lab Tools?

Use it with on the web instance ([http://yellowlab.tools](http://yellowlab.tools)) before running this automated version!


## How to

1. Log into GitHub and click the **Fork** button.
2. Sign in to [Travis-CI](https://travis-ci.org/) with your GitHub login
3. Click the "+" button to a new repository, then find and activate "travis-yellowlabtools". 
4. Edit `Gruntfile.js` according to [this documentation](https://github.com/gmetais/grunt-yellowlabtools#usage-examples). You should be able to edit directly on GitHub's web interface.
5. Commit changes directly to master (the text fields are optional)
6. Go back to Travis' home page and the commit should have triggered the first test. Wait a few seconds and you'll see it appear.
7. One the test is complete, you will receive an email from Travis. Adapt the test if needed, each commit will automatically trigger a new test.
8. Use [nightli.es](https://nightli.es/) to automatically trigger a GitHub commit once a day.


## Result

Travis-CI will send you one email each time a performance issue occurs, and one email the first time the issue is corrected. You will only get spammed on problems! In the email, follow the link to the logs to discover why it failed. The logs will provide urls of the results page, where you will find the classic yellowlab.tools web dashboard, with all the details.


## Set up your API key

YellowLabTools doesn't allow more than 50 runs per day from the same IP address. One run = one url tested. If you put several urls in the Gruntfile, this will be several runs. As Travis-CI probably re-uses the same IP addresses on their virtual machines, you will share these 50 runs with fellow users. That's not much.

**Ask for a YellowLabTools key by sending me a quick email** (my address is on my [GitHub profile](https://github.com/gmetais)). With this key, you'll be able to launch up to 50 runs per day, without sharing :)

Once you get the API key, open Travis-CI to the last run and click on "Settings". Insert your key in an Environment Variable called `API_KEY`. The next run will automatically use the key.



## Note about using Travis-CI and GitHub for a not-so-open-source projects

This is not the basic usage of Travis-CI, which should be used for Continuous Integration on open-source software, not for monitoring proprietary websites. However, I've made this Travis job as light as possible: it's not GPU intensive and all of the hard work is done on my YLT's server. I also sincerely hope that I can bring new users to discover the awesomeness of Travis-CI.

It's pretty much the same with GitHub.

My plan for the future is to offer this service directly **inside** YellowLabTools.


## Install this on your own server

Travis-CI is handy, because it automatically sends emails when a test fails. But if you know a tool that can do that for you, you can absolutely use your own machine to host this project. Launching a test is pretty simple and only needs one command: `grunt yellowlabtools`.

