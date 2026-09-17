# Data import


- [Data import](#data-import)
  - [Downloading the template](#downloading-the-template)
  - [Personalize the template](#personalize-the-template)
  - [Importing users \& roles](#importing-users--roles)
    - [User \& Role tab fields](#user--role-tab-fields)



## Downloading the template

You can import users & roles via **XLSX* files.


**Roles involved**:

- **Account Admin**

1. Go to **Admin Portal** > **Items**.
2. In the search bar, enter **Data**.
3. Click the **Data** result and click **Export**.

{Screenshot of the admin downloading a template from an admin section in a SaaS product}


This exports the data from the product into an *XLSX* file.

## Personalize the template

1. Open the *.XLSX* template.
2. Personalize the **Configuration** tab.


| Attribute | Description |
| -------- | ------- |
| `unique` | Enter the data identifier. |
| `richtexteditor` | Defines if the text has to be imported as HTML, or as plain text. Type must be `Boolean` (only `TRUE` or `FALSE`). Enter `TRUE` if the text has to be imported as HTML.

3. Once you're done, save the *.XLSX* file.
4. Go back to **Admin Portal** > **Items** > **Product**.
5. Click **Import**.

{Screenshot of an .XLSX template used to data classes}


6. Click **browse** and select the *.XLSX* file.
7. Click **Update**.

The data has been updated/imported.

:::tip
All actions related to imports are logged in the *import.log* file.
:::


## Importing users & roles

Similarly to data import, to import users and roles, firstly, you need to download the template. To perform a user & role import:


1. Go to **Admin Portal** > **Users**.
2. Click **Download Account Template**.
3. Open the *.XLSX* template.

{Screenshot of an .XLSX template used to import users and roles}


4. Complete the **User & Role** tab fields.

:::tip
All actions related to the import of users and roles are logged in the *users.log* file.
:::

### User & Role tab fields

| Field | Description |
| -------- | ------- |
| `identity` | Enter a unique identifier for the user. The name will be the default name displayed in the application.
| `Password` | Enter a password for the user.
| `Language` | Enter the ISO 639 language code (e.g., *hr* - Croatia).
| `SINGLE-SIGN-ON` | Enter either `YES` or `NO`. To enable Single Sign On, enter `YES`.
| `2-FACTOR` | Enter either `YES` or `NO`. To enable Two Factor Authentication, enter `YES`.
| `Role` | Enter the role for your user.

5. Once you've set up your *.XLSX* file, save it and go back to **Admin Portal** > **Users**.
6. Click **Import Users**.
7. Click **browse** and select the *.XLSX* file.
8. Click **Update**.

The users and roles have been imported. If you don't see your newly imported or updated users & roles, make sure to:

- refresh the page;
- see the *import.log* file. The file contains instructions on how to troubleshoot an *.XLSX* import file.

