## Carbon Credit Analysis Hub
### Project Description -
This project is a comprehensive hub for analyzing and visualizing carbon credit data. It provides a robust, full-stack framework for sourcing, cleaning, and interpreting data from various carbon markets. Our goal is to make complex market dynamics accessible, enabling researchers, investors, and policymakers to make data-driven decisions regarding carbon offsets and market trends. The application features an interactive dashboard and an integrated AI agent to provide deeper insights.

### Features -
1. Data Scraping: Automated scripts to pull real-time and historical data from leading carbon credit registries and exchanges.
2. Market Analysis: In-depth analysis modules to identify trends, price volatility, and supply/demand dynamics.
3. Interactive Dashboard: A dynamic, web-based dashboard for visualizing key metrics, project types, and regional distribution.
4. Predictive Modeling: A machine learning model to forecast future carbon credit prices based on historical data and external factors.
5. AI Agent Integration: An interactive AI agent powered by the Gemini API to answer user queries, summarize data, and provide conversational insights.

### Tech Stack -
This project is built using a modern full-stack architecture with a Next.js frontend and a Python backend.
Frontend: Next.js (with TypeScript), TypeScript
- Data Visualization: D3.js, Plotly.js
- Styling: Tailwind CSS
- Backend: Python
- Web Framework: Flask
- Data Handling: Pandas, NumPy
- Machine Learning: Scikit-learn, TensorFlow
- AI Integration: Google Generative AI (google-generativeai)

### Full-Stack Architecture -
The frontend and backend are decoupled and communicate exclusively via a RESTful API.
1. Frontend (Next.js): Acts as the client, managing the user interface. It makes asynchronous HTTP requests (GET, POST, etc.) to the Python backend to fetch data, trigger analysis, or interact with the AI agent. 2. Backend (Python/Flask): Acts as the server. It listens for incoming requests, performs the necessary logic (data processing, model predictions, Gemini API calls), and returns the results as a JSON response.
3. AI Agent Workflow: When a user submits a query to the AI agent on the frontend, a POST request is sent to a dedicated endpoint on the Python backend. The backend then securely forwards this query to the Gemini API, processes the response, and sends the AI-generated content back to the frontend for display. This architecture ensures that sensitive API keys are never exposed on the client side.

### Use Cases -
1. Researchers: Use the dataset and analysis tools for academic research on climate policy and carbon economics.
2. Investors: Analyze market trends and use predictive models to inform investment strategies in carbon offset projects.
3. Environmentalists: Monitor the effectiveness of carbon offset projects and identify areas for improvement in the market.

### Demonstration -
1.Dasboard with interactive market Trading :
<img width="718" height="597" alt="image" src="https://github.com/user-attachments/assets/4cb9c812-e107-42f2-b034-0d146c9668f4" />

2. AI-CarbonCredit Assistant :
<img width="711" height="595" alt="image" src="https://github.com/user-attachments/assets/b7959bfc-4a5a-4885-a423-dd4436cc1785" />

A screenshot of the interactive dashboard, showcasing data visualizations and key metrics.

### Installation -
`` Clone the repository:

git clone https://github.com/your-username/carbon-credit-analysis.git
cd carbon-credit-analysis
- Set up the Backend:
- Navigate to the backend/ directory and install the dependencies.
- Create a .env file in this directory and add your database and API keys:
GEMINI_API_KEY=your_gemini_api_key

npm run dev
This will start the Next.js development server on http://localhost:3000.
