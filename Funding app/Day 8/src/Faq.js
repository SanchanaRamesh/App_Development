import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const FAQ = () => {
    // Define an array of FAQ items (questions and answers)
    const faqItems = [
        {
            question: 'How do I know the disaster details?',
            answer: 'You can know by checking the admin page about the details of disaster happend and funds needed to be collected.'
        },
        {
            question: 'Can we donate foods and clothes?',
            answer: 'So far only money has been collected if you are interested in giving other neccesary items contact the toll free number'
            
        },
        {
            question:'I get an error when I try to set up my account. What should I do?',
            answer:'Visit the Login.gov Help Center or call 1-844-875-6446.'
        },
        {
            question:'What is a secure access code and why do I need one?',
            answer:'A secure access code is a system-generated password. It consists of numbers or letters that verifies the user who is requesting access. You can only use it once.'
        }
        // Add more FAQ items as needed
    ];

    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div className='faq-main'>
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default FAQ;