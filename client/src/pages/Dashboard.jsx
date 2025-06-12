import { Button } from '../components/ui/button'
import { useState } from 'react';
import api from "../api/axios"

const Dashboard = () => {

    const handleClick = async () => {
        try {
            const response = await api.get("user/")
            console.log("Response data:", response.data);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    }

    return (
        <div>
            Dashboard
            <Button onClick={handleClick}>Click Me</Button>
        </div>
    )
}

export default Dashboard