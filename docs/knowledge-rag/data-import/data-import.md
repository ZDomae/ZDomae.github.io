# Data import

> Import data, users, and roles from an XLSX template. Use the same flow for data classes and for users.

[[toc]]

## Downloading the template

### Prerequisites

- Role: **Account Admin**.

### Procedure

You can import users and roles from an `.xlsx` file.

1. Go to **Admin Portal** > **Items**.
2. In the search bar, enter **Data**.
3. Click the **Data** result and click **Export**.

![Screenshot: admin downloading template](/knowledge-rag/data-import-download.png)

This exports current product data as an `.xlsx` file.

### Verification

An `.xlsx` file downloads to your computer.

## Personalizing the template

### Prerequisites

- You have downloaded the template.
- You have an app that can edit `.xlsx` files.

### Procedure

1. Open the `.xlsx` template.
2. Update the **Configuration** tab:

| Attribute | Description |
| --- | --- |
| `unique` | Enter the data identifier. |
| `richtexteditor` | Defines whether the text is imported as HTML or plain text. Enter `TRUE` or `FALSE`. Enter `TRUE` to import as HTML. |

![Screenshot: XLSX template for data classes](/knowledge-rag/data-import-xlsx-data.png)

3. Save the `.xlsx` file.
4. Go to **Admin Portal** > **Items** > **Product**.
5. Click **Import**.
6. Click **Browse** and select the `.xlsx` file.
7. Click **Update**.

### Verification

The data is imported. To confirm, search for one of the imported items in **Product**.

::: tip
All import actions are logged in `import.log`.
:::

## Importing users and roles

### Prerequisites

- Role: **Account Admin**.

### Procedure

As with data, you first download the template.

1. Go to **Admin Portal** > **Users**.
2. Click **Download Account Template**.
3. Open the `.xlsx` template.

![Screenshot: XLSX template for users and roles](/knowledge-rag/data-import-xlsx-users.png)

4. Complete the **User & Role** tab.

::: tip
All user and role import actions are logged in `users.log`.
:::

#### User and role tab fields

| Field | Description |
| --- | --- |
| `identity` | Enter a unique identifier for the user. The display name defaults to this value. |
| `Password` | Enter a password for the user. |
| `Language` | Enter the ISO 639 code (for example, `hr` for Croatian). |
| `SINGLE-SIGN-ON` | Enter `YES` or `NO`. Enter `YES` to enable single sign-on. |
| `2-FACTOR` | Enter `YES` or `NO`. Enter `YES` to enable two-factor authentication. |
| `Role` | Enter the role for the user. |

5. Save the `.xlsx` file and go to **Admin Portal** > **Users**.
6. Click **Import Users**.
7. Click **Browse** and select the `.xlsx` file.
8. Click **Update**.

### Verification

Users and roles appear in **Admin Portal** > **Users**. If you do not see them:

- Refresh the page.
- Check `import.log` for troubleshooting details.

