# Portfolio for Real-Time Chat Application
Project Name: ChatterBox
Team Members
1- Project manager/ front-End Engineer
Deiaa alZayat

2- Back-End Engineer
Mohamed Samir


# Description of the Project:
ChatterBox is a real-time chat application where users can join various chat rooms and exchange messages instantly. 
This project leverages WebSocket technology to enable seamless and real-time communication. Users can authenticate themselves, store chat history, and enjoy a responsive interface. 

Additional features include profile picture uploads and bios, as well as the ability to view other users' bios in the same chatrooms.

# Objectives and Goals
Understand and implement WebSocket communication.
Build a full-stack application using React for the frontend and Node.js for the backend.
Implement authentication and authorization.
Design a responsive and user-friendly interface.
Manage and store user data and chat history efficiently.
Explore optional advanced features like profile picture uploads and user bios.

# Technologies Used:
Frontend: React, HTML, CSS
Backend: Node.js, Express
WebSocket: Socket.IO
Database: MongoDB (for storing user data and chat history)
Authentication: JWT (JSON Web Tokens)
Storage: Cloudinary (for profile picture uploads)

# Challenges Already Identified:
Ensuring real-time performance with WebSocket.
Handling user authentication securely.
Managing state across different components in React.
Storing and retrieving chat history efficiently.
Making the application fully responsive on various devices.

# Pitch Video:
https://drive.google.com/file/d/1SMnGE3dbBoMPAhsfI5bqE7qS0sNpY838/view?usp=sharing

# Github Url
https://github.com/Deiaa-alzyat/ChatterBox

Steps to Start the Application:
Starting MongoDB:
Command:
# sudo systemctl start mongod
Description: This command starts the MongoDB service, which is required to store user data and chat history.
Verification:#
# sudo systemctl status mongod
Description: This command checks the status of the MongoDB service to ensure it is running.
Setting Up the Backend:
Navigate to the Backend Directory:
Command:
# cd server
Install Dependencies:
Command:
# npm install
Description: This command installs all the necessary dependencies for the backend.
Start the Backend Server:
Command:
# npm start
Description: This command starts the backend server, enabling API endpoints and WebSocket connections.
Setting Up the Frontend:
Navigate to the Frontend Directory:
Command:
# cd ../public
Install Dependencies:
Command:
# npm install
Description: This command installs all the necessary dependencies for the frontend.
Start the Frontend Server:
Command:
# npm start
Description: This command starts the frontend development server, opening the application in your default web browser.

