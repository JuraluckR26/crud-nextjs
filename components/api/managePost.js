import React from "react";


    const posts = [
        {id: 2, content: "I Love Cats", time: 'Yesterday 11:30'},
        {id: 1, content: "Have a good day everyone :D", time: '11 June 17:30'}
    ]

    function addPost(post) {
        posts.push({id: posts.length+1, content: post, time: 'Now'})
        console.log(posts)
        return posts
    }

    function editPost(id, updatedContent) {
        const index = posts.findIndex(obj => {
            return obj.id === id;
        });
        posts[index].content = updatedContent;
        console.log(posts)
        return posts
    }

    function removePost(id) {
        const index = posts.findIndex(obj => {
            return obj.id === id;
        });
        posts.splice(index, 1);
        return posts
    }


    function showPosts() {
        const sortPosts = posts.sort((a, b) => b.id - a.id)
        return sortPosts
    }


export default {addPost, editPost, removePost, showPosts}
