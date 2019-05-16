import React from 'react';

let counter = 2;

const newComment = () => {
    counter++;
    return counter + '-y komentarz'
};

const MyButton = ({addComment}) =>
    <div>
        <button className='addButton' onClick={() => addComment(newComment())}>Add comment</button>
    </div>

export default MyButton;