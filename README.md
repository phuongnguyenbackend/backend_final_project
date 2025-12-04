## Implemented APIs

### 1. Health Check
- **URL**: `/check_health`
- **Method**: `GET`
- **Description**: Checks if the server is running.
- **Response**:
  ```json
  {
    "status": "ok",
    "message": "Server is healthy"
  }
  ```

### 2. Users

#### 2.1 Get User Profile (Default)
- **URL**: `/api/users/profile`
- **Method**: `GET`
- **Description**: Fetches the profile of the default user (currently hardcoded to ID 14).
- **Response**:
  ```json
  {
    "user_id":,
    "email": "",
    "password": "",
    "full_name": "",
    "address": "",
    "otp":,
    "is_email_verified":,
    "total_ratings":,
    "avg_rating":,
    "dob":,
    "created_at":,
    "upgrade_request_time":,
    "otp_expires":,
    "role": ""
  }
  ```

