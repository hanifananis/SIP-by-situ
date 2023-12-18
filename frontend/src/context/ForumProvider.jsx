// ForumContext.js
import React, { createContext, useContext, useState } from 'react';

export const ForumContext = createContext();
export const CommentContext = createContext();


export const ForumProvider = ({ children }) => {
    const [forum, setForum] = useState([]);
    const [comments, setComments] = useState([]);

    const updateForumList = (newForum) => {
        setForum(newForum);
    }

    const updateCommentList = (newComments) => {
        setComments(newComments);
    }

    return (
        <ForumContext.Provider value={{ forum, updateForumList }}>
            <CommentContext.Provider value={{ comments, updateCommentList }}>
                {children}
            </CommentContext.Provider>
        </ForumContext.Provider>
    );
};

export const useForumContext = () => {
    return useContext(ForumContext);
};

export const useCommentContext = () => {
    return useContext(CommentContext);
};