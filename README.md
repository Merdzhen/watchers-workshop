# WATCHERS workshop
This is a one-page landing page for a watch workshop. We made it together with three of my colleagues during internship in Elbrus bootcamp in three working days. All git history you can find in the original repository https://github.com/IElizaI/project-from-the-client

The workshop Watchers make handmade watches. All watches are made individually for each client. On the main page clients can see examples of previous work, read about the company and leave a request if they want to order a watch. After receiving new request the website sends email to the client with notification that the request has been received.

For administrators we created secret page via link '/admin'. Here new admin can make a request to become administrator, but can not login without approve. To give approve to new administrator, our superAdmin :) can change 'approved' column to 'true' value in the database, 'Admins' table.

Admin can edit cards with examples of watches, delete or create new card. In admin's page admin can see the list of requests from users, and can also download the list of watch examples and the list of clients' contacts in CSV format.
