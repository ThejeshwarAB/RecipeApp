import React from 'react';

function Panel(props) {
    return (
        <div>
            <Link to='Home'>
                    ALL RECIPES
            </Link>
            <Link to='Recipe'>
                    MY RECIPES
            </Link>
            <Link to='Profile'>
                    PROFILE
            </Link>
        </div>
    );
}

export default Panel;