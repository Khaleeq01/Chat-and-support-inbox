 Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/ai-support-ticket-app.git

     cd ai-support-ticket-app

2. Install dependencies
npm install
3. Run the app
bash
Copy
Edit
npm run dev
The app will be available at http://localhost:5173/

AI Logic (Brief)
While the app does not use an actual AI backend, it simulates an AI Support Assistant experience by:

<h5>1-Preloading conversations between Learner and Support.</h5>

<h5>2-Letting users add new messages as if they are interacting with a support bot.</h5>

<h5>3-In real-world applications, this could be extended to integrate with tools like Dialogflow, OpenAI API, or LangChain for dynamic AI replies.</h5>

Key Features

<h5>1-Ticket-based conversation view</h5>
<h5>2-Split UI: Sidebar (tickets) + Chat panel</h5> 
<h5>3-Real-time message updates</h5>
<h5>4-Message persistence using localStorage</h5>
<h5>5-Responsive and centered layout</h5>
<h5>6-Modular components: Sidebar, ChatPanel, TicketCard</h5>

