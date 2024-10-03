# BaseAI's Modular Approach to AI Development

**BaseAI** is a modular AI development framework designed for web developers using JavaScript and TypeScript. It simplifies the integration of AI features into web applications, enabling the creation of agentic AI systems through composable components. This framework aims to reduce the complexity of traditional AI tools, making AI development accessible and efficient.

This specific repository contains the code used in the blog: [Composable AI Agents for the Web: BaseAI's Modular Approach to AI Development](blog.link)

## Overview

BaseAI allows developers to create flexible and scalable AI systems by composing agents, tools, and memory. With excellent TypeScript support, it offers a developer-friendly experience, including local development, debugging, and deployment to a serverless AI cloud.

## Code Description

### Key Components

1. **Agent**: The core class representing an AI entity responsible for executing tasks. Developers can extend this class to create specific AI agents tailored to their applications.

2. **Agentic Tools**: Reusable components that interact with external data sources or APIs. These tools allow agents to fetch or manipulate data seamlessly.

3. **Agentic Memory**: A storage mechanism for maintaining context across tasks. It enables agents to store and retrieve past interactions, enhancing their ability to provide relevant responses.

4. **Agentic Pipes**: Communication channels that facilitate data transfer between agents. They allow for a modular and organized flow of information in AI pipelines.

## Getting Started

To get started with this example, you'll need to clone the repo and install the dependencies.

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Usage

1. **Clone the repo**:

    ```bash
    git clone https://github.com/ahmadhassan71/BaseAI-s-Modular-Approach-to-AI-Development.git
    ```

2. **Installation**:
To install BaseAI and other dependencies in your project, run:

     ```bash
     npm install
     ```

3. **Open the Application**:
To run the application:

     ```bash
     npm run dev
     ```

4. **Running the Code**
Environment Setup: Make sure you have your .env file set up with your API key:

     ```makefile
     OPENAI_API_KEY="your-open-ai-key"
     URL="yoururl.com"
     ```

5. **Run BaseAI Server:**
Start the BaseAI server:

     ```bash
     npx baseai@latest pipe
     ```

6. **Run the code:**

     ```bash
     npx tsx index.ts
     ```

