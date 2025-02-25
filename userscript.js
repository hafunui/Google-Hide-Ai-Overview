// ==UserScript==
// @name         Google Remove AI Overview
// @namespace    http://tampermonkey.net/
// @version      2025-02-25
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Find the h1 tag with the text "AI Overview"
    const aiOverviewH1 = $('h1').filter(function() {
        return $(this).text().trim() === 'AI Overview';
    });

    if (aiOverviewH1.length > 0) {
        let parent = aiOverviewH1.parent();

        // Traverse up the DOM until we find the parent whose first child is an h1 with text "Search Results"
        while (parent.length > 0) {
            const firstChild = parent.children().first();

            if (firstChild.is('h1') && firstChild.text().trim() === 'Search Results') {
                // Remove the parent element
                parent.remove();
                break;
            }

            // Move up to the next parent
            parent = parent.parent();
        }
    }
})();
