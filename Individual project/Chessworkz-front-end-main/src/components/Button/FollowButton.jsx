import React, { useState } from 'react';

function FollowButton({ courseId }) {
    const [response, setResponse] = useState(null);

    const handleClick = async () => {
        const data = JSON.stringify({ "email": sessionStorage.getItem("email"), "courseId": courseId });
        try {
            const res = await fetch('https://follow-service.azurewebsites.net/follow/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data,
            });
            const json = await res.text();
            setResponse(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Follow</button>
            {response && <div>{JSON.stringify(response)}</div>}
        </div>
    );
}

export default FollowButton;