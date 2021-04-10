import React from 'react';

function ProfileForm(props) {
    return (
        <div>
            <form className="FormCss">
                <input type="text" placeholder="Enter your username" />
                <input type="password" placeholder="Enter your password" />
                <input type="submit" value="Edit" />
                <input type='submit' value="Delete account" />
            </form>
        </div>
    );
}

export default ProfileForm;