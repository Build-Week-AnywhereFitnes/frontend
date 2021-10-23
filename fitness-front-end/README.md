

## :point_up: **Pitch**

These days, fitness classes can be held anywhere a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. 

While you could use several mobile apps to accomplish this, **AnywhereFitness** is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. 

Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.


## :white_check_mark:  **MVP**

1. User can create/register as a `client` and login with the registered credentials.

2. User can create/register as an `instructor` by entering an additional Auth Code during sign-up, and can login with the registered credentials.

3. `client` and `instructor` are both presented with the appropriate on-boarding walkthrough on first sign-in, with an option to skip it.

4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`

6. Authenticated `instructor` can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)

7. Authenticated `user` can reserve a spot in a `class` with available seats open, and can reschedule or cancel their current `reservation` from the mobile app.




// __________________________________________________________________________________________________



______________Credentials:____________

added usernames/passwords for everyone. follow this format:

username: maby (first name from slack)

password: mabypassword (first name + "password")

all unit 4 = admin (can create, update, delete classes)
all unit 3 = user (can do everything else)


_______________ENDPOINTS:_______________


backend
All server-side routing and api [POST] Create a new user /api/auth/register

USERNAME - STRING - REQUIRED
PASSWORD - STRING - REQUIRED Returns the newly added user // will have another field for authorization code for instructors
[POST] Login existing user /api/auth/login

USERNAME - STRING - REQUIRED
PASSWORD - STRING - REQUIRED Returns message: `${dbUser.username} login successful at ${currentTime} and user info { username } // will return user id in addition to username [GET] List of all users /api/users Returns all users [GET] User by ID /api/users/:id
USER_ID - INT - REQUIRED Returns message: Get /api/users/:id running at ${currentTime} // currently not working
[GET] List of all classes /api/classes Returns all classes

[GET] Classes by ID /api/classes/:id

CLASS_ID - INT - REQUIRED Returns class data
[POST] Add class // Instructors only /api/classes/

Properties on Notion Returns newly added class
[PUT] Update class info // Instructors only /api/classes/:id

CLASS ID REQUIRED
Properties on Notion Returns edited class
[DELETE] Delete class // Instructors only /api/classes/:id

CLASS ID REQUIRED
Properties on Notion Returns message with id of deleted class