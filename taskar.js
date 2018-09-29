// ==UserScript==
// @name         taskar
// @namespace    https://github.com/turnon/taskar
// @version      0.0.1
// @description  add table of content in jira task browse page
// @author       block24block@gmail.com
// @match        http://task.reocar.com:8080/browse/*
// @grant        none
// @require https://greasyfork.org/scripts/372188-ateles/code/ateles.js?version=631434
// ==/UserScript==
Ateles(['dropdown', 'anchor'], (dd, anchor) => {
    let as = anchor({
        selector: _ => $('#description-val b'),
        text: b => b.innerText
    })

    dd(as, {
        direction: 'left_down',
        afterbegin: document.body,
        style: {
            id: 'position: fixed; top: 85px; right: -42px; width: 100px; z-index: 99999;'
        }
    })
})