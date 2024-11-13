# Virtual Health Assistant Web Service

This is a web service that helps you find medications based on type and strength, and also provides health tips based on symptoms.

## Deployment URL
https://health-assistant-o4oq.onrender.com

## Routes
### 1. Root Route (`/`)
- **GET** `/`  
  - Response: "Hello and welcome... I will be your virtual health assistant today. Please provide a query in order for me to assist you!"

### 2. Help Route (`/help`)
- **GET** `/help?symptom1=<symptom1>&symptom2=<symptom2>`  
  - Example: `/help?symptom1=headache&symptom2=dizziness`  
  - Response: "If your symptoms are headache and dizziness, then likely the reason for this is dehydration!"

### 3. Medication List (`/medication`)
- **GET** `/medication`  
  - Response: List of all medications.

### 4. Medication by Type and Strength (`/medication/:type/:strength`)
- **GET** `/medication/:type/:strength`  
  - Example: `/medication/pain/1`  
  - Response: List of medications matching the type and strength.

