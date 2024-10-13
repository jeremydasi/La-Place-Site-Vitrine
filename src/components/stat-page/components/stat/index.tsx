import React from 'react';

interface StatProps {
    label: string;
}

const Stat: React.FunctionComponent<StatProps> = ({ label }) => {
    return (
        <React.Fragment>
            <div>{label}</div>
        </React.Fragment>
    );
};

export default Stat;
