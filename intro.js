$(function () {
    // LEARN THE DOM
    // document.body // body tag
    // document.getElementById("id"); // returns a Node
    // document.getElementsByTagName("div"); // returns NodeList of elements matching tag
    // document.querySelector(".className"); // return first Node that matches selector (css selector)
    // document.querySelectorAll(".className"); // returns NodeList of all elements that match selector
    // node.setAttribute(attributeName, value);
    // node.getAttribute(attributeName);
    // node.style // style object
        // node.style.display = "block";
    // node.className
    // node.innerHTML // sets the HTML of the node
    // node.textContent // sets text of the node
    // node.removeChild(child); // removes a child from the parent. returns the removed element
    // node.parentNode // returns the immediate parent of the node
    // node.firstChild
    // node.lastChild
    // node.children -- NodeList of all children
    // node.childNodes -- more advanced
    // node.addEventListener(type, listener, capture)
    // node.removeEventListener(type, listener, capture)

    // loop over NodeList
    // cache the list, cache the list length
    // var nodes = document.getElementsByTagName("div"), // cache the list
    //     total = nodes.length;

    // for (var i = 0; i < nodes.length; i++) {
    //     // do something with nodes
    // }
    // $(".selector").each();

    // CREATE A NEW ELEMENT
    // document.createElement("tagName"); // returns a node, not attached to anything
    // document.createElement("div"); // return div

    // PUT IN THE PAGE
    // parentNode.appendChild(node); // puts a node inside a parent node
    // var parentNode = document.getElementById("parentNode"),
    //     newNode = document.createElement("div");

    // newNode.innerHTML = "Hi";
    // parentNode.appendChild(newNode);

    // // parentNode.insertBefore(node, beforeNode); // put a node beside a node (sibling)
    // var parentNode = document.getElementById("parentNode"),
    //     siblingNode = document.getElementById("siblingNode",)
    //     newNode = document.createElement("div");

    // newNode.innerHTML = "Hi";
    // parentNode.insertBefore(newNode, siblingNode);


    // Javascript
    // create a new div
    // set the content of the div to something
    // put the div inside our body tag

    // // jQuery
    // // $("<tagName>") create a new element

    // modify an existing element
    // remove an element from the page
    // learn about the event model
    // add event listener

    // bubbling
    // event is fired at target
    // event bubbles to target parent, up to body

    // capturing
    // event is fired at body
    // event traverses down tree to target


    // event delegation - attaching a single event to a parent node that listens for events that bubble up from child nodes

    // repeating button
    // have a container
    // have a button
    // every button in that container, when clicked, creates a new button
});