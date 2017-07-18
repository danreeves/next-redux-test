import React from 'react';
import { connect } from 'react-redux';

export default connect(state => state)(({ category, children }) => {
    console.log(category);
    return (
        <div>
            <main className="container">
                <h1>
                    Category is: {category.label}
                </h1>
                {children}
            </main>
            <style jsx>{`
                .container {
                    margin: 0 auto;
                    padding: 15px;
                    max-width: 800px;
                    font-size: 1.2em;
                    text-align: center;
                }
            `}</style>
        </div>
    );
});
