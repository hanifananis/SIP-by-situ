import React, { createContext, useContext, useState } from 'react';

export const ForumContext = createContext();
export const CommentContext = createContext();
export const ReplyContext = createContext();

export const ForumProvider = ({ children }) => {
    const [forum, setForum] = useState([]);
    const [comments, setComments] = useState([]);
    const [replies, setReplies] = useState([]);

    const updateForumList = (newForum) => {
        setForum(newForum);
    }

    const updateCommentList = (newComments) => {
        setComments(newComments);
    }

    const updateReplyList = (newReplies) => {
        setReplies(newReplies);
    }

    return (
        <ForumContext.Provider value={{ forum, updateForumList }}>
            <CommentContext.Provider value={{ comments, updateCommentList }}>
                <ReplyContext.Provider value={{ replies, updateReplyList }}>
                    {children}
                </ReplyContext.Provider>
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

export const useReplyContext = () => {
    return useContext(ReplyContext);
};