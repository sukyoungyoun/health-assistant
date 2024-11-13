# Virtual Health Assistant Web Service

This is a web service that helps you find medications based on type and strength, as well as provides health tips based on symptoms.

## Deployment URL

You can access the service here:  
[https://health-assistant-o4oq.onrender.com](https://health-assistant-o4oq.onrender.com)

## Routes

### 1. Root Route (`/`)

- **GET** `/`
- **Response:**  
  `"Hello and welcome... I will be your virtual health assistant today. Please provide a query in order for me to assist you!"`

### 2. Help Route (`/help`)

- **GET** `/help?symptom1=<symptom1>&symptom2=<symptom2>`
- **Description:** This route provides health tips based on the symptoms you provide.
- **Example:**  
  `/help?symptom1=headache&symptom2=dizziness`
- **Response:**  
  `"If your symptoms are headache and dizziness, then likely the reason for this is dehydration!"`
  
  If either symptom is missing, the response will be:  
  `"Provide two valid symptoms in the query."`

### 3. Medication List (`/medication`)

- **GET** `/medication`
- **Description:** This route provides a list of all available medications.
- **Response:** A JSON array containing all medications:
  ```json
  [
      { "id": 0, "name": "Ibuprofen", "type": "pain", "strength": "1" },
      { "id": 1, "name": "Acetaminophen", "type": "pain", "strength": "1" },
      { "id": 2, "name": "Morphine", "type": "pain", "strength": "5" },
      { "id": 3, "name": "Zyrtec", "type": "allergy", "strength": "1" },
      { "id": 4, "name": "Allegra", "type": "allergy", "strength": "1" },
      { "id": 5, "name": "Xyzal", "type": "allergy", "strength": "4" },
      { "id": 6, "name": "Peptobismol", "type": "digestive", "strength": "1" },
      { "id": 7, "name": "Tums", "type": "digestive", "strength": "1" },
      { "id": 8, "name": "Gaviscon", "type": "digestive", "strength": "3" }
  ]

### 4. Medication by Type and Strength (`/medication/:type/:strength`)

- **GET** `/medication/:type/:strength`
- **Description:** This route filters medications based on the type (e.g., "pain", "allergy", "digestive") and strength (e.g., "1", "5").
- **Example:**  
  `/medication/pain/1`
- **Response:**  
  A JSON array of medications matching the specified type and strength:
  ```json
  {
      "medications": [
          { "id": 0, "name": "Ibuprofen", "type": "pain", "strength": "1" },
          { "id": 1, "name": "Acetaminophen", "type": "pain", "strength": "1" }
      ]
  }
