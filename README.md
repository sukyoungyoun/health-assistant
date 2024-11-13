# Health Assistant Web Service

## Overview

This is a simple web service built using **Node.js** and **Express** to simulate a virtual health assistant that can provide medication suggestions and basic health advice based on user input. The service includes multiple endpoints that allow users to query for specific medications or receive health advice related to symptoms.

The service provides the following features:

- A welcome message for new users.
- A help endpoint to provide health advice based on symptoms.
- A medication endpoint that returns a list of available medications.
- A dynamic medication endpoint that filters medications by type and strength.

## Features

### 1. **Root Endpoint (`/`)**  
A welcome message for the user.

**Response:**  
Hello and welcome... I will be your virtual health assistant today. Please provide a query in order for me to assist you!

### 2. **Help Endpoint (`/help`)**  
Provides basic health advice based on two symptoms provided as query parameters.

**Query Parameters:**
- `symptom1`: The first symptom.
- `symptom2`: The second symptom.

**Sample Request:**
GET /help?symptom1=fever&symptom2=cough

**Sample Response:**
If your symptoms are fever and cough, then likely the reason for this is dehydration!

If either `symptom1` or `symptom2` is missing, the response will ask for both symptoms.

**Error Response:**
Provide two valid symptoms in the query.

### 3. **Medication List Endpoint (`/medication`)**  
Returns a list of all available medications.

**Sample Request:**
GET /medication

**Sample Response:**
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
4. Filtered Medication Endpoint (/medication/:type/:strength)
Filters medications based on type and strength.
Route Parameters:
type: The type of medication (e.g., "pain", "allergy", "digestive").
strength: The strength of the medication (e.g., "1", "3", "5").
Sample Request:
GET /medication/pain/1
Sample Response:
{
    "medications": [
        { "id": 0, "name": "Ibuprofen", "type": "pain", "strength": "1" },
        { "id": 1, "name": "Acetaminophen", "type": "pain", "strength": "1" }
    ]
}
Error Response:
{
    "error": "No matching medications were found for the provided type and strength."
}
