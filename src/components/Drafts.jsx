// Draft.jsx

import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';


function Drafts() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        subject: '',
        text: '',
        html: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axiosInstance.post('/mail/draft', formData);
            setStatusMessage(response.data.message);
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('Failed to save email to drafts');
        }
    };

    return (
        <div>
            <h1>Email Drafts</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="from">From:</label>
                <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} /><br /><br />
                
                <label htmlFor="to">To:</label>
                <input type="text" id="to" name="to" value={formData.to} onChange={handleChange} /><br /><br />
                
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} /><br /><br />
                
                <label htmlFor="text">Text:</label><br />
                <textarea id="text" name="text" value={formData.text} onChange={handleChange}></textarea><br /><br />
                
                <label htmlFor="html">HTML:</label><br />
                <textarea id="html" name="html" value={formData.html} onChange={handleChange}></textarea><br /><br />
                
                <button type="submit">Save to Drafts</button>
            </form>

            <div>{statusMessage}</div>
        </div>
    );
}

export default Drafts;
