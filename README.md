# Affiliate Postback Engine

Experience the Server to Server Postback Tracking 🌟

A lightweight affiliate postback tracking system 🚀 built with Node.js, Postgres, and Next.js. It lets affiliates track clicks, record conversions via server-to-server postbacks, and monitor results in a sleek dashboard. Designed as an MVP, it highlights the core principles of affiliate tracking and attribution—simple, clear, and extendable. Perfect for learning or building upon in real-world projects. 📊

[![Github License](https://img.shields.io/github/license/UjjwalSaini07/Affiliate-Postback-Engine)](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/blob/main/LICENSE)
[![Info](https://img.shields.io/badge/Project-Info-blue?style=flat&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzBBNEVBRjsiIGQ9Ik0yNTYsNTEyYy02OC4zOCwwLTEzMi42NjctMjYuNjI5LTE4MS4wMi03NC45OEMyNi42MjksMzg4LjY2NywwLDMyNC4zOCwwLDI1Ng0KCVMyNi42MjksMTIzLjMzMyw3NC45OCw3NC45OEMxMjMuMzMzLDI2LjYyOSwxODcuNjIsMCwyNTYsMHMxMzIuNjY3LDI2LjYyOSwxODEuMDIsNzQuOThDNDg1LjM3MSwxMjMuMzMzLDUxMiwxODcuNjIsNTEyLDI1Ng0KCXMtMjYuNjI5LDEzMi42NjctNzQuOTgsMTgxLjAyQzM4OC42NjcsNDg1LjM3MSwzMjQuMzgsNTEyLDI1Niw1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDYzRThCOyIgZD0iTTQzNy4wMiw3NC45OEMzODguNjY3LDI2LjYyOSwzMjQuMzgsMCwyNTYsMHY1MTJjNjguMzgsMCwxMzIuNjY3LTI2LjYyOSwxODEuMDItNzQuOTgNCglDNDg1LjM3MSwzODguNjY3LDUxMiwzMjQuMzgsNTEyLDI1NlM0ODUuMzcxLDEyMy4zMzMsNDM3LjAyLDc0Ljk4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNTYsMTg1Yy0zMC4zMjcsMC01NS0yNC42NzMtNTUtNTVzMjQuNjczLTU1LDU1LTU1czU1LDI0LjY3Myw1NSw1NVMyODYuMzI3LDE4NSwyNTYsMTg1eiBNMzAxLDM5NQ0KCVYyMTVIMTkxdjMwaDMwdjE1MGgtMzB2MzBoMTQwdi0zMEgzMDF6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQ0NFRkZGOyIgZD0iTTI1NiwxODVjMzAuMzI3LDAsNTUtMjQuNjczLDU1LTU1cy0yNC42NzMtNTUtNTUtNTVWMTg1eiIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDQ0VGRkY7IiBwb2ludHM9IjMwMSwzOTUgMzAxLDIxNSAyNTYsMjE1IDI1Niw0MjUgMzMxLDQyNSAzMzEsMzk1IAkiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K)](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/blob/main/README.md)
[![Generic badge](https://img.shields.io/badge/Owner-@Ujjwal-<COLOR>.svg)](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine)
[![GitHub stars](https://img.shields.io/github/stars/UjjwalSaini07/Affiliate-Postback-Engine?style=social&label=Star&maxAge=2592100)](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/stargazers)
[![Github Release](https://img.shields.io/github/v/release/UjjwalSaini07/Affiliate-Postback-Engine)](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine)

## 📡 What is Server-to-Server (S2S) Tracking?  
Server-to-Server (S2S) tracking is a method where **conversion events are transmitted directly between servers**, instead of relying on browser scripts or cookies. This approach delivers **higher accuracy, stronger security, and immunity to ad blockers**, making it the **gold standard in modern affiliate marketing**. By cutting out client-side dependencies, S2S ensures that every click and conversion is logged reliably, even in environments where cookies are restricted.  

## 🧩 Application & MVP  
This project is a **minimal viable product (MVP)** of an affiliate tracking engine, built for clarity and extendability.  

It demonstrates the core building blocks of affiliate attribution:  
- **Click Storage:** Log and map affiliate clicks with campaigns.  
- **Postback Handling:** Receive advertiser postbacks securely.  
- **Click-to-Conversion Match:** Attribute conversions to the right clicks.  
- **Dashboard Insights:** Visualize clicks and conversions in real time.  
- **Lightweight & Extendable:** Designed as a foundation to build upon.  

## 🔑 Key Features
- 🎯 **Click Tracking:** Map affiliates and campaigns seamlessly for accurate attribution.
- 🔗 **Secure Postbacks:** Record conversions safely through server-to-server endpoints.
- 🛠️ **Unique URLs:** Auto-generate affiliate-specific postback links with ease.
- 📊 **Modern Dashboard:** View clicks and conversions in a clean, intuitive interface.
- 🛡️ **Fraud Prevention:** Validate clicks before logging conversions to ensure trust.
- 🗄️ **Postgres-Powered:** Scalable storage backed by PostgreSQL for reliability.

## Demo 🖥️
> [!IMPORTANT]  
> Use the Docker image or run locally via localhost to get started now.

You can visit the live site here : --Temporarily Not Deployed--

## 🛠️ Technologies Used
- **Node.js (Express)** → Backend API for clicks and postbacks  
- **PostgreSQL** → Relational database for affiliates, clicks, conversions  
- **Next.js (React)** → Frontend affiliate dashboard with SSR  
- **Tailwind CSS** → Modern utility-first styling for responsive UI  
- **REST API** → Communication between frontend, backend, and database  
- **Git & GitHub** → Version control and collaborative development
- **Docker** → A container platform for easy deployment, scalability, and app management.

## Getting Started ⚙️
### Prerequisites

- **Node.js** v22.14.0 or higher  
- **pnpm** or **npm** (package managers)  
- **Code Editor** (e.g., VS Code)  
- **Git** (version control system)  
- **Docker** (for containerized deployments)  
- **PostgreSQL** (relational database)  
- **Modern Browser** (latest Chrome, Firefox, or Edge for development/testing)  

## Installation 🛠️
- First Read this [License](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/blob/main/LICENSE) & their terms then proceed.
- Star ⭐ the [Repository](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine)
- Fork the repository **(Optional)**
- Project Setup:
1. Clone the repository:
```bash
    git clone https://github.com/UjjwalSaini07/Affiliate-Postback-Engine.git
```
2. Navigate to the project main directory:
```bash
    cd Affiliate-Postback-Engine
```

> [!IMPORTANT]  
> All these cd directory paths are relative to the root directory of the cloned project.

### Frontend Setup:
-  Navigate to the project Frontend directory:
```bash
    cd frontend
```
- Install Frontend dependencies:
```bash
    pnpm install
```

### Backend Setup:
- Navigate to the project Backend directory:
```bash
    cd backend
```
- Install Backend dependencies:
```bash
    pnpm install
```
### Open Docker Engine:
```bash
    cd Affiliate-Postback-Engine
```
- Start PostgreSQL from Docker: Before that Install Locally
```bash
    docker compose up -d
```
```bash
    docker compose ps
```
### It look like this
<img width="1918" height="871" alt="image" src="https://github.com/user-attachments/assets/9c3a2220-de9a-4e63-a756-1a92072f3f38" />

- It Open the Database on **Port - 5432**

## Start the web app 🖥️
### For Frontend
- Start the Frontend Development server
```bash
    cd frontend
```
```bash
    pnpm dev
```
### For Backend
- Start the Backend Development server
```bash
    cd backend
```
```bash
    pnpm dev
```
### For Database
- You can run it using **Docker** or initialize it locally with the **PostgreSQL command-line service** — it depends on how you prefer to start the database engine.

## Project Setup Using Docker Containerization:
1. Start the Docker Engine Locally or Use Any Service Globally
2. Navigate to the project Root directory:
```bash
    cd Affiliate-Postback-Engine
```
3. Run DockerFile:
```bash
    docker-compose up --build
```
4. Wait for Generating the Image

#### How Docker Image Builds Looks
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/a2e23c0f-5704-47f3-9563-912d5656061c" />
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/cbed5bd4-bf43-4aa6-85ff-8ed1647120a2" />

5. Now Simply use the Project using Docker Container
6. **If u Want Direct Image Without Cloning So Contact with Me. [Contact](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/issues/new)**

## 📡 API Endpoints & Requests Procedure

- This project provides lightweight yet powerful **tracking and postback APIs** designed for affiliate marketing workflows.  
- Current MVP implementation uses `GET` requests for simplicity (future versions will support `POST` with JSON payloads for better scalability).  
- Each endpoint is designed with **idempotency in mind**, ensuring duplicate clicks or conversions are safely ignored.  
- Responses are JSON formatted, making them easy to consume programmatically or test manually.  
- Built for **real-world extensibility**: future improvements will include authentication, HMAC signing for postbacks, and rate limiting for better security and reliability.  
- Can be easily tested using `curl`, Postman, or Hoppscotch without any extra setup.

### 🔗 Endpoints Overview

- **Log a Click:** `GET /click?affiliate_id=&campaign_id=&click_id=`

- **Send a Postback (Conversion):** `GET /postback?affiliate_id=&click_id=&amount=&currency=`

- **List Affiliates:** `GET /affiliates`

- **Get All Clicks for an Affiliate:** `GET /affiliates/:id/clicks`

- **Get All Conversions for an Affiliate:** `GET /affiliates/:id/conversions`

### ⚡ Testing of the Requests (cURL) - Use Postman

- 📍 **Log a click**  
```bash
    curl "http://localhost:4000/click?affiliate_id=1&campaign_id=1&click_id=abc123"
```
- 📍 Send a postback (conversion)
```bash
    curl "http://localhost:4000/postback?affiliate_id=1&click_id=abc123&amount=100&currency=USD"
```
- 📍 Check for Error- Something Went Wrong {Passes Wrong Payload}
```bash
    curl "http://localhost:4000/postback?affiliate_id=2&click_id=abc123&amount=100&currency=USD"
```
- 📍 Get conversions for affiliate 1
```bash
    curl "http://localhost:4000/affiliates/1/conversions"
```

### Image Reference of Postman API Hiting
#### Curl Request 1: GET Method
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/89abe168-8e14-41d2-87b7-0bfcf35b55bc" />

#### Curl Request 2: GET Method
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/b5b53419-1ce5-453e-9ceb-23f0dd4d218a" />

#### Curl Request 3: GET Method
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/55e65d4b-970a-4905-9580-6d3c68001c02" />

#### Curl Request 4: GET Method
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/32fe0807-9b17-4321-b89d-ad76280b54dd" />

## DataBase Setup Locally ⚙️
### 🔎 Quick Check
- Open Powershell or Cmd on dir - `cd Affiliate-Postback-Engine`
- Run this to view all conversions joined with their clicks (ordered by affiliate):

```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    SELECT c.id, c.amount, c.currency, cl.click_id, cl.affiliate_id
    FROM conversions c
    JOIN clicks cl ON c.click_id = cl.id
    ORDER BY cl.affiliate_id;"
```

### Check if click exists
1. 🔍 Individual Check
```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    SELECT * FROM clicks WHERE affiliate_id = 3 AND click_id = 'abc999';"
```
- If 0 rows returned, insert the click first:
```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO clicks (affiliate_id, campaign_id, click_id)
    VALUES (3, 2, 'abc999')
    ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;"
```
- Adjust campaign_id to a valid campaign for that affiliate.

2. Insert conversion safely
```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO conversions (click_id, amount, currency)
    VALUES ((SELECT id FROM clicks WHERE affiliate_id = 3 AND click_id = 'abc999'), 200, 'USD')
    ON CONFLICT (click_id) DO NOTHING;"
```

### 📊 Sample Test Data Inserts
#### Affiliate 1 – Clicks & Conversions
```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO clicks (affiliate_id, campaign_id, click_id)
    VALUES 
      (1, 1, 'abc123'),
      (1, 1, 'def456')
    ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;"
    
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO conversions (click_id, amount, currency)
    VALUES
      ((SELECT id FROM clicks WHERE affiliate_id = 1 AND click_id = 'abc123'), 100, 'USD'),
      ((SELECT id FROM clicks WHERE affiliate_id = 1 AND click_id = 'def456'), 150, 'USD')
    ON CONFLICT (click_id) DO NOTHING;"
```
#### Affiliate 2 – Clicks & Conversions
```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO clicks (affiliate_id, campaign_id, click_id)
    VALUES 
      (2, 2, 'xyz999'),
      (2, 2, 'uvw111')
    ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;"
    
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO conversions (click_id, amount, currency)
    VALUES
      ((SELECT id FROM clicks WHERE affiliate_id = 2 AND click_id = 'xyz999'), 50, 'USD'),
      ((SELECT id FROM clicks WHERE affiliate_id = 2 AND click_id = 'uvw111'), 75, 'USD')
    ON CONFLICT (click_id) DO NOTHING;"
```
#### Affiliate 3 – Clicks & Conversions
```bash
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO clicks (affiliate_id, campaign_id, click_id)
    VALUES 
      (3, 1, 'lmn123'),
      (3, 1, 'opq456')
    ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;"
    
    psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
    INSERT INTO conversions (click_id, amount, currency)
    VALUES
      ((SELECT id FROM clicks WHERE affiliate_id = 3 AND click_id = 'lmn123'), 120, 'USD'),
      ((SELECT id FROM clicks WHERE affiliate_id = 3 AND click_id = 'opq456'), 90, 'USD')
    ON CONFLICT (click_id) DO NOTHING;"
```

## 🔒 Security & Correctness Notes

- **Validation**: Every conversion request validates that the given `affiliate_id` and `click_id` pair exists before inserting. This ensures conversions cannot be logged against mismatched or invalid clicks.  
- **Idempotency**:  
  - The `conversions` table enforces a **`UNIQUE(click_id)` constraint** to guarantee no duplicate conversions for the same click.  
  - The `/postback` route also performs a check and returns **`409 Conflict`** if a duplicate is attempted.  
- **SQL Injection Prevention**: All database interactions use **parameterized queries** (`$1, $2, …`) to safely handle user input.  
- **Optional Security Improvements**:  
  - **HMAC-Signed Postbacks**: Advertisers could sign each postback request using a shared secret.  
  - The backend would verify the signature before processing, ensuring requests cannot be forged or tampered with.  
- **Caveat (MVP Limitation)**:  
  - Current implementation uses **`GET` requests** for simplicity (common in affiliate postback flows).  
  - Future iterations should move to **`POST + JSON body + HMAC`** for stronger security and industry alignment.  

## Resources 📚
- [Nodejs Docs](https://nodejs.org/en)
- [Tailwind Docs](https://tailwindcss.com/docs/installation/using-vite)
- [Nextjs Docs](https://nextjs.org/docs)
- [Postgre SQL Docs](https://www.postgresql.org/docs/)
- [REST API Docs](https://docs.github.com/en/rest?apiVersion=2022-11-28)

## Author ✍️
- [@Ujjwal Saini](https://github.com/UjjwalSaini07)

## Screenshots 📷
<img width="1918" height="925" alt="image" src="https://github.com/user-attachments/assets/4eaf9a3b-e9d3-4f49-abc4-b45d2465bfd3" />
<img width="1897" height="917" alt="image" src="https://github.com/user-attachments/assets/a67ded65-2c61-4b7c-8f13-bb38c4d734f8" />
<img width="1901" height="922" alt="image" src="https://github.com/user-attachments/assets/37dd53ca-eac9-4f3f-96e0-64e8474d9e99" />

### Terminal Data fetching
<img width="1598" height="628" alt="image" src="https://github.com/user-attachments/assets/311d9c38-8cc7-42b1-8e43-c90f9277275f" />

## Contact 📞
Feel free to reach out if you have any questions or suggestions!

- Raise an issue for the same [Issue](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/issues/new)
- Github: [@Ujjwal Saini](https://github.com/UjjwalSaini07)

## License 📄
License Credential [LICENSE](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/blob/main/LICENSE)

## Feedback and Contributions 💌
Sorry But this repository not welcome Contributions! Yes u gave a Feedback and Suggestion via raising the [Issue](https://github.com/UjjwalSaini07/Affiliate-Postback-Engine/issues).

<div align="center">
    <a href="#top">
        <img src="https://img.shields.io/badge/Back%20to%20Top-000000?style=for-the-badge&logo=github&logoColor=white" alt="Back to Top">
    </a>
</div>
