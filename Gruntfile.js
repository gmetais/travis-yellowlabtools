/*jslint node: true */

'use strict';

module.exports = function(grunt) {

    // Load all grunt modules
    require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        

        // Configuration you can adapt to your needs
        yellowlabtools: {

            twitterOnDesktop: {
                urls: [
                    'https://twitter.com',
                    'https://twitter.com/tos'
                ],
                failConditions: [
                    'fail if at least one url has a global score < 90/100'
                ],
                options: {
                    device: 'desktop' // 'desktop', 'tablet' or 'phone'
                }
            },

            // Same as above, but simulating a mobile
            twitterOnMobile: {
                urls: [
                    'https://twitter.com',
                    'https://twitter.com/tos'
                ],
                failConditions: [
                    'fail if at least one url has a global score < 90/100'
                ],
                options: {
                    device: 'phone' // 'desktop', 'tablet' or 'phone'
                }
            },


            // Global options, for all runs
            options: {
                key: '<replace with your YLT API key>', // More details in the README file
                locally: false // Do not change!
            }
        }


    });
};
